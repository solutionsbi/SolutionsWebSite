import { NavLink } from 'react-router-dom'
import { MenuDeNavegaçãoPrincipal } from '@/components/custom/MenuDeNavegaçãoPrincipal'
import MenuDeNavegaçãoMobile from '@/components/custom/MenuDeNavegaçãoMobile'
import logo from '@assets/svg/logo.svg'

export default function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 h-[10vh] w-full px-[5%] font-semibold">
            <div className="container z-50 flex h-full w-full items-center justify-between shadow-md">
                <NavLink className="" to="/">
                    <img
                        className="h-10 w-auto object-contain lg:h-12"
                        src={logo}
                        alt="logo"
                    />
                </NavLink>

                <div className="hidden lg:flex lg:w-full">
                    <MenuDeNavegaçãoPrincipal />
                </div>

                <div className="block lg:hidden">
                    <MenuDeNavegaçãoMobile />
                </div>
            </div>
        </header>
    )
}
