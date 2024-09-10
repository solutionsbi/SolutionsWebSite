'use client'

import React, { useState } from 'react'
import { useMediaQuery } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'
import { AnimatePresence, motion } from 'framer-motion'
import { RxChevronDown } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

type ImageProps = {
    url?: string
    src: string
    alt?: string
}

type NavLink = {
    url: string
    title: string
    icon?: string
    subMenuLinks?: NavLink[]
}

type Props = {
    logo: ImageProps
    navLinks: NavLink[]
    buttons: ButtonProps[]
}

export type Navbar2Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Navbar2 = (props: Navbar2Props) => {
    const { logo, navLinks, buttons } = {
        ...Navbar2Defaults,
        ...props,
    } as Props

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 991px)')

    return (
        <nav className="relative flex min-h-[12vh] w-full items-center lg:px-[5%]">
            <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
                <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
                    <Link to={`${logo.url}`}>
                        <img src={logo.src} alt={logo.alt} />
                    </Link>

                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            className="-mr-2 flex size-12 flex-col items-center justify-center"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={
                                    isMobileMenuOpen
                                        ? ['open', 'rotatePhase']
                                        : 'closed'
                                }
                                variants={topLineVariants}
                            />
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={isMobileMenuOpen ? 'open' : 'closed'}
                                variants={middleLineVariants}
                            />
                            <motion.span
                                className="my-[3px] h-0.5 w-6 bg-white"
                                animate={
                                    isMobileMenuOpen
                                        ? ['open', 'rotatePhase']
                                        : 'closed'
                                }
                                variants={bottomLineVariants}
                            />
                        </button>
                    </div>
                </div>
                <motion.div
                    variants={{
                        open: {
                            height: 'var(--height-open, 100dvh)',
                        },
                        close: {
                            height: 'var(--height-closed, 0)',
                        },
                    }}
                    animate={isMobileMenuOpen ? 'open' : 'close'}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:gap-4 lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
                >
                    {navLinks.map((navLink, index) => (
                        <div key={index} className="first:pt-4 lg:first:pt-0">
                            {navLink.subMenuLinks &&
                            navLink.subMenuLinks.length > 0 ? (
                                <SubMenu
                                    navLink={navLink}
                                    isMobile={isMobile}
                                />
                            ) : (
                                <a
                                    href={navLink.url}
                                    className="block py-3 text-md lg:px-4 lg:py-2 lg:text-base 3xl:text-lg"
                                >
                                    {navLink.title}
                                </a>
                            )}
                        </div>
                    ))}
                </motion.div>
                <div className="hidden justify-self-end lg:block">
                    {buttons.map((button, index) => (
                        <Button
                            asChild={true}
                            key={index}
                            variant="blue"
                            {...button}
                        >
                            <a href={button.url} target="_blank">
                                {button.title}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

const SubMenu = ({
    navLink,
    isMobile,
}: {
    navLink: NavLink
    isMobile: boolean
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <nav
            onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
        >
            <button
                className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base 3xl:text-lg"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <span>{navLink.title}</span>
                <motion.span
                    animate={isDropdownOpen ? 'rotated' : 'initial'}
                    variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <RxChevronDown />
                </motion.span>
            </button>
            {isDropdownOpen && (
                <AnimatePresence>
                    <motion.nav
                        animate={isDropdownOpen ? 'open' : 'close'}
                        initial="close"
                        exit="close"
                        variants={{
                            open: {
                                visibility: 'visible',
                                opacity: 'var(--opacity-open, 100%)',
                                y: 0,
                            },
                            close: {
                                visibility: 'hidden',
                                opacity: 'var(--opacity-close, 0)',
                                y: 'var(--y-close, 0%)',
                            },
                        }}
                        transition={{ duration: 0.2 }}
                        className="blurred-bg shadow-custom lg:absolute lg:z-50 lg:rounded-xl lg:border lg:border-border-alternative/10 lg:py-3 lg:[--y-close:25%]"
                    >
                        {navLink.subMenuLinks?.map((subMenuLink, index) => (
                            <Link
                                key={index}
                                to={subMenuLink.url}
                                className="flex gap-3 py-3 text-center lg:px-4 lg:py-2 lg:text-left"
                            >
                                <img src={subMenuLink.icon} alt="" />
                                {subMenuLink.title}
                            </Link>
                        ))}
                    </motion.nav>
                </AnimatePresence>
            )}
        </nav>
    )
}

export const Navbar2Defaults: Navbar2Props = {
    logo: {
        url: '#',
        src: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
        alt: 'Logo image',
    },
    navLinks: [
        { title: 'Link One', url: '#' },
        { title: 'Link Two', url: '#' },
        { title: 'Link Three', url: '#' },
        {
            title: 'Link Four',
            url: '#',
            subMenuLinks: [
                { title: 'Link Five', url: '#' },
                { title: 'Link Six', url: '#' },
                { title: 'Link Seven', url: '#' },
            ],
        },
    ],
    buttons: [
        {
            title: 'Button',
            size: 'sm',
        },
    ],
}

const topLineVariants = {
    open: {
        translateY: 8,
        transition: { delay: 0.1 },
    },
    rotatePhase: {
        rotate: -45,
        transition: { delay: 0.2 },
    },
    closed: {
        translateY: 0,
        rotate: 0,
        transition: { duration: 0.2 },
    },
}

const middleLineVariants = {
    open: {
        width: 0,
        transition: { duration: 0.1 },
    },
    closed: {
        width: '1.5rem',
        transition: { delay: 0.3, duration: 0.2 },
    },
}

const bottomLineVariants = {
    open: {
        translateY: -8,
        transition: { delay: 0.1 },
    },
    rotatePhase: {
        rotate: 45,
        transition: { delay: 0.2 },
    },
    closed: {
        translateY: 0,
        rotate: 0,
        transition: { duration: 0.2 },
    },
}
