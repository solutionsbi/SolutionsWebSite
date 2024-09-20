import { NavLink } from 'react-router-dom'
import { GhostButton } from '@/components/custom/GhostButton'
import DropDownMenu from '@/components/custom/DropDownMenu'
import PrimaryButton from '@/components/custom/PrimaryButton'

import logo from '@assets/svg/logo.svg'

export default function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 h-[10vh] w-full px-[5%] font-semibold">
            <nav className="container z-50 grid h-full w-full grid-cols-3 items-center py-4">
                <NavLink className="" to="/">
                    <img
                        className="h-10 w-auto object-contain lg:h-12"
                        src={logo}
                        alt="logo"
                    />
                </NavLink>

                <ul className="hidden items-center gap-12 justify-self-center xl:flex xl:justify-between xl:text-md">
                    <li className="group relative overflow-hidden">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-lg text-brand-blue' : ''
                            }
                        >
                            Início
                        </NavLink>
                        <div className="bottom-line absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                    </li>
                    <li className="group relative">
                        <NavLink
                            to="/sobre"
                            className={({ isActive }) =>
                                isActive ? 'text-lg text-brand-blue' : ''
                            }
                        >
                            Sobre
                        </NavLink>
                        <div className="bottom-line absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                    </li>
                    <li>
                        <DropDownMenu isMobile={false} />
                    </li>
                </ul>

                <div className="col-start-3 flex gap-4 justify-self-end">
                    <div className="xl:hidden">
                        <DropDownMenu isMobile={true} />
                    </div>

                    <PrimaryButton
                        className="hidden xl:flex"
                        href="https://api.whatsapp.com/send?phone=5519983085819"
                        text="Agende Uma Consultoria"
                        additionalText="Fale Conosco"
                        linkType="external"
                    />
                </div>
            </nav>
        </header>
    )
}
