import { useTranslation } from 'react-i18next'

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

            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    markers: false,
                },
                defaults: {
                    duration: 0.5,
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
                    '<+=0.4'
                )
                .to(
                    comoFuncionaGridItems,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
                    },
                    '<+=0.5'
                )
        },
        { scope: container }
    )

    const { t } = useTranslation()

    return (
        <section ref={container} className="page-section">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <div className="mb-20 flex flex-col items-center text-center">
                        <h2 className="section-title mb-4 font-inter">
                            {t('pages.solutions.howItWorks.title')}
                        </h2>

                        <p className="section-description max-w-md whitespace-pre-line drop-shadow-custom md:text-md xl:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="como-funciona-grid relative grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="como-funciona-grid-item group relative flex flex-col gap-6 rounded-2xl bg-neutral-darkest/40 p-8 ring-2 ring-white/5 hover:scale-105 hover:ring-2 hover:ring-brand-blue md:p-10"
                            >
                                <div className="flex h-max gap-4 md:gap-6">
                                    <span className="font-ibm text-6xl font-bold text-brand-blue md:text-10xl/none">
                                        {index + 1}
                                    </span>
                                    <h3 className="whitespace-pre-line border-l-2 border-brand-blue pl-4 font-inter text-2xl normal-case drop-shadow-custom md:pl-6 md:text-3xl/tight">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className={`flex flex-col gap-3`}>
                                    <p className="text-base text-neutral-200 drop-shadow-custom">
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
