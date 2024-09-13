import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type Cta = {
    text: string
    link: string
}

type HeroProps = {
    title: React.ReactNode
    description: string
    cta1?: Cta
    cta2?: Cta
    img: string
    position?: string
}

export default function Hero({
    title,
    description,
    cta1,
    cta2,
    img,
    position = 'center',
}: HeroProps) {
    return (
        <section className="relative px-[5%]">
            <div className="absolute left-0 top-0 -z-50 h-[88vh] w-full">
                <img
                    src={img}
                    className="mask-rect h-full w-full object-cover"
                />
            </div>

            <div className="container relative h-full py-16 md:py-24 lg:py-28">
                <div
                    className={`flex flex-col ${position === 'start' && 'items-start'} ${position === 'center' && 'items-center text-center'}`}
                >
                    <h1 className="mb-4 whitespace-pre-line">{title}</h1>

                    <p className="max-w-[650px] text-sm drop-shadow-custom md:text-base xl:text-md">
                        {description}
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                        {cta1 && (
                            <Button>
                                <a
                                    href={cta1.link}
                                    target="_blank"
                                    className="drop-shadow-md"
                                >
                                    {cta1.text}
                                </a>
                            </Button>
                        )}

                        {cta2 && (
                            <Button
                                variant="outline"
                                className="hidden md:block"
                            >
                                <Link to={cta2.link}>{cta2.text}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
