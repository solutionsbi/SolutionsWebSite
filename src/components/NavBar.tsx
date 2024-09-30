import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { getServiceInfo } from '@/lib/getServiceInfo'
import { getContactInfo } from '@/lib/getContactInfo'
import UnderlinedNavLink from '@/components/UnderlinedNavLink'
import { BrandLogoNoText } from '@/components/icons/brandLogos'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { LanguageSelector } from '@/components/LanguageSelector'
import logo from '../../public/assets/brand_logo.svg'

export default function NavBar() {
    const { t } = useTranslation()
    const servicesInfo = getServiceInfo(t)
    const contactInfo = getContactInfo(t)

    return (
        <nav className="w-full">
            <div className="flex h-full items-center justify-between px-4 py-2">
                <div className="flex-shrink-0">
                    <NavLink to="/">
                        <img
                            className="h-10 w-auto object-contain lg:h-12"
                            src={logo}
                            alt="logo"
                        />
                    </NavLink>
                </div>

                <div className="flex justify-center">
                    <NavigationMenu align="left" className="items-center">
                        <NavigationMenuList className="gap-12 lg:text-md">
                            <NavigationMenuItem className="">
                                <UnderlinedNavLink to="/">
                                    {t('layout.header.menu.home')}
                                </UnderlinedNavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <UnderlinedNavLink to="/sobre">
                                    {t('layout.header.menu.about')}
                                </UnderlinedNavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {t('layout.header.menu.services')}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {servicesInfo.map((service, index) => (
                                            <li
                                                key={index}
                                                className="drop-shadow-custom2 group relative overflow-hidden rounded-md bg-neutral-900/50 transition-all duration-300 hover:bg-blue-700"
                                            >
                                                <service.icon className="absolute left-4 top-4 scale-[300%] opacity-10" />
                                                <NavLink
                                                    to={service.url}
                                                    className={({ isActive }) =>
                                                        cn(
                                                            'block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors',
                                                            isActive
                                                                ? 'bg-accent text-accent-foreground'
                                                                : 'hover:bg-accent hover:text-accent-foreground'
                                                        )
                                                    }
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="whitespace-pre-line text-lg font-bold leading-tight group-hover:drop-shadow-md">
                                                            {service.title}
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-normal leading-snug text-neutral-300 group-hover:drop-shadow-md">
                                                        {
                                                            service.description
                                                                .short
                                                        }
                                                    </p>
                                                </NavLink>
                                            </li>
                                        ))}
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
                                <NavigationMenuTrigger className="h-12 rounded-md bg-blue-700 px-5 drop-shadow-custom hover:text-white data-[active]:text-white data-[state=open]:text-white">
                                    {t('layout.header.menu.contact.title')}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-max gap-3 p-4 md:grid-cols-[200px_250px]">
                                        <div className="relative flex h-full w-full select-none flex-col overflow-hidden rounded-md border-neutral-700 bg-gradient-to-b from-blue-700 to-blue-950 p-4 no-underline outline-none drop-shadow-custom focus:shadow-md">
                                            <div className="mb-2 text-lg font-bold drop-shadow-md">
                                                Solutions BI
                                            </div>
                                            <p className="text-sm font-normal leading-tight text-neutral-200 drop-shadow-md">
                                                {t(
                                                    'layout.header.menu.contact.description'
                                                )}
                                            </p>
                                            <ul className="mt-auto flex gap-4 border-t border-white/10 pt-4">
                                                {contactInfo
                                                    .filter((contact) =>
                                                        [
                                                            'LinkedIn',
                                                            'Instagram',
                                                            'Facebook',
                                                        ].includes(
                                                            contact.title
                                                        )
                                                    )
                                                    .map((contact, index) => (
                                                        <li
                                                            key={index}
                                                            className="transition-all duration-300 hover:scale-110"
                                                        >
                                                            <a
                                                                href={
                                                                    contact.url
                                                                }
                                                            >
                                                                <contact.icon className="h-8 w-8" />
                                                            </a>
                                                        </li>
                                                    ))}
                                            </ul>
                                            <BrandLogoNoText className="absolute bottom-0 left-0 -z-10 h-auto w-[150%] stroke-none text-neutral-900/20 drop-shadow-md" />
                                        </div>

                                        <div className="">
                                            <ul className="flex flex-col gap-2">
                                                {contactInfo
                                                    .filter((contact) =>
                                                        [
                                                            'WhatsApp',
                                                            'Email',
                                                            'Location',
                                                            'Localização',
                                                        ].includes(
                                                            contact.title
                                                        )
                                                    )
                                                    .map((contact, index) => (
                                                        <li
                                                            key={index}
                                                            className="group rounded-md bg-neutral-900/50 p-4 shadow-md transition-all duration-300 hover:bg-blue-700"
                                                        >
                                                            <a
                                                                href={
                                                                    contact.url
                                                                }
                                                                className="flex flex-col gap-2 group-hover:drop-shadow-md"
                                                            >
                                                                <span className="flex items-center gap-2">
                                                                    <contact.icon className="h-8 w-8" />
                                                                    <span className="text-md font-bold">
                                                                        {
                                                                            contact.title
                                                                        }
                                                                    </span>
                                                                </span>
                                                                <span className="whitespace-pre-line text-sm font-normal text-neutral-300">
                                                                    {
                                                                        contact.description
                                                                    }
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
