import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

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
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
