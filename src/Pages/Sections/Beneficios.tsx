import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type BeneficiosProps = {
    title: React.ReactNode
    description: string
    benefits: Benefit[]
    background: string
}

type Benefit = {
    title: string
    description: string
    icon: string
}

export default function Beneficios({
    title,
    description,
    benefits,
    background,
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

            // console.group('Animation Elements')
            // console.log('Section Background:', sectionBg)
            // console.log('Section Title:', sectionTitle)
            // console.log('Section Description:', sectionDescription)
            // console.log('Section Benefits:', sectionBenefits)
            // console.log('Section CTA:', sectionsCtas)
            // console.log('Benefit Icons:', benefitIcons)
            // console.log('Benefit Titles:', benefitTitle)
            // console.log('Benefit Descriptions:', benefitDescription)
            // console.groupEnd()

            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionBg, {
                opacity: 0,
                scale: 0.8,
            })
            gsap.set(sectionTitle, {
                opacity: 0,
                y: 20,
            })
            gsap.set(sectionDescription, {
                opacity: 0,
                y: 20,
            })
            gsap.set(sectionBenefits, {
                opacity: 0,
                x: -20,
            })

            gsap.set(sectionsCtas, {
                opacity: 0,
                x: 20,
            })

            // create timeline
            enterTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    markers: false,
                },
                defaults: {
                    duration: 1,
                    ease: 'power1.inOut',
                },
            })

            enterTl.current.to(sectionBg, { opacity: 1, scale: 1, duration: 4 })
            enterTl.current.to(sectionTitle, { opacity: 1, y: 0 }, '<+=1')
            enterTl.current.to(
                sectionDescription,
                { opacity: 1, y: 0 },
                '<+=0.2'
            )
            enterTl.current.to(
                sectionBenefits,
                { opacity: 1, x: 0, stagger: 0.5 },
                '<+=0.2'
            )
            enterTl.current.to(
                sectionsCtas,
                { opacity: 1, x: 0, stagger: 0.1 },
                '<+=0.5'
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

            <div className="grid h-full items-center">
                <div className="container grid items-center justify-items-center lg:grid-cols-2 lg:gap-20">
                    <div className="mb-16 flex w-full flex-col">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                            <h2 className="section-title mb-5 md:mb-6">
                                {title}
                            </h2>
                            <p className="section-description xl:text-md">
                                {description}
                            </p>
                            <div className="mt-6 hidden items-center justify-center gap-x-4 md:mt-10 md:flex">
                                <Button className="section-cta">
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="drop-shadow-md"
                                    >
                                        Agende uma Consultoria
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="section-cta"
                                >
                                    <Link to="/sobre">Saiba mais</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto grid gap-2">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="benefit-item relative flex flex-col gap-4 border-l-[4px] border-brand-blue bg-gradient-to-r from-neutral-darkest/60 px-8 py-6 backdrop-blur"
                            >
                                <div className="flex items-center gap-5">
                                    <img
                                        className="h-10 w-10 [&_*]:filter-none"
                                        src={benefit.icon}
                                        alt="step icon"
                                    />
                                    <h3 className="whitespace-pre-line text-2xl/[1.15] lg:text-3xl/[1.15] [&_*]:filter-none">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <div className="max-w-[90%] text-neutral-200 2xl:text-md [&_*]:filter-none">
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
