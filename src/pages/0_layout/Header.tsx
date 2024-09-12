import { Navbar2 } from './Navbar2'

export default function Header() {
    const logo = {
        url: '/',
        src: '/src/assets/svg/logo.svg',
        alt: 'SolutionsBI Logo',
    }

    const navLinks = [
        { title: 'Início', url: '/' },
        {
            title: 'Soluções',
            url: '#',
            subMenuLinks: [
                {
                    title: 'Engenharia de Dados',
                    url: '/engenharia-de-dados',
                },
                {
                    title: 'Business Intelligence',
                    url: '/business-intelligence',
                },
                {
                    title: 'Sistemas Personalizados',
                    url: '/sistemas-personalizados',
                },
                {
                    title: 'Inteligência Artificial',
                    url: '/inteligencia-artificial',
                },
                {
                    title: 'Transformação Digital',
                    url: '/transformacao-digital',
                },
                {
                    title: 'Websites & E-Commerce',
                    url: '/websites-&-ecommerce',
                },
            ],
        },
        { title: 'Sobre', url: '/sobre' },
    ]

    const buttons = [
        {
            title: 'Contato',
            url: 'https://api.whatsapp.com/send?phone=5519993230833',
        },
    ]

    return (
        <header className="fixed top-0 z-50 w-full px-[5%]">
            <div className="relative before:absolute before:inset-0 before:backdrop-blur-md">
                <div className="container">
                    <Navbar2
                        logo={logo}
                        navLinks={navLinks}
                        buttons={buttons}
                    />
                </div>
            </div>
        </header>
    )
}
