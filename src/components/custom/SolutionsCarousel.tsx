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

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SolutionsCarousel() {
    const { t } = useTranslation()
    const container = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            if (!container.current) return

            const carouselCards = gsap.utils.toArray(
                container.current.querySelectorAll('.service-card')
            )

            const carouselButtons = gsap.utils.toArray(
                container.current.querySelectorAll('.carousel-button')
            )

            tl.current = gsap.timeline({
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

            tl.current
                .from(carouselCards, {
                    opacity: 0,
                    y: 100,
                    stagger: 0.2,
                })

                .from(
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

    const servicesData = t('pages.solutions.items', {
        returnObjects: true,
    }) as Record<string, any>

    const servicesArray = Object.values(servicesData)

    return (
        <Carousel
            ref={container}
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="flex w-full items-center justify-center gap-2"
        >
            <CarouselPrevious
                className="carousel-button hidden px-1 md:block"
                variant="icon"
            />
            <CarouselContent className="">
                {servicesArray.map((service, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 2xl:basis-1/3"
                    >
                        <SolutionCard
                            title={{
                                part1: service.title.part1,
                                part2: service.title.part2,
                            }}
                            description={service.description.medium}
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
