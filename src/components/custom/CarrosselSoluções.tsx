import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi,
} from '@/components/ui/carousel'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { binaryTextTransitionEffect } from '@/lib/binaryTextTransitionEffect'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Service = {
    title: React.ReactNode
    description: string
    url: string
    icon: string
    img?: string
}

type Card = {
    title: string
    description: string
    url: string
    icon: string
}

const services: Service[] = [
    {
        title: (
            <>
                Engenharia <br /> de Dados
            </>
        ),
        description:
            'Oferecemos soluções completas em engenharia de dados, desde a coleta até a análise de grandes volumes, apoiando decisões estratégicas e promovendo inovação contínua na sua empresa',
        url: '/engenharia-de-dados',
        icon: '/src/assets/svg/tech-icons/carbon_data-vis-1.svg',
    },
    {
        title: (
            <>
                Business <br /> Intelligence
            </>
        ),
        description:
            'Transformamos dados em insights estratégicos, otimizando operações e decisões. O BI oferece uma visão clara do seu negócio, permitindo rápidas reações e novas oportunidades de crescimento.',
        url: '/business-intelligence',
        icon: '/src/assets/svg/tech-icons/ep_data-line.svg',
    },
    {
        title: (
            <>
                Sistemas <br /> Personalizados
            </>
        ),
        description:
            'Desenvolvemos sistemas personalizados para atender necessidades específicas. Desde aplicativos até plataformas complexas, transformamos ideias em ferramentas eficientes e escaláveis.',
        url: '/sistemas-personalizados',
        icon: '/src/assets/svg/tech-icons/token_dweb.svg',
    },
    {
        title: (
            <>
                Inteligência <br /> Artificial
            </>
        ),
        description:
            'Integrando IA, modernizamos processos e criamos novas oportunidades de crescimento, alinhando sua empresa às demandas do mercado digital e promovendo inovação contínua.',
        url: 'inteligencia-artificial',
        icon: '/src/assets/svg/tech-icons/fluent_brain-circuit-20-regular.svg',
    },
    {
        title: (
            <>
                Transformação <br /> Digital
            </>
        ),
        description:
            'Ajudamos sua empresa a se adaptar ao digital, modernizando processos e integrando tecnologias. Nossa abordagem cria novas oportunidades de crescimento e inovação alinhadas ao mercado.',
        url: 'transformacao-digital',
        icon: '/src/assets/svg/tech-icons/simple-icons_circuitverse.svg',
    },
    {
        title: (
            <>
                Websites e <br /> E-commerce
            </>
        ),
        description:
            'Desenvolvemos websites e e-commerce que atraem e convertem visitantes. Nossas soluções oferecem uma experiência de usuário intuitiva, alinhada às melhores práticas de design e SEO.',
        url: 'websites-ecommerce',
        icon: '/src/assets/svg/tech-icons/material-symbols_ads-click-rounded.svg',
    },
]

export function Card({ title, description, url, icon }: Card) {
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

    return (
        <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={container}
            to={url}
            className="service-card relative flex h-[294px] select-none flex-col overflow-hidden border-t-2 border-brand-blue p-6 lg:h-[320px] lg:p-8 xl:h-[350px]"
        >
            {/* card header */}
            <div className="flex items-center justify-between">
                <h3 className="whitespace-pre-line text-2xl/[1.1] font-bold">
                    {title}
                </h3>
                <img className="h-12 w-12" src={icon} alt="" />
            </div>

            {/* card content */}
            <div>
                <p className="card-description mt-8 text-sm text-neutral-200 lg:text-base">
                    {description}
                </p>
            </div>

            {/* card footer */}
            <div className="relative mt-10 flex w-full items-center justify-between overflow-hidden">
                <span className="text-md font-semibold uppercase text-neutral-100">
                    Saiba mais
                </span>
                <MoveRight size={24} className="" />
            </div>

            {/* card background */}
            <div className="pointer-events-none absolute left-0 top-0 -z-[9] h-full w-full scale-y-0 bg-gradient-to-b from-brand-blue"></div>
            <div className="pointer-events-none absolute left-0 top-0 -z-[10] h-full w-full origin-top bg-gradient-to-b from-neutral-darkest/60 backdrop-blur"></div>
        </Link>
    )
}

//component
export default function Carrossel() {
    const container = useRef<HTMLDivElement>(null)
    const enterTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            if (!container.current) return

            const carouselCards = gsap.utils.toArray(
                container.current.querySelectorAll('.service-card')
            )

            const carouselButtons = gsap.utils.toArray(
                container.current.querySelectorAll('.carousel-button')
            )

            enterTl.current = gsap.timeline({
                delay: 1,
                defaults: {
                    duration: 1.5,
                    ease: 'power1.out',
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                },
            })

            enterTl.current.from(carouselCards, {
                opacity: 0,
                y: 100,
                stagger: 0.5,
            })

            enterTl.current.from(
                carouselButtons,
                {
                    opacity: 0,
                    x: (index: number) => (index === 0 ? 100 : -100),
                    stagger: 0.5,
                },
                '<+=1.5'
            )
        },
        { scope: container }
    )

    return (
        <Carousel
            ref={container}
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[Autoplay({ delay: 8000 })]}
            className="flex w-full items-center justify-center gap-2"
        >
            <CarouselPrevious className="carousel-button hidden px-2 md:block" />
            <CarouselContent className="">
                {services.map((service: Service, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 2xl:basis-1/3"
                    >
                        <Card
                            icon={service.icon}
                            title={service.title as string}
                            description={service.description}
                            url={service.url}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="carousel-button hidden px-2 md:block" />
        </Carousel>
    )
}
