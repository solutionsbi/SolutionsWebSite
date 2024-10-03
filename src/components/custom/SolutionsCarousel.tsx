import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from '@/components/ui/carousel'
import { SolutionCard } from './SolutionCard'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SolutionsCarousel() {
    const { t } = useTranslation()
    const container = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    // useGSAP(
    //     () => {
    //         if (!container.current) return

    //         const carouselCards = gsap.utils.toArray(
    //             container.current.querySelectorAll('.service-card')
    //         )

    //         const carouselButtons = gsap.utils.toArray(
    //             container.current.querySelectorAll('.carousel-button')
    //         )

    //         tl.current = gsap.timeline({
    //             defaults: {
    //                 delay: 0.5,
    //                 duration: 1.8,
    //                 ease: 'power4.out',
    //             },
    //             scrollTrigger: {
    //                 trigger: container.current,
    //                 start: 'top bottom',
    //             },
    //         })

    //         tl.current
    //             .from(carouselCards, {
    //                 opacity: 0,
    //                 y: 100,
    //                 stagger: 0.2,
    //             })

    //             .from(
    //                 carouselButtons,
    //                 {
    //                     opacity: 0,
    //                     duration: 1,
    //                     x: (index: number) => (index === 0 ? 100 : -100),
    //                     stagger: 0.2,
    //                 },
    //                 '<+=0.5'
    //             )
    //     },
    //     { scope: container }
    // )

    const servicesData = t('pages.solutions.items', {
        returnObjects: true,
    }) as Record<string, any>

    const servicesArray = Object.values(servicesData)

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="relative">
            <Carousel
                setApi={setApi}
                ref={container}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[Autoplay({ delay: 8000, stopOnMouseEnter: true })]}
                className="flex w-full items-center justify-center gap-2"
            >
                <CarouselPrevious
                    className="carousel-button absolute left-[-3%] top-1/2 z-10 px-1 md:block"
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
                    className="carousel-button absolute right-[-3%] top-1/2 z-10 px-1 md:block"
                    variant="icon"
                />
            </Carousel>
            <div className="mt-10 flex justify-center">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            'mx-1 h-2 w-2 rounded-full transition-all duration-300',
                            current === index + 1
                                ? 'bg-brand-blue'
                                : 'bg-neutral-100'
                        )}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}
