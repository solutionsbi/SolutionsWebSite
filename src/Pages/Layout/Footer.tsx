import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Footer() {
    const container = useRef<HTMLElement>(null)
    const sectionTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        if (!container.current) return

        const footerInfoGrid =
            container.current.querySelector('.footer-info-grid')?.children
        const additionalFooterContainer = container.current.querySelector(
            '.additional-footer-container'
        )?.children
        gsap.set(footerInfoGrid ?? [], {
            opacity: 0,
            y: 20,
        })
        gsap.set(additionalFooterContainer ?? [], {
            opacity: 0,
            x: 20,
        })

        sectionTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                markers: false,
            },
            defaults: {
                duration: 1.5,
                ease: 'power1.inOut',
            },
        })

        sectionTl.current.to(footerInfoGrid ?? [], {
            opacity: 1,
            y: 0,
            stagger: 0.5,
        })

        sectionTl.current.to(
            additionalFooterContainer ?? [],
            {
                opacity: 1,
                x: 0,
                stagger: 0.5,
            },
            '<+=0.5'
        )
    })
    return (
        <footer
            ref={container}
            className="relative mx-auto bg-gradient-to-t from-neutral-darkest px-[5%] pt-16"
        >
            <div className="container">
                <div className="footer-info-grid grid justify-items-center gap-10 py-12 text-center md:grid-cols-2 md:text-start xl:grid-cols-4 xl:justify-items-start xl:gap-0 xl:text-start">
                    <div className="flex flex-col">
                        <span className="mb-6 flex items-center justify-center gap-2 font-bold uppercase text-brand-blue md:justify-start">
                            Feito com <Heart />
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
                <div className="additional-footer-container container flex flex-col items-center justify-between gap-10 py-10 lg:flex-row">
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
