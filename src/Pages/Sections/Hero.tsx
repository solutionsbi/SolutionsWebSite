import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PrimaryButton from '@/components/custom/PrimaryButton'
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

            const sectionBg = container.current.querySelector('.section-bg')
            const sectionTitle =
                container.current.querySelector('.section-title')
            const sectionDescription = container.current.querySelector(
                '.section-description'
            )
            const sectionCta1 =
                container.current.querySelector('.section-cta-1')
            const sectionCta2 =
                container.current.querySelector('.section-cta-2')

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
                        ?.to(sectionBg, {
                            y: 100,
                            scale: 1.1,
                        })
                        .to(
                            sectionTitle,
                            {
                                y: -50,
                                opacity: 0.5,
                            },
                            '<'
                        )
                },
            })

            gsap.set(sectionBg, {
                scale: 1.2,
                autoAlpha: 0,
            })
            gsap.set(sectionTitle, {
                x: -20,
                autoAlpha: 0,
            })
            gsap.set(sectionDescription, {
                y: 30,
                autoAlpha: 0,
            })
            if (cta1) {
                gsap.set(sectionCta1, {
                    x: -20,
                    autoAlpha: 0,
                })
            }
            if (cta2) {
                gsap.set(sectionCta2, {
                    x: 20,
                    autoAlpha: 0,
                })
            }

            enterTl.current
                ?.to(sectionBg, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                })
                .to(
                    sectionTitle,
                    {
                        autoAlpha: 1,
                        x: 0,
                    },
                    '-=2'
                )
                .to(
                    sectionDescription,
                    {
                        autoAlpha: 1,
                        y: 0,
                    },
                    '-=1.5'
                )
            if (cta1) {
                enterTl.current?.to(
                    sectionCta1,
                    {
                        autoAlpha: 1,
                        x: 0,
                    },
                    '-=1.1'
                )
            }
            if (cta2) {
                enterTl.current?.to(
                    sectionCta2,
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
        <section ref={container} className="relative h-[78vh] px-[5%]">
            <div className="section-bg absolute left-0 top-[-12vh] -z-50 h-[100vh] w-full">
                <img
                    src={img}
                    className="mask-rect h-full w-full object-cover"
                />
            </div>

            <div className="container relative grid h-full items-center">
                <div
                    className={`flex flex-col ${position === 'start' && 'items-start'} ${position === 'center' && 'items-center text-center'}`}
                >
                    <h1 className="section-title mb-4 whitespace-pre-line">
                        {title}
                    </h1>

                    <p className="section-description max-w-[650px] text-sm drop-shadow-custom md:text-base xl:text-md">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-2 gap-x-4 md:mt-8 md:flex-row">
                        {cta1 && (
                            <PrimaryButton
                                className="section-cta-1"
                                href={cta1.link}
                                additionalText={'Saiba mais'}
                            >
                                {cta1.text}
                            </PrimaryButton>
                        )}

                        {cta2 && (
                            <PrimaryButton
                                className="section-cta-2"
                                href={cta2.link}
                            >
                                {cta2.text}
                            </PrimaryButton>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
