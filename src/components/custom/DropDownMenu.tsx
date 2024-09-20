import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { GhostButton } from './GhostButton'
import { House } from 'lucide-react'
import { FileQuestion } from 'lucide-react'
import { Shield } from 'lucide-react'
import { AlignJustify } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import facebookIcon from '@/assets/svg/social-icons/facebook-icon.svg'
import linkedinIcon from '@/assets/svg/social-icons/linkedin-icon.svg'
import edIcon from '@/assets/svg/tech-icons/ed-icon.svg'
import biIcon from '@/assets/svg/tech-icons/bi-icon.svg'
import sistemasIcon from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iaIcon from '@/assets/svg/tech-icons/ia-icon.svg'
import transformacaoIcon from '@/assets/svg/tech-icons/transformacao-icon.svg'
import sitesIcon from '@/assets/svg/tech-icons/sites-icon.svg'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

gsap.registerPlugin(useGSAP)

type DropDownMenuProps = {
    isMobile: boolean
}

export default function DropDownMenu({ isMobile }: DropDownMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger>
                {isMobile && <AlignJustify />}
                {!isMobile && (
                    <div
                        className="group flex items-center gap-3"
                        data-state={isOpen ? 'open' : 'closed'}
                    >
                        <span>Soluções</span>
                        <ChevronDown className="transition-all duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isMobile && (
                    <>
                        {' '}
                        <DropdownMenuItem className="flex items-center gap-2">
                            <House className="h-4 w-4" />
                            <Link to="/">Início</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                            <FileQuestion className="h-4 w-4" />
                            <Link to="/sobre">Sobre</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            <Link to="/politica-de-privacidade">
                                Política de Privacidade
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                <DropdownMenuLabel>Soluções</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={edIcon}
                        alt="Engenharia de Dados"
                        className="h-4 w-4"
                    />
                    <Link to="/engenharia-de-dados">Engenharia de Dados</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={biIcon}
                        alt="Business Intelligence"
                        className="h-4 w-4"
                    />
                    <Link to="/business-intelligence">
                        Business Intelligence
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={sistemasIcon}
                        alt="Sistemas Personalizados"
                        className="h-4 w-4"
                    />
                    <Link to="/sistemas-personalizados">
                        Sistemas Personalizados
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={iaIcon}
                        alt="Inteligência Artificial"
                        className="h-4 w-4"
                    />
                    <Link to="/inteligencia-artificial">
                        Inteligência Artificial
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={transformacaoIcon}
                        alt="Transformação Digital"
                        className="h-4 w-4"
                    />
                    <Link to="/transformacao-digital">
                        Transformação Digital
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <img
                        src={sitesIcon}
                        alt="Websites e E-commerce"
                        className="h-4 w-4"
                    />
                    <Link to="/websites-e-ecommerce">
                        Websites e E-commerce
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
