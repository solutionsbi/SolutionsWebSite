import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="relative max-w-[1920px] px-[5%]">
            <div className="grid place-content-center">
                <img src="/src/assets/svg/footer-log.svg" alt="" />
            </div>
            <div className="container flex items-center justify-between border-t border-white/10 py-12">
                <Link
                    to="/politica-de-privacidade"
                    className="font-bold text-brand-blue underline"
                >
                    Política de Privacidade
                </Link>
                <div className="flex flex-wrap gap-2">
                    <p>Copyright © 2024 – SolutionsBI Brazil</p>
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
                                className="rounded-xl border border-brand-blue"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img
                                src="/src/assets/svg/instagram-icon.svg"
                                alt=""
                                className="rounded-xl border border-brand-blue"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
