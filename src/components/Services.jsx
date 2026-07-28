export default function Services() {
    const services = [
        {
            name: 'DevSecOps',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
            description: 'Pipelines CI/CD con SAST (Bandit) y escaneo de imágenes (Trivy). Contenedores Docker non-root, GitHub Actions, separación de entornos.',
            link: 'https://github.com/christian-santibanez/sentinel-api-analyzer',
        },
        {
            name: 'AppSec · API Security',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
            description: 'Auditoría activa OWASP API Top 10: BOLA, Broken Auth, Mass Assignment, JWT Misconfiguration. Hallazgos mapeados a MITRE ATT&CK y NIST CSF.',
            link: 'https://github.com/christian-santibanez/sentinel-api-analyzer',
        },
        {
            name: 'Desarrollo seguro',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
            description: 'Backend FastAPI/Django con autenticación JWT, rate limiting, logging estructurado para SIEM y control de acceso desde el diseño.',
            link: 'https://github.com/christian-santibanez/Restaurant',
        },
        {
            name: 'Infraestructura',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
            description: 'Linux, PostgreSQL, variables de entorno por ambiente, despliegue en Netlify y Render. Fundamentos de IaC con OpenTofu.',
            link: 'https://github.com/christian-santibanez',
        },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Lo que hago</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Áreas de trabajo</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Integración de seguridad en el ciclo completo de desarrollo de software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt={service.name} className="w-10 dark:invert" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm mt-5 hover:text-[#2d9cbc] transition duration-300">
                            Ver en GitHub
                            <img src="./assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}