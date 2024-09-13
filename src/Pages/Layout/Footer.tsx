import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="relative mt-16 max-w-[1920px] bg-gradient-to-t from-neutral-darkest px-[5%]">
            <div className="container">
                <div className="grid grid-cols-4 py-12">
                    <div className="flex flex-col">
                        <span className="mb-6 font-bold uppercase text-brand-blue">
                            Feito com amor no Brasil
                        </span>
                        <span>
                            A SolutionsBI é uma empresa de tecnologia que
                            desenvolve soluções de Business Intelligence para
                            empresas de todos os tamanhos.
                        </span>
                        <div className="mt-6 flex gap-4">
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
                    <div className="col-start-3 flex flex-col justify-self-end border-l border-white/10 pl-10">
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
                    <div className="col-start-4 flex flex-col justify-self-end border-l border-white/10 pl-10">
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
                <div className="py- container flex items-center justify-between py-10">
                    <img
                        src="/src/assets/svg/logo.svg"
                        alt="solutionsbi logo"
                    />
                    <div className="flex gap-4 text-neutral-300">
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
