import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { binaryTextTransitionEffect } from '@/lib/binaryTextTransitionEffect'

import iconEngenhariaDeDados from '@/assets/svg/tech-icons/ed-icon.svg'
import iconBusinessIntelligence from '@/assets/svg/tech-icons/bi-icon.svg'
import iconSistemasPersonalizados from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iconInteligenciaArtificial from '@/assets/svg/tech-icons/ia-icon.svg'
import iconTransformacaoDigital from '@/assets/svg/tech-icons/transformacao-icon.svg'
import iconWebsitesEEcommerces from '@/assets/svg/tech-icons/sites-icon.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SolutionCardProps = {
    title: { part1: string; part2: string }
    description: string
    url: string
    icon: string
}

export function SolutionCard({
    title,
    description,
    url,
    icon,
}: SolutionCardProps) {
    const container = useRef<HTMLAnchorElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    const { contextSafe } = useGSAP({ scope: container })

    const getCardElements = () => {
        const cardContainer = container.current
        return {
            cardContainer,
            cardHeaderText: cardContainer?.children[0]?.children[0],
            cardHeaderIcon: cardContainer?.children[0]?.children[1],
            cardContentText: cardContainer?.children[1]?.children[0],
            cardFooterText: cardContainer?.children[2]?.children[0],
            cardFooterArrow: cardContainer?.children[2]?.children[1],
            cardBackground: cardContainer?.children[3],
        }
    }

    useGSAP(() => {
        const { cardFooterText, cardFooterArrow } = getCardElements()

        if (cardFooterText) {
            gsap.set(cardFooterText, {
                opacity: 0,
                x: -10,
            })
        }
        if (cardFooterArrow) {
            gsap.set(cardFooterArrow, {
                xPercent: 100,
                opacity: 0,
            })
        }
    }, [])

    const animateCard = (isEntering: boolean) => {
        const {
            cardContainer,
            cardHeaderText,
            cardHeaderIcon,
            cardContentText,
            cardFooterText,
            cardFooterArrow,
            cardBackground,
        } = getCardElements()

        if (!tl.current) {
            tl.current = gsap.timeline({
                defaults: {
                    duration: 0.5,
                    ease: 'power2.inOut',
                },
                paused: true,
            })

            if (cardHeaderText)
                tl.current.from(cardHeaderText, {
                    onStart: () => {
                        if (cardHeaderText instanceof HTMLElement) {
                            binaryTextTransitionEffect(cardHeaderText)
                        }
                    },
                })
            if (cardHeaderIcon)
                tl.current.to(cardHeaderIcon, { scale: 1.2 }, '<')
            if (cardBackground)
                tl.current.to(
                    cardBackground,
                    { scaleY: 1, transformOrigin: 'top' },
                    '<'
                )
            if (cardContentText) {
                tl.current.to(
                    cardContentText,
                    {
                        scale: 1.02,
                    },
                    '<'
                )
            }
            if (cardFooterText)
                tl.current.to(cardFooterText, { opacity: 1, x: 0 }, '-=0.3')
            if (cardFooterArrow)
                tl.current.to(
                    cardFooterArrow,
                    { opacity: 1, xPercent: -100 },
                    '<'
                )
        }

        if (isEntering) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }

    const handleMouseEnter = contextSafe(() => {
        animateCard(true)
    })

    const handleMouseLeave = contextSafe(() => {
        animateCard(false)
    })

    const { t } = useTranslation()

    const iconMapping: Record<string, string> = {
        'icon-engenharia-de-dados': iconEngenhariaDeDados,
        'icon-business-intelligence': iconBusinessIntelligence,
        'icon-sistemas-personalizados': iconSistemasPersonalizados,
        'icon-inteligencia-artificial': iconInteligenciaArtificial,
        'icon-transformacao-digital': iconTransformacaoDigital,
        'icon-websites-e-ecommerces': iconWebsitesEEcommerces,
    }

    return (
        <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={container}
            to={url}
            className="service-card relative flex h-[350px] select-none flex-col overflow-hidden border-t-2 border-brand-blue p-6 lg:p-8"
        >
            {/* card header */}
            <div className="flex items-center justify-between">
                <h3 className="whitespace-pre-line text-2xl/[1.1] font-bold">
                    {title.part1} <br /> {title.part2}
                </h3>
                <img className="h-12 w-12" src={iconMapping[icon]} alt="" />
            </div>

            {/* card content */}
            <div>
                <p className="card-description mt-8 text-sm text-neutral-200 lg:text-base">
                    {description}
                </p>
            </div>

            {/* card footer */}
            <div className="relative mt-auto flex h-max w-full items-center justify-between overflow-hidden">
                <span className="text-md font-semibold uppercase text-neutral-100">
                    {t('buttons.saiba-mais')}
                </span>
                <MoveRight size={24} className="" />
            </div>

            {/* card background */}
            <div className="pointer-events-none absolute left-0 top-0 -z-[9] h-full w-full scale-y-0 bg-gradient-to-b from-brand-blue"></div>
            <div className="pointer-events-none absolute left-0 top-0 -z-[10] h-full w-full origin-top bg-gradient-to-b from-neutral-darkest/60 backdrop-blur"></div>
        </Link>
    )
}
