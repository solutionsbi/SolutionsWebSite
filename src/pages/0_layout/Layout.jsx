import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="overflow-hidden relative">
            <img className="absolute z-[-100] w-full object-cover h-full opacity-15 top-0 left-0 bg-[url('/src/assets/images/pages-bg-texture.png')]" />
            <div className="absolute top-[-2300px] z-[-100] left-[-1000px] w-[2027px] h-[2027px] origin-top-left rotate-[0deg] bg-gradient-to-r from-[#2960f7] to-[#4fa4c0] rounded-full blur-[700px]" />
            <Header />
            <main className="mt-[10vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
