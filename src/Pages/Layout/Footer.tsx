import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="relative max-w-[1920px] bg-gradient-to-t from-neutral-darkest px-[5%] pt-16">
            <div className="container">
                <div className="grid justify-items-center gap-10 py-12 text-center md:grid-cols-2 md:text-start xl:grid-cols-4 xl:justify-items-start xl:gap-0 xl:text-start">
                    <div className="flex flex-col">
                        <span className="mb-6 flex items-center gap-2 font-bold uppercase text-brand-blue">
                            Feito com{' '}
                            <span>
                                <img
                                    src="/src/assets/svg/icons/mdi_heart.svg"
                                    alt="heart"
                                    className="h-4 w-4"
                                />
                            </span>{' '}
                            no Brasil
                        </span>
                        <span>
                            A SolutionsBI é uma empresa de tecnologia
                            especializada em criar soluções personalizadas para
                            empresas que desejam otimizar seus processos e
                            aumentar sua eficiência.
                        </span>
                        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start xl:justify-start">
                            <a href="">
                                <img
                                    src="/src/assets/svg/facebook-icon.svg"
                                    alt="facebook"
                                    className="h-8 w-8"
                                />
                            </a>
                            <a href="">
                                <img
                                    src="/src/assets/svg/instagram-icon.svg"
                                    alt="instagram"
                                    className="h-8 w-8"
                                />
                            </a>
                            <a href="">
                                <img
                                    src="/src/assets/svg/linkedin-icon.svg"
                                    alt="linkedin"
                                    className="h-8 w-8"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:col-start-2 xl:col-start-3 xl:justify-self-end xl:border-l xl:border-white/10 xl:pl-10">
                        <span className="mb-6 font-bold uppercase text-brand-blue">
                            Soluções
                        </span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link to="produtos">Engenharia de Dados</Link>
                            </li>
                            <li>
                                <Link to="produtos">Business Intelligence</Link>
                            </li>
                            <li>
                                <Link to="produtos">
                                    Sistemas Personalizados
                                </Link>
                            </li>
                            <li>
                                <Link to="produtos">
                                    Inteligência Artificial
                                </Link>
                            </li>
                            <li>
                                <Link to="produtos">Transformação Digital</Link>
                            </li>
                            <li>
                                <Link to="produtos">Websites e E-commerce</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:col-start-2 lg:col-start-3 xl:col-start-4 xl:justify-self-end xl:border-l xl:border-white/10 xl:pl-10">
                        <span className="mb-6 font-bold uppercase text-brand-blue">
                            Contato
                        </span>
                        <ul className="flex flex-col gap-4">
                            <li>contato@solutionsbi.com.br</li>
                            <li>
                                <a href="">(19) 99323-0833</a>
                            </li>
                            <li>
                                Rua Treze de maio, 257 <br />
                                2º andar | Sala 21 <br />
                                Centro - Limeira/SP
                                <br />
                                Cep: 13480-082
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container flex flex-col items-center justify-between gap-10 py-10 lg:flex-row">
                    <img
                        src="/src/assets/svg/logo.svg"
                        alt="solutionsbi logo"
                    />
                    <div className="flex flex-col items-center gap-4 text-neutral-300 md:flex-row">
                        <p>Copyright © 2024 – SolutionsBI Brazil</p>
                        <Link
                            to="politica-de-privacidade"
                            className="underline hover:text-brand-blue"
                        >
                            Política de Privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
