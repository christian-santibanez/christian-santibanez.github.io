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

export default function Header() {
    const utcOffset = getChileUTCOffset();
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-16">
            <img
                src="./assets/profile-img.png"
                alt="Foto de perfil de Christian Santibáñez"
                className="rounded-full w-32 h-32 object-cover object-top"
            />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hola, Soy Christian Santibáñez
            </h3>
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-Ovo">
                DevSecOps Engineer · AppSec
            </h1>
            <p className="text-gray-500 dark:text-white/60 font-Ovo text-lg">
                Santiago, Chile · Remoto ({utcOffset})
            </p>
            <p className="max-w-2xl mx-auto font-Ovo">
                Integro seguridad en el ciclo de desarrollo: pipelines CI/CD con SAST/SCA, hardening de contenedores y auditoría activa de APIs bajo OWASP API Top 10.
            </p>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm text-green-700 dark:text-green-400 font-medium">Disponible para roles remotos — DevSecOps / AppSec</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-[#1F4E5F] hover:bg-[#2a6477] text-white flex items-center gap-2 dark:border-transparent transition duration-300">
                    hablemos <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>
                <a href="./assets/Christian_Santibanez_CV_Ingeniero.pdf" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    descargar CV <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}