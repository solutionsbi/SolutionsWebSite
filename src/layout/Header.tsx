import NavBar from '@/components/NavBar'
// import NavBarMobile from '@/components/NavBarMobile'

export default function Header() {
    return (
        <header className="sticky left-0 top-0 z-50 h-[10vh] w-full px-[5%] font-semibold shadow-md">
            <div className="container z-50 flex h-full w-full">
                <div className="hidden md:flex md:w-full">
                    <NavBar />
                </div>

                {/* <div className="block h-full w-full md:hidden">
                    <NavBarMobile />
                </div> */}
            </div>
        </header>
    )
}
