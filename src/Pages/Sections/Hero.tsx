import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type HeroProps = {
    title: React.ReactNode
    description: string
    cta1: string
    cta2?: string
    img: string
    position: string
}

export default function Hero({
    title,
    description,
    cta1,
    cta2,
    img,
    position,
}: HeroProps) {
    return (
        <section className="relative px-[5%]">
            <div className="absolute left-0 top-[0%] -z-50 h-[88vh] w-full">
                <img
                    src={img}
                    className="mask-rect h-full w-full object-cover"
                />
            </div>

            <div className="container relative py-16 md:py-24 lg:py-28">
                <div
                    className={`flex w-full flex-col ${position === 'start' && 'items-start'} ${position === 'center' && 'items-center text-center'}`}
                >
                    <h1 className="mb-4 whitespace-pre-line">{title}</h1>

                    <p className="max-w-[650px] text-base text-text-alternative drop-shadow-custom md:text-md xl:text-xl">
                        {description}
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                        <Button>
                            <a
                                href="#"
                                target="_blank"
                                className="drop-shadow-md"
                            >
                                {cta1}
                            </a>
                        </Button>

                        {cta2 && (
                            <Button variant="outline">
                                <Link to="/sobre">{cta2}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
