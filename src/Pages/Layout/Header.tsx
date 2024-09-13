import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

export default function Header() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    const handleMouseEnter = () => {
        setIsDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        setIsDropdownOpen(false)
    }

    const soluções = [
        {
            title: 'Engenharia de Dados',
            url: '/engenharia-de-dados',
        },
        {
            title: 'Business Intelligence',
            url: '/business-intelligence',
        },
        {
            title: 'Sistemas Personalizados',
            url: '/sistemas-personalizados',
        },
        {
            title: 'Inteligência Artificial',
            url: '/inteligencia-artificial',
        },
        {
            title: 'Transformação Digital',
            url: '/transformacao-digital',
        },
        {
            title: 'Website e E-commerce',
            url: '/websites-&-ecommerce',
        },
    ]

    return (
        <header className="fixed left-0 top-0 z-50 h-[12vh] w-full px-[5%] font-semibold">
            <nav className="container z-50 flex h-full w-full items-center justify-between py-4">
                <Link className="hover:text-brand-blue" to="/">
                    <img
                        className="h-10 w-auto object-contain lg:h-12"
                        src="/src/assets/svg/logo.svg"
                        alt="logo"
                    />
                </Link>

                <ul className="hidden items-center gap-4 justify-self-center xl:flex xl:text-md">
                    <li className="px-6">
                        <Link className="hover:text-brand-blue" to="/">
                            Início
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link className="hover:text-brand-blue" to="/sobre">
                            Sobre
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Button
                            variant={'link'}
                            className={`flex items-center gap-2 ${isDropdownOpen ? 'text-brand-blue' : 'hover:text-brand-blue'}`}
                        >
                            <span className="xl:text-md">Soluções</span>
                            <ChevronDown />
                        </Button>
                        {isDropdownOpen && (
                            <div className="absolute bottom-0 left-0 h-max w-max translate-y-full overflow-hidden rounded-b-md border-t-2 border-brand-blue bg-neutral-darkest/95 p-8 shadow-inner">
                                <ul className="flex flex-col gap-4">
                                    {soluções.map((solução, index) => (
                                        <li key={index}>
                                            <Link
                                                className="hover:text-brand-blue"
                                                to={solução.url}
                                            >
                                                {solução.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                <div className="flex gap-4 justify-self-end pl-20">
                    <Button className="p-0 xl:hidden" variant={'link'}>
                        <AlignJustify />
                    </Button>
                    <Button className="hidden xl:block">
                        <a href="">Contato</a>
                    </Button>
                </div>
            </nav>
        </header>
    )
}
