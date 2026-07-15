import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

                <a href="#!" className="font-Outfit font-bold text-2xl text-gray-900 dark:text-white mr-14 tracking-tight">
                    Christian<span className="text-[#2d9cbc]">.</span>
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent ">
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#top">Inicio</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#about">Sobre mí</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#services">Servicios</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#certifications">Certificaciones</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#work">Proyectos</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contacto</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/christian-santibanez" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-700 dark:text-white hover:text-[#2d9cbc] dark:hover:text-[#2d9cbc] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/csantibanezmartinez" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-[#2d9cbc] dark:hover:text-[#2d9cbc] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>

                    <button onClick={toggleTheme} className="flex items-center justify-center w-5 h-5">
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30">
                        Contacto
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Inicio</a></li>
                    <li><a href="#about" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Sobre mí</a></li>
                    <li><a href="#services" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Servicios</a></li>
                    <li><a href="#certifications" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Certificaciones</a></li>
                    <li><a href="#work" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Proyectos</a></li>
                    <li><a href="#contact" onClick={closeMenu} className="hover:text-gray-500 dark:hover:text-gray-300 transition">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}