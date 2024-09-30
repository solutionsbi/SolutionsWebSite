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

    // useGSAP(
    //     () => {
    //         if (!container.current) return

    //         const sectionTitle =
    //             container.current.querySelector('.section-title')
    //         const sectionDescription = container.current.querySelector(
    //             '.section-description'
    //         )
    //         const comoFuncionaGridItems = gsap.utils.toArray(
    //             container.current.querySelectorAll('.como-funciona-grid-item')
    //         )
    //         const comoFuncionaGridBg = container.current.querySelector(
    //             '.como-funciona-grid-bg'
    //         )
    //         const comoFuncionaGridLine = container.current.querySelector(
    //             '.como-funciona-grid-line'
    //         )

    //         gsap.set(sectionTitle, {
    //             opacity: 0,
    //             x: 20,
    //         })
    //         gsap.set(sectionDescription, {
    //             opacity: 0,
    //             y: 20,
    //         })

    //         gsap.set(comoFuncionaGridItems, {
    //             opacity: 0,
    //             y: 20,
    //         })
    //         gsap.set(comoFuncionaGridBg, {
    //             opacity: 0,
    //             scaleY: 0,
    //             transformOrigin: 'top',
    //         })
    //         gsap.set(comoFuncionaGridLine, {
    //             opacity: 0,
    //             scaleX: 0,
    //         })

    //         sectionTl.current = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: container.current,
    //                 start: 'top 80%',
    //                 markers: false,
    //             },
    //             defaults: {
    //                 duration: 1,
    //                 ease: 'power4.out',
    //             },
    //         })

    //         sectionTl.current
    //             .to(sectionTitle, {
    //                 opacity: 1,
    //                 x: 0,
    //             })
    //             .to(
    //                 sectionDescription,
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                 },
    //                 '<+=0.5'
    //             )
    //             .to(
    //                 comoFuncionaGridLine,
    //                 {
    //                     opacity: 1,
    //                     scaleX: 1,
    //                 },
    //                 '<+=0.5'
    //             )
    //             .to(
    //                 comoFuncionaGridBg,
    //                 {
    //                     opacity: 1,
    //                     scaleY: 1,
    //                 },
    //                 '<'
    //             )
    //             .to(
    //                 comoFuncionaGridItems,
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     stagger: 0.5,
    //                 },
    //                 '<+=0.5'
    //             )
    //     },
    //     { scope: container }
    // )

    const { t } = useTranslation()

    return (
        <section ref={container} className="page-section">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <div className="mb-20 flex flex-col items-center text-center">
                        <h2 className="section-title mb-4">
                            {t('pages.solutions.howItWorks.title')}
                        </h2>

                        <p className="section-description max-w-md whitespace-pre-line drop-shadow-custom md:text-md xl:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="como-funciona-grid relative grid grid-cols-1 gap-8 px-2 py-4 md:px-5 md:pt-12 lg:grid-cols-2 xl:gap-12 xl:px-20 xl:py-20">
                        <div className="como-funciona-grid-bg absolute left-0 top-0 h-full w-full bg-gradient-to-b from-neutral-darkest/70 backdrop-blur" />
                        <div className="como-funciona-grid-line absolute left-0 top-0 h-[2px] w-full rounded-full bg-brand-blue shadow-[0px_5px_10px_5px_rgba(0,0,0,0.2)]" />

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="como-funciona-grid-item relative flex flex-col gap-6 rounded-lg bg-gradient-to-br from-neutral-darkest/50 p-4 shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:bg-brand-blue md:p-10"
                            >
                                <div className="flex h-max gap-4 md:gap-6">
                                    <span className="font-ibm text-6xl font-bold text-brand-blue md:text-10xl/none">
                                        {index + 1}
                                    </span>
                                    <h3 className="whitespace-pre-line border-l-2 border-brand-blue pl-4 text-xl drop-shadow-custom md:pl-6 md:text-2xl/tight">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className={`flex flex-col gap-3`}>
                                    <p className="text-base text-text-alternative drop-shadow-custom">
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
