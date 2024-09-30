import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import heroBackgroundVideo from '@/assets/video/20.mov'

export default function Layout() {
    const location = useLocation()
    const prevPathRef = useRef(location.pathname)

    useEffect(() => {
        if (prevPathRef.current !== location.pathname) {
            window.scrollTo(0, 0)
            prevPathRef.current = location.pathname
        }
    }, [location.pathname])

    return (
        <div className="relative">
            {/* <div className="fixed z-[-1000] h-screen w-full">
                <video
                    src={heroBackgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mask-rect h-full w-full object-cover opacity-50"
                />
            </div> */}
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}
