import PrimaryButton from '@/components/custom/PrimaryButton'
import { PrimaryButtonProps } from '@/components/custom/PrimaryButton'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

import icon1 from '@/assets/svg/abstract-icons/icon1.svg'
import icon2 from '@/assets/svg/abstract-icons/icon2.svg'
import icon3 from '@/assets/svg/abstract-icons/icon3.svg'
import icon4 from '@/assets/svg/abstract-icons/icon4.svg'

const icons = [icon1, icon2, icon3, icon4]

export type Benefit = {
    title: string
    description: string
}

type BeneficiosProps = {
    title: React.ReactNode
    description: string
    benefits: Benefit[]
    background: string
    cta: PrimaryButtonProps
}

export default function Beneficios({
    title,
    description,
    benefits,
    background,
    cta,
}: BeneficiosProps) {
    const container = useRef<HTMLElement>(null)
    const enterTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            // check if container exists
            if (!container.current) return

            // get elements that will be animated from the container
            const sectionBg = container.current.querySelector('.section-bg')
            const sectionTitle =
                container.current.querySelector('.section-title')
            const sectionDescription = container.current.querySelector(
                '.section-description'
            )
            const sectionsCtas = gsap.utils.toArray(
                container.current.querySelectorAll('.section-cta')
            )
            const sectionBenefits = gsap.utils.toArray(
                container.current.querySelectorAll('.benefit-item')
            )
            const benefitIcons = gsap.utils.toArray(
                container.current.querySelectorAll('.benefit-item img')
            )
            const benefitTitle = gsap.utils.toArray(
                container.current.querySelectorAll('.benefit-item h3')
            )
            const benefitDescription = gsap.utils.toArray(
                container.current.querySelectorAll('.benefit-item p')
            )

            //background animation
            gsap.set(sectionBg, {
                autoAlpha: 0,
                scale: 0.8,
            })
            gsap.to(sectionBg, {
                autoAlpha: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    scrub: 1,
                },
            })

            gsap.set(sectionTitle, {
                autoAlpha: 0,
                y: 20,
            })
            gsap.set(sectionDescription, {
                autoAlpha: 0,
                y: 20,
            })
            gsap.set(sectionBenefits, {
                autoAlpha: 0,
                x: -20,
            })

            gsap.set(sectionsCtas, {
                autoAlpha: 0,
                x: 20,
            })

            enterTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 90%',
                    markers: false,
                },
                defaults: {
                    duration: 0.5,
                    ease: 'power1.out',
                },
            })

            enterTl.current.to(sectionTitle, { autoAlpha: 1, y: 0 }, '<+=1')
            enterTl.current.to(
                sectionDescription,
                { autoAlpha: 1, y: 0 },
                '<+=0.2'
            )
            enterTl.current.to(
                sectionBenefits,
                { autoAlpha: 1, x: 0, stagger: 0.5 },
                '<+=0.2'
            )
            enterTl.current.to(
                sectionsCtas,
                { autoAlpha: 1, x: 0, stagger: 0.1 },
                '<+=0.2'
            )
        },
        { scope: container }
    )

    return (
        <section ref={container} className="page-section">
            <div className="section-bg absolute left-1/2 top-1/2 -z-50 mx-auto h-[120%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src={background}
                    className="mask-rect h-full w-full object-cover opacity-100"
                />
            </div>

            <div className="container grid justify-items-center gap-10 lg:grid-cols-2">
                <div className="mb-16 flex w-full flex-col lg:max-w-md">
                    <div className="flex flex-col text-center lg:items-start lg:text-start">
                        <h2 className="section-title mb-5 whitespace-pre-line md:mb-6">
                            {title}
                        </h2>
                        <p className="section-description xl:text-md">
                            {description}
                        </p>
                        <div className="mt-6 hidden items-center justify-center gap-x-4 md:mt-10 md:flex">
                            <PrimaryButton
                                className="section-cta"
                                href={cta.href}
                                text={cta.text}
                                additionalText={cta.additionalText}
                                linkType={cta.linkType}
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto grid gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-item relative flex w-full max-w-md flex-col gap-4 border-l-2 border-brand-blue bg-gradient-to-r from-neutral-darkest/50 px-8 py-6 shadow-[-5px_5px_10px_1px_rgba(0,0,0,0.2)] backdrop-blur"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    className="h-8 w-8 [&_*]:filter-none"
                                    src={icons[index]}
                                />
                                <h3 className="whitespace-pre-line text-2xl/[1.15] [&_*]:filter-none">
                                    {benefit.title}
                                </h3>
                            </div>
                            <div className="text-neutral-200 2xl:text-md [&_*]:filter-none">
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
