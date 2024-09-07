import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { DropdownMenuCustom } from '../ui/Custom/DropDownMenuCustom'

import { Globe } from 'lucide-react'

export default function Header() {
    return (
        <header className="px-[5%] h-[12vh] sticky flex items-center w-full">
            <nav className="grid grid-cols-3 items-center w-full">
                <div>
                    <img
                        src="/src/assets/svg/logo.svg"
                        alt="logo solutionsbi"
                    />
                </div>
                <div>
                    <ul className="flex gap-20 justify-center items-center">
                        <li>
                            {/* <a href="/">Home</a> */}
                            <Link to="/">Home</Link>
                        </li>
                        <DropdownMenuCustom />
                        <li>
                            {/* <a href="/sobre">Sobre</a> */}
                            <Link to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-end gap-4">
                    <div className="flex gap-4 items-center">
                        <Select>
                            <SelectTrigger className="">
                                <Globe size={24} />
                                <SelectValue placeholder="PT" />
                            </SelectTrigger>
                            <SelectContent className='"bg-neutral-darkest/50 text-neutral-100 border-neutral-100/10 rounded-2xl p-4 shadow-custom1'>
                                <SelectItem value="light">PT</SelectItem>
                                <SelectItem value="dark">ENG</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant={'blue'}>Contato</Button>
                </div>
            </nav>
        </header>
    )
}
