export default function About() {
    const tools = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    ];

    const data = [
        {
            name: 'Stack técnico',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Python, FastAPI, Django, React, TypeScript, Docker, GitHub Actions, Bandit, Trivy, JWT, PostgreSQL',
        },
        {
            name: 'Educación',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Ingeniero en Informática — INACAP Chile · Microcredencial en Hacking Ético — Universidad de Cantabria, España',
        },
        {
            name: 'Proyectos',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Sentinel API Analyzer · sushidelux.cl (producción real)',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 pt-20 md:pt-10">
            <h4 className="text-center mb-2 text-lg font-Ovo">Información personal</h4>
            <h2 className="text-center text-5xl font-Ovo">Sobre mí</h2>

            <div className="flex w-full flex-col md:flex-row items-start gap-10 mb-6 md:my-10">
                <div className="w-full md:w-auto md:max-w-max flex justify-center md:justify-start md:mx-0">
                    <img src='./assets/profile-img2.png' alt="Christian Santibáñez" className="w-64 rounded-3xl object-cover object-top" />
                </div>

                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        Ingeniero en Informática (INACAP, Chile) enfocado en DevSecOps y Application Security. Construí Sentinel API Analyzer, un auditor OWASP API Top 10 con hallazgos mapeados a MITRE ATT&CK y NIST CSF, pipeline DevSecOps en GitHub Actions con Bandit y Trivy, contenedores Docker no-root y logging estructurado para SIEM. También desarrollé y desplegué sushidelux.cl, plataforma e-commerce en producción con JWT, pagos Webpay/Flow y CORS/CSRF por ambiente.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li key={item.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Herramientas y stack</h4>

                    <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" title={tool.name}>
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}