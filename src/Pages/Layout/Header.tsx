import { NavLink } from 'react-router-dom'
import { MenuDeNavegaçãoPrincipal } from '@/components/custom/MenuDeNavegaçãoPrincipal'
import MenuDeNavegaçãoMobile from '@/components/custom/MenuDeNavegaçãoMobile'

export default function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 h-[10vh] w-full px-[5%] font-semibold">
            <div className="container z-50 flex h-full w-full shadow-md">
                <div className="hidden md:flex md:w-full">
                    <MenuDeNavegaçãoPrincipal />
                </div>

                {/* <div className="block md:hidden">
                    <MenuDeNavegaçãoMobile />
                </div> */}
            </div>
        </header>
    )
}
