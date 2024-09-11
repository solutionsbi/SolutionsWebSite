import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="relative mx-auto max-w-[1920px] overflow-hidden">
            <Header />
            <main className="mt-[12vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
