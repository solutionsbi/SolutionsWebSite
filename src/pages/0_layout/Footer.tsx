import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="px-[5%]">
            <div className="flex items-center justify-between border-t border-white/10 py-12">
                <div className="flex flex-col gap-2">
                    <p>
                        Copyright © 2024 – SolutionsBI Brazil{' '}
                        <br className="md:hidden" />
                        <span className="hidden md:inline-block">|</span>
                        {''}
                         Todos os Direitos Reservados
                    </p>{' '}
                    <Link
                        to="/privacy-policy"
                        className="font-bold text-brand-blue underline"
                    >
                        Política de Privacidade
                    </Link>
                </div>
                <ul className="flex gap-4 justify-self-end">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/solutions-bi-0208691a8/?originalSubdomain=br"
                            target="_blank"
                        >
                            <img
                                src="/src/assets/svg/linkedin-icon.svg"
                                alt="linkedin"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img
                                src="/src/assets/svg/instagram-icon.svg"
                                alt=""
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
