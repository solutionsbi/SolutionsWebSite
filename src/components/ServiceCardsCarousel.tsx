import { useTranslation } from 'react-i18next'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getServiceInfo } from '@/lib/getServiceInfo'
import { ServiceCard2 } from './ServiceCard2'
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

    const servicesArray = getServiceInfo(t)

    console.log(servicesArray)
    return (
        <Carousel
            ref={container}
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="z-50 mx-auto flex max-w-2xl items-center justify-center gap-2"
        >
            <CarouselPrevious
                className="carousel-button hidden px-1 text-white md:block"
                variant="link"
            />
            <CarouselContent className="py-5">
                {servicesArray.map((service, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <ServiceCard2
                            icon={service.icon}
                            title={service.title}
                            description={service.description.medium}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext
                className="carousel-button hidden px-1 text-blue-700 md:block"
                variant="link"
            />
        </Carousel>
    )
}
