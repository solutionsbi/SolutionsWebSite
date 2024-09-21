// Import necessary dependencies and components
import React, { useRef, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
import { informacoesDeServicos } from './MenuDeNavegaçãoPrincipal'
import { Phone, Mail, House, Shield, FileQuestion } from 'lucide-react'

const MenuDeNavegaçãoMobile: React.FC = () => {
    // Create refs for DOM elements and GSAP timeline
    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const sideMenuRef = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    // Use GSAP's context-safe function
    const { contextSafe } = useGSAP({ scope: containerRef })

    // Set up GSAP animations
    useGSAP(
        () => {
            // Select DOM elements for animation
            const bars = gsap.utils.toArray(
                '.menu-trigger-bar'
            ) as HTMLSpanElement[]
            const sideMenu = sideMenuRef.current
            const verticalBar = sideMenu?.querySelector(
                '.vertical-bar'
            ) as HTMLDivElement
            const linkGroup1 = gsap.utils.toArray(
                '.link-group-1 > *'
            ) as HTMLDivElement[]
            const linkGroup2 = gsap.utils.toArray(
                '.link-group-2 > *'
            ) as HTMLDivElement[]
            const linkGroup3 = gsap.utils.toArray(
                '.link-group-3 > *'
            ) as HTMLDivElement[]

            // Create GSAP timeline for menu animations
            tl.current = gsap.timeline({
                defaults: { duration: 0.5, ease: 'power2.inOut' },
            })
            tl.current
                // Animate menu trigger bars
                .to(bars[0], { x: -20 })
                .to(bars[1], { x: -15 }, '<+=0.1')
                .to(bars[2], { x: -10 }, '<+=0.1')
                .reverse()
                // Animate side menu and its contents
                .to(sideMenu, { x: 0 }, '0.1')
                .from(
                    verticalBar,
                    { scaleY: 0, transformOrigin: 'top' },
                    '<+=0.1'
                )
                .from(
                    [linkGroup1, linkGroup2, linkGroup3],
                    {
                        xPercent: -100,
                        stagger: 0.05,
                        duration: 0.25,
                    },
                    '<+=0.1'
                )
        },
        { scope: containerRef }
    )

    // Function to toggle the menu animation
    const toggleTimeline = contextSafe(() => {
        if (tl.current) {
            const newState = !tl.current.reversed()
            tl.current.reversed(newState)
            setIsMenuOpen(!newState)
        }
    })

    const navigate = useNavigate()

    // Function to close the menu
    const closeMenu = contextSafe(() => {
        if (tl.current && !tl.current.reversed()) {
            tl.current.reverse()
            setIsMenuOpen(false)
        }
    })

    // State to control the menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Prevent scrolling when menu is open
    useEffect(() => {
        const body = document.body
        if (isMenuOpen) {
            body.style.overflow = 'hidden'
            body.style.height = '100vh'
            body.style.position = 'fixed'
            body.style.width = '100%'
        } else {
            body.style.overflow = ''
            body.style.height = ''
            body.style.position = ''
            body.style.width = ''
        }

        return () => {
            body.style.overflow = ''
            body.style.height = ''
            body.style.position = ''
            body.style.width = ''
        }
    }, [isMenuOpen])

    // Close menu when navigating away
    useEffect(() => {
        return () => {
            closeMenu()
        }
    }, [navigate])

    return (
        <nav ref={containerRef} className="mobile-navigation">
            {/* Menu trigger button */}
            <button
                ref={triggerRef}
                className="menu-trigger group flex flex-col gap-[5px]"
                onClick={toggleTimeline}
                aria-label="Toggle mobile menu"
                aria-expanded="false"
            >
                <span className="menu-trigger-bar top h-0.5 w-7 rounded-lg bg-white"></span>
                <span className="menu-trigger-bar middle h-0.5 w-7 rounded-lg bg-white"></span>
                <span className="menu-trigger-bar bottom h-0.5 w-7 rounded-lg bg-white"></span>
            </button>

            {/* Side menu container */}
            <div
                ref={sideMenuRef}
                className="side-menu-container fixed inset-0 z-[9999] mt-[10vh] grid h-[90vh] w-full translate-x-full transform grid-cols-[1fr_3fr] gap-4 overflow-y-auto border-t border-brand-blue bg-neutral-darkest/80 p-6 backdrop-blur"
                aria-hidden={!isMenuOpen}
            >
                {/* Vertical bar for visual effect */}
                <div
                    className="vertical-bar h-full w-full rounded-md bg-gradient-to-b from-brand-blue bg-cover bg-center"
                    role="presentation"
                ></div>
                {/* Navigation menu */}
                <nav className="menu flex h-full w-full flex-col overflow-y-scroll text-sm font-normal">
                    {/* Institutional links */}
                    <section className="link-group-1 flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">Institucional</h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className="ml-3 flex items-center gap-2"
                                >
                                    <House size={20} aria-hidden="true" />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/sobre"
                                    className="ml-3 flex items-center gap-2"
                                >
                                    <FileQuestion
                                        size={20}
                                        aria-hidden="true"
                                    />
                                    <span>Sobre</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/politica-de-privacidade"
                                    className="ml-3 flex items-center gap-2"
                                >
                                    <Shield size={20} aria-hidden="true" />
                                    <span>Políticas de Privacidade</span>
                                </NavLink>
                            </li>
                        </ul>
                    </section>

                    {/* Solutions links */}
                    <section className="link-group-2 my-6 flex flex-col gap-4 border-y border-white/10 py-6">
                        <h2 className="text-lg font-semibold">Soluções</h2>
                        <ul className="flex flex-col gap-4">
                            {informacoesDeServicos.map((servico) => (
                                <li key={servico.href}>
                                    <NavLink
                                        to={servico.href}
                                        className="ml-3 flex items-center gap-2"
                                    >
                                        <img
                                            src={servico.icon}
                                            alt=""
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        <span>{servico.title}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Contact links */}
                    <section className="link-group-3 flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">Contato</h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <NavLink
                                    to="https://api.whatsapp.com/send?phone=5519983085819"
                                    className="ml-3 flex items-center gap-2"
                                >
                                    <Phone size={20} aria-hidden="true" />
                                    <span className="text-sm">
                                        +55 (19) 98308-5819
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="mailto:contato@solutionsbi.com.br"
                                    className="ml-3 flex items-center gap-2"
                                >
                                    <Mail size={20} aria-hidden="true" />
                                    <span className="text-sm">
                                        contato@solutionsbi.com.br
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>
        </nav>
    )
}

export default MenuDeNavegaçãoMobile
