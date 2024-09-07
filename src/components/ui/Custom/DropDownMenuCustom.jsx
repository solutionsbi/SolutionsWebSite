import { ChevronDown } from 'lucide-react'

import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/shadcn/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/shadcn/dropdown-menu'

export function DropdownMenuCustom() {
    return (
        <DropdownMenu className="p-0">
            <DropdownMenuTrigger asChild className="p-0">
                <Button variant="ghost" className="flex items-center gap-2">
                    Soluções
                    <ChevronDown size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-darkest/50 text-neutral-100 border-neutral-100/10 rounded-2xl p-4 shadow-custom1">
                <DropdownMenuItem>
                    <Link to="/engenharia-de-dados">
                        <span>Engenharia de Dados</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/business-intelligence">
                        <span>Business Intelligence</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/sistemas-personalizados">
                        <span>Sistemas Personalizados</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/inteligencia-artificial">
                        <span>Inteligência Artificial</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/transformacao-digital">
                        <span>Transformação Digital</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/websites-&-ecommercer">
                        <span>Website & E-Commerce</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
