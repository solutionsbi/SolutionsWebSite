import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 h-[12vh] w-full border px-[5%]">
            <nav className="container flex h-full w-full items-center justify-between py-4">
                <Link to="/">
                    <img src="/src/assets/svg/logo.svg" alt="logo" />
                </Link>

                <ul className="flex gap-14">
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Soluções</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Subscription
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>

                <div className="flex gap-4">
                    <Button className="lg:hidden">
                        <AlignJustify />
                    </Button>
                    <Button className="hidden lg:block">
                        <a href="">Contato</a>
                    </Button>
                </div>
            </nav>
        </header>
    )
}
