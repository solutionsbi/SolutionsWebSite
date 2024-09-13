import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="mx-auto max-w-4xl overflow-hidden">
            <Header />
            <main className="mt-[12vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
