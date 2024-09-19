import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { GhostButton } from '@/components/custom/GhostButton'
import { DropDownMenu } from '@/components/custom/DropDownMenu'
import PrimaryButton from '@/components/custom/PrimaryButton'

import logo from '@assets/svg/logo.svg'
import edIcon from '@/assets/svg/tech-icons/ed-icon.svg'
import biIcon from '@/assets/svg/tech-icons/bi-icon.svg'
import sistemasIcon from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iaIcon from '@/assets/svg/tech-icons/ia-icon.svg'
import transformacaoIcon from '@/assets/svg/tech-icons/transformacao-icon.svg'
import sitesIcon from '@/assets/svg/tech-icons/sites-icon.svg'

export default function Header() {
    const isMobile = window.matchMedia('(max-width: 1279px)').matches
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const handleMouseEnter = () => {
        setIsDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        setIsDropdownOpen(false)
    }

    const handleMobileMenuOpen = () => {
        setIsMobileMenuOpen((prev) => !prev)
    }

    const dropdownMenuItems = [
        {
            title: 'Engenharia de Dados',
            url: '/engenharia-de-dados',
            icon: edIcon,
        },
        {
            title: 'Business Intelligence',
            url: '/business-intelligence',
            icon: biIcon,
        },
        {
            title: 'Sistemas Personalizados',
            url: '/sistemas-personalizados',
            icon: sistemasIcon,
        },
        {
            title: 'Inteligência Artificial',
            url: '/inteligencia-artificial',
            icon: iaIcon,
        },
        {
            title: 'Transformação Digital',
            url: '/transformacao-digital',
            icon: transformacaoIcon,
        },
        {
            title: 'Website e E-commerce',
            url: '/websites-e-ecommerce',
            icon: sitesIcon,
        },
    ]

    return (
        <header className="fixed left-0 top-0 z-50 h-[10vh] w-full px-[5%] font-semibold">
            <nav className="container z-50 grid h-full w-full grid-cols-3 items-center py-4">
                <Link className="" to="/">
                    <img
                        className="h-10 w-auto object-contain lg:h-12"
                        src={logo}
                        alt="logo"
                    />
                </Link>

                <ul className="hidden items-center gap-12 justify-self-center xl:flex xl:justify-between xl:text-md">
                    <li className="">
                        <GhostButton>
                            <Link to="/">Início</Link>
                        </GhostButton>
                    </li>
                    <li className="">
                        <GhostButton>
                            <Link className="" to="/sobre">
                                Sobre
                            </Link>
                        </GhostButton>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex items-center gap-2">
                            <GhostButton>
                                <span className="">Soluções</span>
                            </GhostButton>
                            <ChevronDown
                                size={16}
                                className={` ${isDropdownOpen ? 'rotate-180 text-brand-blue' : 'text-gray-300'} transition-all duration-300`}
                            />
                        </div>
                        {isDropdownOpen && (
                            <DropDownMenu menuItems={dropdownMenuItems} />
                        )}
                    </li>
                </ul>

                <div className="col-start-3 flex gap-4 justify-self-end">
                    <Button
                        onClick={handleMobileMenuOpen}
                        className="relative p-0 xl:hidden"
                        variant={'link'}
                    >
                        <AlignJustify />
                        {isMobileMenuOpen && isMobile && (
                            <DropDownMenu
                                menuItems={dropdownMenuItems}
                                isMobile={true}
                            />
                        )}
                    </Button>
                    <PrimaryButton
                        className="hidden xl:flex"
                        href="https://api.whatsapp.com/send?phone=5519993230833"
                        text="Agende Uma Consultoria"
                        additionalText="Fale Conosco"
                        linkType="external"
                    />
                </div>
            </nav>
        </header>
    )
}
