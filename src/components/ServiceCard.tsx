import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SolutionCardProps = {
    title: string
    description: string
    url: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function SolutionCard({
    title,
    description,
    url,
    icon: Icon,
}: SolutionCardProps) {
    const container = useRef<HTMLAnchorElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    // const { contextSafe } = useGSAP({ scope: container })

    // const getCardElements = () => {
    //     const cardContainer = container.current
    //     return {
    //         cardContainer,
    //         cardHeaderText: cardContainer?.children[0]?.children[0],
    //         cardHeaderIcon: cardContainer?.children[0]?.children[1],
    //         cardContentText: cardContainer?.children[1]?.children[0],
    //         cardFooterText: cardContainer?.children[2]?.children[0],
    //         cardFooterArrow: cardContainer?.children[2]?.children[1],
    //         cardBackground: cardContainer?.children[3],
    //     }
    // }

    // useGSAP(() => {
    //     const { cardFooterText, cardFooterArrow } = getCardElements()

    //     if (cardFooterText) {
    //         gsap.set(cardFooterText, {
    //             opacity: 0,
    //             x: -10,
    //         })
    //     }
    //     if (cardFooterArrow) {
    //         gsap.set(cardFooterArrow, {
    //             xPercent: 100,
    //             opacity: 0,
    //         })
    //     }
    // }, [])

    // const animateCard = (isEntering: boolean) => {
    //     const {
    //         cardContainer,
    //         cardHeaderText,
    //         cardHeaderIcon,
    //         cardContentText,
    //         cardFooterText,
    //         cardFooterArrow,
    //         cardBackground,
    //     } = getCardElements()

    //     if (!tl.current) {
    //         tl.current = gsap.timeline({
    //             defaults: {
    //                 duration: 0.5,
    //                 ease: 'power2.inOut',
    //             },
    //             paused: true,
    //         })
    //         if (cardHeaderIcon)
    //             tl.current.to(cardHeaderIcon, { scale: 1.2 }, '<')
    //         if (cardBackground)
    //             tl.current.to(
    //                 cardBackground,
    //                 { scaleY: 1, transformOrigin: 'top' },
    //                 '<'
    //             )
    //         if (cardContentText) {
    //             tl.current.to(
    //                 cardContentText,
    //                 {
    //                     scale: 1.02,
    //                 },
    //                 '<'
    //             )
    //         }
    //         if (cardFooterText)
    //             tl.current.to(cardFooterText, { opacity: 1, x: 0 }, '-=0.3')
    //         if (cardFooterArrow)
    //             tl.current.to(
    //                 cardFooterArrow,
    //                 { opacity: 1, xPercent: -100 },
    //                 '<'
    //             )
    //     }

    //     if (isEntering) {
    //         tl.current.play()
    //     } else {
    //         tl.current.reverse()
    //     }
    // }

    // const handleMouseEnter = contextSafe(() => {
    //     animateCard(true)
    // })

    // const handleMouseLeave = contextSafe(() => {
    //     animateCard(false)
    // })

    const { t } = useTranslation()

    return (
        <Link
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            ref={container}
            to={url}
            className="service-card relative flex h-[330px] select-none flex-col overflow-hidden border-t-2 border-brand-blue p-6 lg:p-8"
        >
            {/* card header */}
            <div className="flex items-center justify-between">
                <h3 className="whitespace-pre-line text-2xl/[1.1] font-bold">
                    {title}
                </h3>
                <Icon className="h-12 w-12" />
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
