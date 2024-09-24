'use client'

import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { cn } from '@/lib/utils'
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
import edIcon from '@/assets/svg/tech-icons/ed-icon.svg'
import biIcon from '@/assets/svg/tech-icons/bi-icon.svg'
import sistemasIcon from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iaIcon from '@/assets/svg/tech-icons/ia-icon.svg'
import transformacaoIcon from '@/assets/svg/tech-icons/transformacao-icon.svg'
import sitesIcon from '@/assets/svg/tech-icons/sites-icon.svg'

import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Facebook } from 'lucide-react'

export const informacoesDeServicos: {
    title: string
    href: string
    description: string
    icon: string
}[] = [
    {
        title: 'Engenharia \nde Dados',
        href: '/engenharia-de-dados',
        description:
            'Soluções em Engenharia de Dados para otimizar a gestão de dados e impulsionar a eficiência operacional.',
        icon: edIcon,
    },
    {
        title: 'Business \n Intelligence',
        href: '/business-intelligence',
        description:
            'Transforme seus dados em insights estratégicos com nossa solução de Business Intelligence.',
        icon: biIcon,
    },
    {
        title: 'Sistemas \npersonalizados',
        href: '/sistemas-personalizados',
        description:
            'Desenvolvemos sistemas personalizados para atender às necessidades específicas de sua empresa.',
        icon: sistemasIcon,
    },
    {
        title: 'Inteligência \n Artificial',
        href: '/inteligencia-artificial',
        description:
            'Utilizamos a Inteligência Artificial para otimizar processos e aumentar a eficiência operacional.',
        icon: iaIcon,
    },
    {
        title: 'Transformação \n Digital',
        href: '/transformacao-digital',
        description:
            'Modernize sua infraestrutura com nossa solução de Transformacão Digital.',
        icon: transformacaoIcon,
    },
    {
        title: 'Websites e \n E-commerce',
        href: '/websites-e-ecommerce',
        description:
            'Estabeleça uma presença online forte com nossa solução de Websites e E-commerce.',
        icon: sitesIcon,
    },
]

export const informacoesDeContato: {
    title: string
    href: string
    description: string
    icon: React.ElementType
}[] = [
    {
        title: 'WhatsApp',
        href: 'https://api.whatsapp.com/send?phone=5519983085819',
        description: '+55 (19) 98308-5819',
        icon: Phone,
    },
    {
        title: 'Email',
        href: 'mailto:contato@solutionsbi.com.br',
        description: 'contato@solutionsbi.com.br',
        icon: Mail,
    },
    {
        title: 'Localização',
        href: 'https://www.google.com/maps/place/Rua+Treze+de+Maio,+257+-+Centro,+Limeira+-+SP,+13480-082/@-22.0643365,-47.4006336,17z/data=!3m1!4b1!4m6!3m5!1s0x94c98a6742248333:0x3283242822822222!8m2!3d-22.0643365!4d-47.3980589!16s%2Fg%2F11c5r4x6c1',
        description:
            'Rua Treze de maio, 257 \n 2º andar | Sala 21 \n Centro - Limeira/SP \n Cep: 13480-082',
        icon: MapPin,
    },
]

export function MenuDeNavegaçãoPrincipal() {
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
                        <NavigationMenuList className="gap-10">
                            <NavigationMenuItem>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'active text-brand-blue'
                                            : 'transition-colors duration-300 hover:text-brand-blue'
                                    }
                                >
                                    Início
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
                                    Sobre
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Soluções
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {informacoesDeServicos.map(
                                            (component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                    icon={component.icon}
                                                >
                                                    {component.description}
                                                </ListItem>
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
                                    Contato
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="">
                                    <ul className="grid w-max gap-3 p-4 md:grid-cols-[200px_250px]">
                                        <li className="">
                                            <NavigationMenuLink asChild>
                                                <div className="flex h-full w-full select-none flex-col justify-between rounded-md border-neutral-700 bg-brand-blue bg-gradient-to-b p-4 no-underline outline-none focus:shadow-md">
                                                    <div className="mb-2 text-lg font-medium">
                                                        Solutions BI
                                                    </div>
                                                    <p className="text-sm font-normal leading-tight text-neutral-200">
                                                        A SolutionsBI é uma
                                                        empresa de tecnologia
                                                        especializada em criar
                                                        soluções personalizadas
                                                        para empresas que
                                                        desejam otimizar seus
                                                        processos e aumentar sua
                                                        eficiência.
                                                    </p>
                                                    <div className="mt-4 flex gap-4 border-t border-white/10 pt-4">
                                                        <a
                                                            className=""
                                                            href="https://www.facebook.com/solutionsbi.fb/"
                                                            target="_blank"
                                                        >
                                                            <Facebook
                                                                size={24}
                                                            />
                                                        </a>
                                                        <a
                                                            className=""
                                                            href="https://www.linkedin.com/in/solutions-bi-0208691a8/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=br"
                                                            target="_blank"
                                                        >
                                                            <Linkedin
                                                                size={24}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </NavigationMenuLink>
                                        </li>
                                        <div className="flex h-full flex-col justify-between">
                                            {informacoesDeContato.map(
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
        title: string
    }
>(({ className, title, children, icon, href, ...props }, ref) => {
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
                    {icon && (
                        <img
                            src={icon}
                            alt=""
                            width={26}
                            height={26}
                            className="mr-2"
                        />
                    )}
                    <div className="whitespace-pre-line font-medium leading-tight">
                        {title}
                    </div>
                </div>
                <p className="text-sm font-normal leading-snug text-neutral-300 group-hover:text-white">
                    {children}
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
