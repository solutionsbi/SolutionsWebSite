import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart } from 'lucide-react'
import { GhostButton } from '@/components/custom/GhostButton'
import { useTranslation } from 'react-i18next'

import facebookIcon from '@/assets/svg/social-icons/facebook-icon.svg'
import linkedinIcon from '@/assets/svg/social-icons/linkedin-icon.svg'
import logo from '@/assets/svg/logo.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Footer() {
    const container = useRef<HTMLElement>(null)
    const sectionTl = useRef<gsap.core.Timeline | null>(null)
    const { t } = useTranslation()
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
                duration: 1,
                ease: 'power1.out',
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
                            {t('layout.footer.columns.1.title.part1')} <Heart />
                            {t('layout.footer.columns.1.title.part2')}
                        </span>
                        <span>{t('layout.footer.columns.1.description')}</span>
                        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start xl:justify-start">
                            <a
                                href="https://www.facebook.com/solutionsbi.fb/"
                                target="_blank"
                            >
                                <img
                                    src={facebookIcon}
                                    alt="facebook"
                                    className="h-8 w-8"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/solutions-bi-0208691a8/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=br"
                                target="_blank"
                            >
                                <img
                                    src={linkedinIcon}
                                    alt="linkedin"
                                    className="h-8 w-8"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:col-start-2 xl:col-start-3 xl:justify-self-end xl:border-l xl:border-white/10 xl:pl-10">
                        <span className="mb-6 font-bold uppercase text-brand-blue">
                            {t('layout.footer.columns.2.title')}
                        </span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <GhostButton>
                                    <Link
                                        to="engenharia-de-dados"
                                        className="font-normal"
                                    >
                                        {t('layout.footer.columns.2.options.1')}
                                    </Link>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <Link to="business-intelligence">
                                        {t('layout.footer.columns.2.options.2')}
                                    </Link>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <Link to="sistemas-personalizados">
                                        {t('layout.footer.columns.2.options.3')}
                                    </Link>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <Link to="inteligencia-artificial">
                                        {t('layout.footer.columns.2.options.4')}
                                    </Link>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <Link to="transformacao-digital">
                                        {t('layout.footer.columns.2.options.5')}
                                    </Link>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <Link to="websites-e-ecommerce">
                                        {t('layout.footer.columns.2.options.6')}
                                    </Link>
                                </GhostButton>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:col-start-2 lg:col-start-3 xl:col-start-4 xl:justify-self-end xl:border-l xl:border-white/10 xl:pl-10">
                        <span className="mb-6 font-bold uppercase text-brand-blue">
                            {t('layout.footer.columns.3.title')}
                        </span>

                        <ul className="flex flex-col gap-4">
                            <li>
                                <GhostButton>
                                    <a
                                        href="mailto:contato@solutionsbi.com.br"
                                        target="_blank"
                                    >
                                        contato@solutionsbi.com.br
                                    </a>
                                </GhostButton>
                            </li>
                            <li>
                                <GhostButton>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=5519983085819"
                                        target="_blank"
                                    >
                                        +55 (19) 98308-5819
                                    </a>
                                </GhostButton>
                            </li>
                            <li>
                                <a
                                    className="hover:text-brand-blue"
                                    href="https://www.google.com/maps/place/Rua+Treze+de+Maio,+257+-+Centro,+Limeira+-+SP,+13480-082/@-22.0643365,-47.4006336,17z/data=!3m1!4b1!4m6!3m5!1s0x94c98a6742248333:0x3283242822822222!8m2!3d-22.0643365!4d-47.3980589!16s%2Fg%2F11c5r4x6c1"
                                    target="_blank"
                                >
                                    Rua Treze de maio, 257 <br />
                                    2º andar | Sala 21 <br />
                                    Centro - Limeira/SP
                                    <br />
                                    Cep: 13480-082
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="additional-footer-container container flex flex-col items-center justify-between gap-10 py-10 lg:flex-row">
                    <img src={logo} alt="solutionsbi logo" />
                    <div className="flex flex-col items-center gap-4 text-neutral-300 md:flex-row">
                        <p>{t('layout.footer.copyright')}</p>
                        <Link
                            to="politica-de-privacidade"
                            className="underline hover:text-brand-blue"
                        >
                            {t('layout.footer.privacy-policy')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
