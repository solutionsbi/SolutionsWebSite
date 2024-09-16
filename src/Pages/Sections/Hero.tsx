import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
    const container = useRef<HTMLElement>(null)
    const enterTl = useRef<gsap.core.Timeline | null>(null)
    const scrubTl = useRef<gsap.core.Timeline | null>(null)

    // animations
    useGSAP(
        () => {
            if (!container.current) return

            enterTl.current = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: 'power1.out',
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'top center',
                },
                onComplete: () => {
                    scrubTl.current = gsap.timeline({
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top 10%',
                            end: 'bottom 10%',
                            scrub: true,
                        },
                    })

                    scrubTl.current
                        ?.to('#section-bg', {
                            y: 100,
                            scale: 1.1,
                        })
                        .to(
                            '#hero-heading, #hero-description',
                            {
                                y: -50,
                                opacity: 0.5,
                            },
                            '<'
                        )
                        .to(
                            ['#hero-cta-1', '#hero-cta-2'],
                            {
                                y: -30,
                                opacity: 0.7,
                            },
                            '<'
                        )
                },
            })

            gsap.set('#section-bg', {
                scale: 1.2,
                autoAlpha: 0,
            })
            gsap.set('#hero-heading', {
                x: -20,
                autoAlpha: 0,
            })
            gsap.set('#hero-description', {
                y: 30,
                autoAlpha: 0,
            })
            gsap.set('#hero-cta-1', {
                x: -20,
                autoAlpha: 0,
            })
            gsap.set('#hero-cta-2', {
                x: 20,
                autoAlpha: 0,
            })

            enterTl.current
                ?.to('#section-bg', {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                })
                .to(
                    '#hero-heading',
                    {
                        autoAlpha: 1,
                        x: 0,
                    },
                    '-=2'
                )
                .to(
                    '#hero-description',
                    {
                        autoAlpha: 1,
                        y: 0,
                    },
                    '-=1.5'
                )
            if (cta1) {
                enterTl.current?.to(
                    '#hero-cta-1',
                    {
                        autoAlpha: 1,
                        x: 0,
                    },
                    '-=1.1'
                )
            }
            if (cta2) {
                enterTl.current?.to(
                    '#hero-cta-2',
                    {
                        autoAlpha: 1,
                        x: 0,
                    },
                    '-=1.1'
                )
            }
        },
        { scope: container }
    )
    return (
        <section ref={container} className="relative px-[5%]">
            <div
                id="section-bg"
                className="absolute left-0 top-0 -z-50 h-[88vh] w-full"
            >
                <img
                    src={img}
                    className="mask-rect h-full w-full object-cover"
                />
            </div>

            <div className="container relative h-full py-16 md:py-24 lg:py-28">
                <div
                    className={`flex flex-col ${position === 'start' && 'items-start'} ${position === 'center' && 'items-center text-center'}`}
                >
                    <h1 id="hero-heading" className="mb-4 whitespace-pre-line">
                        {title}
                    </h1>

                    <p
                        id="hero-description"
                        className="max-w-[650px] text-sm drop-shadow-custom md:text-base xl:text-md"
                    >
                        {description}
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                        {cta1 && (
                            <Button id="hero-cta-1">
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
                                id="hero-cta-2"
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
