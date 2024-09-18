import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Step = {
    title: string
    description: string
}

type ComoFuncionaProps = {
    description: string
    steps: Step[]
}

export default function ComoFunciona({
    description,
    steps,
}: ComoFuncionaProps) {
    const container = useRef<HTMLElement>(null)
    const sectionTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            if (!container.current) return

            const sectionTitle =
                container.current.querySelector('.section-title')
            const sectionDescription = container.current.querySelector(
                '.section-description'
            )
            const comoFuncionaGridItems = gsap.utils.toArray(
                container.current.querySelectorAll('.como-funciona-grid-item')
            )
            const comoFuncionaGridBg = container.current.querySelector(
                '.como-funciona-grid-bg'
            )
            const comoFuncionaGridLine = container.current.querySelector(
                '.como-funciona-grid-line'
            )

            // console.group('Como Funciona Section Elements')
            // console.log('Section Title:', sectionTitle)
            // console.log('Section Description:', sectionDescription)
            // console.log('Como Funciona Grid Items:', comoFuncionaGridItems)
            // console.groupEnd()

            gsap.set(sectionTitle, {
                opacity: 0,
                x: 20,
            })
            gsap.set(sectionDescription, {
                opacity: 0,
                y: 20,
            })

            gsap.set(comoFuncionaGridItems, {
                opacity: 0,
                y: 20,
            })
            gsap.set(comoFuncionaGridBg, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: 'top',
            })
            gsap.set(comoFuncionaGridLine, {
                opacity: 0,
                scaleX: 0,
            })

            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                    markers: false,
                },
                defaults: {
                    duration: 1.5,
                    ease: 'power1.inOut',
                },
            })

            sectionTl.current
                .to(sectionTitle, {
                    opacity: 1,
                    x: 0,
                })
                .to(
                    sectionDescription,
                    {
                        opacity: 1,
                        y: 0,
                    },
                    '<+=0.5'
                )
                .to(
                    comoFuncionaGridLine,
                    {
                        opacity: 1,
                        scaleX: 1,
                    },
                    '<+=0.5'
                )
                .to(
                    comoFuncionaGridBg,
                    {
                        opacity: 1,
                        scaleY: 1,
                    },
                    '<'
                )
                .to(
                    comoFuncionaGridItems,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.5,
                    },
                    '<+=0.5'
                )
        },
        { scope: container }
    )

    return (
        <section
            ref={container}
            className="relative px-[5%] py-16 md:py-24 lg:py-28"
        >
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <div className="mb-20 flex flex-col items-center text-center">
                        <h2 className="section-title mb-4">
                            <span className="text-brand-blue">como</span>{' '}
                            funciona
                        </h2>

                        <p className="section-description whitespace-pre-line drop-shadow-custom md:text-md xl:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="como-funciona-grid relative grid grid-cols-1 gap-12 px-5 pt-12 lg:grid-cols-2 xl:gap-20 xl:px-20 xl:pt-20">
                        <div className="como-funciona-grid-bg absolute left-0 top-0 h-full w-full bg-gradient-to-b from-neutral-darkest/70 to-transparent backdrop-blur" />
                        <div className="como-funciona-grid-line absolute left-0 top-0 h-[3px] w-full bg-brand-blue" />

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="como-funciona-grid-item relative flex flex-col gap-6"
                            >
                                <div className="flex h-max gap-6">
                                    <span className="font-ibm text-8xl/none font-bold text-brand-blue">
                                        {index + 1}
                                    </span>
                                    <h3 className="whitespace-pre-line text-2xl/tight drop-shadow-custom">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className={`flex flex-col gap-3`}>
                                    <p className="text-justify text-base text-text-alternative drop-shadow-custom">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
