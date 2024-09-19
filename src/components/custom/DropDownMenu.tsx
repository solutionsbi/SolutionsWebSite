/**
 * DropDownMenu Component
 *
 * What it is:
 * A reusable dropdown menu component that displays a list of menu items.
 *
 * What it does:
 * It renders a list of links based on the provided menu items.
 *
 * How it does it:
 * 1. It takes an array of menuItems as a prop.
 * 2. It maps over the menuItems array to create a list of Link components.
 * 3. Each Link is styled and positioned within a container div.
 *
 * How to use it:
 * <DropDownMenu menuItems={[
 *   { title: "Item 1", url: "/item1" },
 *   { title: "Item 2", url: "/item2" },
 *   ...
 * ]} />
 */
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { GhostButton } from './GhostButton'
import { House } from 'lucide-react'
import { FileQuestion } from 'lucide-react'
import { Shield } from 'lucide-react'
import facebookIcon from '@/assets/svg/social-icons/facebook-icon.svg'
import linkedinIcon from '@/assets/svg/social-icons/linkedin-icon.svg'

gsap.registerPlugin(useGSAP)

interface menuItem {
    title: string
    url: string
    icon?: string
}

interface DropDownMenuProps {
    menuItems: menuItem[]
    isMobile?: boolean
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
    menuItems,
    isMobile,
}) => {
    return (
        <div
            className={`${isMobile && '-translate-x-full'} absolute bottom-0 left-0 h-max w-max translate-y-full overflow-hidden rounded-md border border-brand-blue bg-neutral-darkest/95 p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]`}
        >
            <ul className="flex flex-col gap-6">
                {isMobile && (
                    <div className="flex flex-col gap-3 border-b border-brand-blue pb-6">
                        <li className="flex w-max items-center gap-3">
                            <House />
                            <GhostButton>
                                <Link to="/">Início</Link>
                            </GhostButton>
                        </li>
                        <li className="flex w-max items-center gap-3">
                            <FileQuestion />
                            <GhostButton>
                                <Link to="/sobre">Sobre</Link>
                            </GhostButton>
                        </li>
                    </div>
                )}
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <div className="flex items-center gap-3">
                            {menuItem.icon && (
                                <img
                                    src={menuItem.icon}
                                    alt={menuItem.title}
                                    className="h-6 w-6"
                                />
                            )}
                            <GhostButton>
                                <Link to={menuItem.url}>{menuItem.title}</Link>
                            </GhostButton>
                        </div>
                    </li>
                ))}
                {isMobile && (
                    <div className="flex flex-col gap-3 border-t border-brand-blue pt-6">
                        <li className="flex w-max items-center gap-3">
                            <Shield />
                            <GhostButton>
                                <Link to="/politica-de-privacidade">
                                    Política de Privacidade
                                </Link>
                            </GhostButton>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}
