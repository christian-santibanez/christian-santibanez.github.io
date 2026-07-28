const certs = [
    {
        name: 'LFD121: Developing Secure Software',
        issuer: 'The Linux Foundation',
        year: '2026',
        url: 'https://www.credly.com/badges/913a3c4c-149c-4711-88da-064d1cd74a95/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
        name: 'SKF100: Understanding the OWASP® Top 10',
        issuer: 'The Linux Foundation',
        year: '2026',
        url: 'https://www.credly.com/badges/27949821-5bc0-4e95-aaef-79dbd929b66e/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    },
    {
        name: 'LFEL1010: XSS Exploits and Defenses',
        issuer: 'The Linux Foundation',
        year: '2026',
        url: 'https://www.credly.com/badges/292cb7d8-3315-4cc4-8bba-682cce06ecf6/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
        name: 'LFC108: Cybersecurity Essentials',
        issuer: 'The Linux Foundation',
        year: '2026',
        url: 'https://www.credly.com/badges/e1e4794d-5a8b-49a7-b45f-baccf5eec4e0/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    },
    {
        name: 'LFEL1009: Getting Started with OpenTofu',
        issuer: 'The Linux Foundation',
        year: '2026',
        url: 'https://www.credly.com/badges/7cdee6fa-052f-4e90-85f6-d825a744bd7e/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    },
    {
        name: 'AWS Academy Graduate — Cloud Foundations',
        issuer: 'Amazon Web Services',
        year: '2024',
        url: 'https://www.credly.com/badges/dfa5ccb4-71fe-4ae0-a394-72ca09179054/public_url',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    },
];

export default function Certifications() {
    return (
        <div id="certifications" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Credenciales</h4>
            <h2 className="text-center text-2xl sm:text-5xl font-Ovo">Certificaciones</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Formación verificable en desarrollo seguro, OWASP e infraestructura cloud.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certs.map((cert) => (
                    <a
                        key={cert.name}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 border border-gray-300 dark:border-white/30 rounded-xl p-5 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 cursor-pointer"
                    >
                        <img src={cert.icon} alt={cert.issuer} className="w-8 h-8 mt-1 shrink-0 dark:invert" />
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white text-sm leading-snug">{cert.name}</h3>
                            <p className="text-xs text-gray-500 dark:text-white/60 mt-1">{cert.issuer} · {cert.year}</p>
                            <span className="text-xs text-blue-600 dark:text-blue-400 mt-1 inline-block">Ver credencial →</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}