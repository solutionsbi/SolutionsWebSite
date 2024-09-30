import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

type ClientLogo = {
    src: string
    alt: string
}

type ClientLogoCarouselProps = {
    logos: ClientLogo[]
}

const ClientLogoCarousel: React.FC<
    ClientLogoCarouselProps & { direction?: 'forward' | 'backward' }
> = ({ logos, direction = 'forward' }) => {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                AutoScroll({
                    direction: direction,
                    speed: 1,
                    stopOnInteraction: false,
                }),
            ]}
            className="mx-auto flex max-w-2xl items-center justify-center gap-2"
        >
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 z-10 w-1/6 bg-gradient-to-r from-neutral-100 to-transparent"></div>
                <div className="absolute inset-y-0 right-0 z-10 w-1/6 bg-gradient-to-l from-neutral-100 to-transparent"></div>
                <CarouselContent className="py-5">
                    {logos.map((logo, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/4 lg:basis-1/4 xl:basis-1/6"
                        >
                            <div className="relative flex h-28 w-52 items-center justify-center rounded-lg border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:border-blue-700">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-full max-w-full object-contain p-4"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
        </Carousel>
    )
}

export default ClientLogoCarousel
