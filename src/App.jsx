import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Certifications from './components/Certifications'

import { useEffect, useState } from 'react'

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return visible ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center shadow-lg hover:opacity-80 transition"
            aria-label="Volver arriba"
        >
            <img src="./assets/arrow-icon.png" alt="" className="w-4 rotate-[-90deg] invert dark:invert-0" />
        </button>
    ) : null
}

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Certifications />
            <Work />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    )
}