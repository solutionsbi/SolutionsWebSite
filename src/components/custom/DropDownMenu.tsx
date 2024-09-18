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
            </ul>
        </div>
    )
}
