export default function Header() {
    return (
        <header className="px-[5%] py-10 sticky">
            <nav className="flex justify-between items-center">
                <div>
                    <img
                        src="/src/assets/svg/logo.svg"
                        alt="logo solutionsbi"
                    />
                </div>
                <div>
                    <ul className="flex gap-20">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="/servicos">Serviços</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-12">
                    <div className="flex gap-4">
                        <button>PT</button>
                        <img
                            src="/src/assets/svg/language-icon.svg"
                            alt="globe icon"
                        />
                    </div>
                    <button>Contato</button>
                </div>
            </nav>
        </header>
    )
}
