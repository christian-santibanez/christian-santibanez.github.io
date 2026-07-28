import { useState } from 'react'

const projects = [
    {
        name: 'Sentinel API Analyzer',
        image: './assets/work-1.png',
        tag: 'DevSecOps · AppSec',
        github: 'https://github.com/christian-santibanez/sentinel-api-analyzer',
        demo: null,
        description: 'Auditor OWASP API Top 10 activo con mapeo automático a MITRE ATT&CK y NIST CSF. Detecta BOLA/IDOR, Broken Authentication, Mass Assignment, CORS, JWT Misconfiguration y más.',
        stack: ['FastAPI', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'GitHub Actions', 'Bandit', 'Trivy'],
        highlights: [
            '7 checks activos sobre endpoints REST',
            'Pipeline DevSecOps: SAST con Bandit + escaneo de imágenes con Trivy',
            'Contenedores Docker multi-stage no-root (UID 10001)',
            'Logging estructurado JSON listo para SIEM',
            'Frontend React + TypeScript con WebSockets en tiempo real',
        ],
    },
	{
		name: 'CloudGuard-GitOps',
		image: './assets/work-2.png',
		tag: 'DevSecOps · GitOps · IaC Segura',
		github: 'https://github.com/christian-santibanez/cloud-guard-gitops',
		demo: null,
		description: 'Acelerador DevSecOps/GitOps que automatiza el análisis de seguridad de un microservicio y su infraestructura Terraform antes del despliegue, bloqueando el pipeline ante vulnerabilidades o configuraciones críticas. Infraestructura con fallos intencionales auditables y pipeline verificado end-to-end.',
		stack: ['FastAPI', 'Terraform', 'Podman', 'Gitleaks', 'Checkov', 'tfsec', 'KICS', 'Trivy'],
		highlights: [
		    'Pipeline CI/CD de 4 stages con gates bloqueantes (set -euo pipefail, sin || true)',
		    'Detección de secretos con Gitleaks + Trufflehog, excepciones auditables con 5 campos obligatorios',
		    'Análisis estático de IaC (Checkov, tfsec, KICS) sobre módulos Terraform con fallos CWE/CIS documentados',
		    'Autenticación con múltiples API Keys y comparación en tiempo constante (mitigación CWE-208)',
		    'Modelo de amenazas STRIDE completo, trazado control por control a la implementación real',
		],
	},
    {
        name: 'sushidelux.cl',
        image: './assets/work-3.png',
        tag: 'Full Stack · Producción real',
        github: 'https://github.com/christian-santibanez/Restaurant',
        demo: 'https://sushideluxpirque.netlify.app',
        description: 'Plataforma e-commerce de pedidos en producción real con integración de pagos chilenos (Webpay/Flow) y arquitectura segura desde el diseño.',
        stack: ['Django', 'React', 'JWT', 'PostgreSQL', 'Netlify', 'Render'],
        highlights: [
            'Autenticación JWT con access + refresh tokens y rotación segura',
            'Integración Webpay / Flow con manejo de datos de pago sensibles',
            'CORS, CSRF y variables de entorno separadas por ambiente',
            'Despliegue Netlify (frontend) + Render (backend)',
        ],
    },
    {
        name: 'SOC Blue Team Toolkit',
        image: './assets/work-4.png',
        tag: 'Python · Automatización defensiva',
        github: 'https://github.com/christian-santibanez/soc-blue-team-automation-toolkit',
        demo: null,
        description: 'Toolkit open source para automatización de tareas SOC con enfoque en Security by Design, logging estructurado y validación estricta de datos.',
        stack: ['Python', 'Pydantic', 'pytest', 'Bandit', 'GitHub Actions'],
        highlights: [
            'Detección de ASN inusual y monitoreo de MFA',
            'Validación estricta de esquemas con Pydantic',
            'Logging estructurado listo para SIEM',
            'Cobertura de tests superior al 85%',
        ],
    },
    {
        name: 'Portafolio',
        image: './assets/work-5.png',
        tag: 'React · GitHub Pages',
        github: 'https://github.com/christian-santibanez',
        demo: 'https://christian-santibanez.github.io',
        description: 'Portafolio personal construido en React con Tailwind CSS. Modo oscuro, diseño responsivo y deploy en GitHub Pages.',
        stack: ['React', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
        highlights: [
            'Dark/light mode con persistencia en localStorage',
            'Diseño responsivo mobile-first',
            'Deploy automatizado en GitHub Pages',
        ],
    },

];

export default function Work() {
    const [selected, setSelected] = useState(null);

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Proyectos</h4>
            <h2 className="text-center text-3xl sm:text-5xl font-Ovo">Lo que he construido</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Proyectos con código real, no demos. Seguridad integrada desde el diseño.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-5 dark:text-black">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        onClick={() => setSelected(project)}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-700">{project.tag}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#2d9cbc] transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a href="https://github.com/christian-santibanez" target="_blank" rel="noopener noreferrer"
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Ver más en GitHub
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white dark:bg-darkTheme rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cerrar */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-darkHover transition"
                        >
                            <img src="./assets/close-black.png" alt="Cerrar" className="w-4 dark:hidden" />
                            <img src="./assets/close-white.png" alt="Cerrar" className="w-4 hidden dark:block" />
                        </button>

                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{selected.name}</h2>
                        <p className="text-sm text-gray-500 dark:text-white/60 mb-4">{selected.tag}</p>
                        <p className="text-gray-600 dark:text-white/80 text-sm mb-5">{selected.description}</p>

                        {/* Highlights */}
                        <ul className="mb-5 space-y-1">
                            {selected.highlights.map((h) => (
                                <li key={h} className="text-sm text-gray-600 dark:text-white/70 flex gap-2">
                                    <span className="text-green-500 mt-0.5">✓</span> {h}
                                </li>
                            ))}
                        </ul>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selected.stack.map((tech) => (
                                <span key={tech} className="text-xs bg-gray-100 dark:bg-darkHover text-gray-700 dark:text-white/80 px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                            <a href={selected.github} target="_blank" rel="noopener noreferrer"
                                className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-white/30 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-darkHover transition dark:text-white">
                                Ver en GitHub
                            </a>
                            {selected.demo && (
                                <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 px-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm hover:opacity-90 transition">
                                    Ver sitio
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}