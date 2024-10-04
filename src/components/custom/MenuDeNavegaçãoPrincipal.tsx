import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { useLocation, useNavigate } from 'react-router-dom'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { LanguageSelector } from '@/components/custom/LanguageSelector'

import logo from '@assets/svg/logo.svg'
import iconEngenhariaDeDados from '@/assets/svg/tech-icons/ed-icon.svg'
import iconBusinessIntelligence from '@/assets/svg/tech-icons/bi-icon.svg'
import iconSistemasPersonalizados from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iconInteligenciaArtificial from '@/assets/svg/tech-icons/ia-icon.svg'
import iconTransformacaoDigital from '@/assets/svg/tech-icons/transformacao-icon.svg'
import iconWebsitesEEcommerces from '@/assets/svg/tech-icons/sites-icon.svg'

import {
    Phone,
    Instagram,
    Linkedin,
    Facebook,
    Mail,
    MapPin,
} from 'lucide-react'

export function MenuDeNavegaçãoPrincipal() {
    const { t } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()
    const solutionsData = t('pages.solutions.items', {
        returnObjects: true,
    }) as Record<string, any>

    const contactInfoArray: {
        title: string
        href: string
        description: string
        icon: React.ElementType
    }[] = [
        {
            title: t('contactInfo.whatsapp'),
            href: 'https://api.whatsapp.com/send?phone=5519983085819&text=Olá!%20estou%20interessado%20em%20saber%20mais%20sobre%20as%20suas%20solu%C3%A7%C3%B5es%20para%20neg%C3%B3cios.',
            description: '+55 (19) 98308-5819',
            icon: Phone,
        },
        {
            title: t('contactInfo.email'),
            href: 'mailto:contato@solutionsbi.com.br',
            description: 'contato@solutionsbi.com.br',
            icon: Mail,
        },
        {
            title: t('contactInfo.location'),
            href: 'https://www.google.com/maps/place/Rua+Treze+de+Maio,+257+-+Centro,+Limeira+-+SP,+13480-082/@-22.0643365,-47.4006336,17z/data=!3m1!4b1!4m6!3m5!1s0x94c98a6742248333:0x3283242822822222!8m2!3d-22.0643365!4d-47.3980589!16s%2Fg%2F11c5r4x6c1',
            description:
                'Rua Treze de maio, 257 \n 2º andar | Sala 21 \n Centro - Limeira/SP \n Cep: 13480-082',
            icon: MapPin,
        },
    ]

    const solutionsDataArray = Object.values(solutionsData)

    const iconsArray = [
        iconEngenhariaDeDados,
        iconBusinessIntelligence,
        iconSistemasPersonalizados,
        iconInteligenciaArtificial,
        iconTransformacaoDigital,
        iconWebsitesEEcommerces,
    ]

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (location.pathname === '/') {
            // If on homepage, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            // If on another page, navigate to homepage and scroll to top
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className="w-full">
            <div className="flex h-full items-center justify-between px-4 py-2">
                <div className="flex-shrink-0">
                    <a href="/" onClick={handleLogoClick}>
                        <img
                            className="h-10 w-auto object-contain lg:h-12"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                </div>

                <div className="flex justify-center">
                    <NavigationMenu align="left" className="items-center">
                        <NavigationMenuList className="gap-12 lg:text-md">
                            <NavigationMenuItem>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'active text-brand-blue'
                                            : 'transition-colors duration-300 hover:text-brand-blue'
                                    }
                                >
                                    {t('layout.header.menu.home')}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink
                                    to="/sobre"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'active text-brand-blue'
                                            : 'transition-colors duration-300 hover:text-brand-blue'
                                    }
                                >
                                    {t('layout.header.menu.about')}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {t('layout.header.menu.services')}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {solutionsDataArray.map(
                                            (component, index) => (
                                                <ListItem
                                                    key={index}
                                                    title={component.title}
                                                    description={
                                                        component.description
                                                            .short
                                                    }
                                                    href={component.url}
                                                    icon={iconsArray[index]}
                                                />
                                            )
                                        )}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-0">
                            <NavigationMenuItem>
                                <LanguageSelector />
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="rounded-md bg-brand-blue px-5 py-3 hover:text-white data-[active]:text-white data-[state=open]:text-white">
                                    {t('layout.header.menu.contact.title')}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="">
                                    <ul className="grid w-max gap-3 p-4 md:grid-cols-[200px_250px]">
                                        <div className="flex h-full w-full select-none flex-col rounded-md border-neutral-700 bg-brand-blue bg-gradient-to-b p-4 no-underline outline-none focus:shadow-md">
                                            <div className="mb-2 text-lg font-medium">
                                                Solutions BI
                                            </div>
                                            <p className="text-sm font-normal leading-tight text-neutral-200">
                                                {t(
                                                    'layout.header.menu.contact.description'
                                                )}
                                            </p>
                                            <div className="mt-auto flex gap-4 border-t border-white/10 pt-4">
                                                <a
                                                    className=""
                                                    href="https://www.facebook.com/solutionsbi.fb/"
                                                    target="_blank"
                                                >
                                                    <Facebook size={24} />
                                                </a>
                                                <a
                                                    className=""
                                                    href="https://www.linkedin.com/in/solutions-bi-0208691a8/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=br"
                                                    target="_blank"
                                                >
                                                    <Linkedin size={24} />
                                                </a>
                                                <a
                                                    className=""
                                                    href="https://www.instagram.com/solutions_bi/"
                                                    target="_blank"
                                                >
                                                    <Instagram size={24} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex h-full flex-col justify-between">
                                            {contactInfoArray.map(
                                                (component) => (
                                                    <ListItemExternal
                                                        key={component.title}
                                                        title={component.title}
                                                        href={component.href}
                                                        icon={component.icon}
                                                    >
                                                        {component.description}
                                                    </ListItemExternal>
                                                )
                                            )}
                                        </div>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & {
        href: string
        icon?: string
        title: { part1: string; part2: string }
        description: string
    }
>(({ className, title, description, icon, href, ...props }, ref) => {
    return (
        <li className="group rounded-md hover:bg-brand-blue">
            <NavLink
                to={href}
                className={({ isActive }) =>
                    cn(
                        'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        isActive
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-accent hover:text-accent-foreground',
                        className
                    )
                }
                {...props}
            >
                <div className="flex items-center gap-1">
                    <img
                        src={icon}
                        alt=""
                        width={26}
                        height={26}
                        className="mr-2"
                    />

                    <div className="whitespace-pre-line font-medium leading-tight">
                        {title.part1}
                        <br />
                        {title.part2}
                    </div>
                </div>
                <p className="text-sm font-normal leading-snug text-neutral-300 group-hover:text-white">
                    {description}
                </p>
            </NavLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

const ListItemExternal = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
        icon?: React.ElementType
        title: string
    }
>(
    (
        { className, title, children, icon: IconComponent, href, ...props },
        ref
    ) => {
        return (
            <li className="group rounded-md hover:bg-brand-blue">
                <a
                    href={href}
                    target="_blank"
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        'hover:bg-accent hover:text-accent-foreground',
                        className
                    )}
                    {...props}
                    ref={ref}
                >
                    <div className="flex items-center">
                        {IconComponent && (
                            <IconComponent size={16} className="mr-2" />
                        )}
                        <div className="font-medium leading-none">{title}</div>
                    </div>
                    <p className="whitespace-pre-line text-sm font-normal leading-snug text-neutral-300 group-hover:text-white">
                        {children}
                    </p>
                </a>
            </li>
        )
    }
)
ListItemExternal.displayName = 'ListItemExternal'
