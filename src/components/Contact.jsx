import { useEffect, useState } from 'react'

// Calcula el offset UTC actual de la zona horaria de Santiago de Chile
function getChileUTCOffset() {
    const now = new Date();
    const santiago = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }));
    const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
    const offsetMinutes = (santiago - utc) / 60000;
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const abs = Math.abs(offsetMinutes / 60);
    return `UTC${sign}${abs}`;
}

export default function Contact() {
    const [result, setResult] = useState("");
    const utcOffset = getChileUTCOffset();
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Please fill out captcha field");
            return
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "7e3feaf7-3ba5-4652-ad0e-c9ad976fbeef");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult("¡Mensaje enviado correctamente!");
            event.target.reset();
        } else {
            setResult("Hubo un error al enviar. Inténtalo de nuevo.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Conéctate conmigo</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Ponte en contacto</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Disponible para roles DevSecOps / AppSec Engineer, modalidad 100% remota ({utcOffset}). Si estás contratando o conoces una posición junior en este perfil, escríbeme.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Christian Santibañez - Nuevo mensaje" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Ingresa tu nombre" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="nombre" />

                    <input type="email" placeholder="Ingresa tu email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="email" />
                </div>
                <textarea rows="6" placeholder="Ingresa tu mensaje" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" required name="mensaje"></textarea>
                <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-[#1F4E5F] hover:bg-[#2a6477] text-white rounded-full mx-auto transition duration-300 dark:border dark:border-white/30">
                Enviar ahora
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}