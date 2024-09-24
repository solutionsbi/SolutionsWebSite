import { useTranslation } from 'react-i18next'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel'
import { SolutionCard } from './SolutionCard'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import edIcon from '@/assets/svg/tech-icons/ed-icon.svg'
import biIcon from '@/assets/svg/tech-icons/bi-icon.svg'
import sistemasIcon from '@/assets/svg/tech-icons/sistemas-icon.svg'
import iaIcon from '@/assets/svg/tech-icons/ia-icon.svg'
import transformacaoIcon from '@/assets/svg/tech-icons/transformacao-icon.svg'
import sitesIcon from '@/assets/svg/tech-icons/sites-icon.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const serviceData = [
    { icon: edIcon, url: '/engenharia-de-dados' },
    { icon: biIcon, url: '/business-intelligence' },
    { icon: sistemasIcon, url: '/sistemas-personalizados' },
    { icon: iaIcon, url: '/inteligencia-artificial' },
    { icon: transformacaoIcon, url: '/transformacao-digital' },
    { icon: sitesIcon, url: '/sites-e-comercio-eletronico' },
]

export default function SolutionsCarousel() {
    const { t } = useTranslation()
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
                defaults: {
                    delay: 0.5,
                    duration: 1.8,
                    ease: 'power4.out',
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                },
            })

            enterTl.current.from(carouselCards, {
                opacity: 0,
                y: 100,
                stagger: 0.2,
            })

            enterTl.current.from(
                carouselButtons,
                {
                    opacity: 0,
                    duration: 1,
                    x: (index: number) => (index === 0 ? 100 : -100),
                    stagger: 0.2,
                },
                '<+=0.5'
            )
        },
        { scope: container }
    )

    const translatedCards = t(
        'components.solutions.solutionsCarousel.solutionsCards',
        { returnObjects: true }
    ) as Array<{ title: { part1: string; part2: string }; description: string }>

    const services = serviceData.map((data, index) => ({
        title: {
            part1: translatedCards[index].title.part1,
            part2: translatedCards[index].title.part2,
        },
        description: translatedCards[index].description,
        icon: data.icon,
        url: data.url,
    }))

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
            <CarouselPrevious
                className="carousel-button hidden px-1 md:block"
                variant="icon"
            />
            <CarouselContent className="">
                {(services as any[]).map((service, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 2xl:basis-1/3"
                    >
                        <SolutionCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            url={service.url}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext
                className="carousel-button hidden px-1 md:block"
                variant="icon"
            />
        </Carousel>
    )
}
