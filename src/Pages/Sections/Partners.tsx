import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { animateCounting } from '@/lib/animateCouting'
// import sectionBg from '@assets/images/Background/firefly/10.jpg'
import sectionBg from '@assets/webp-imgs/4.webp'
import samsumgLogo from '@assets/images/Partner Logos/samsung.svg'
import ambevLogo from '@assets/images/Partner Logos/ambev.png'
import abercrombieLogo from '@assets/images/Partner Logos/abercrombie.svg'
import abrasceLogo from '@assets/images/Partner Logos/abrasce.png'
import agropalmaLogo from '@assets/images/Partner Logos/agropalma.svg'
import coplacanaLogo from '@assets/images/Partner Logos/coplacana.png'
import galzeranoLogo from '@assets/images/Partner Logos/galzerano.png'
import lifetimeLogo from '@assets/images/Partner Logos/lifetime.png'
import medicalLogo from '@assets/images/Partner Logos/medical.png'
import odontoclinicLogo from '@assets/images/Partner Logos/odontoclinic.png'
import sanavitaLogo from '@assets/images/Partner Logos/sanavita.png'
import swissLogo from '@assets/images/Partner Logos/swiss.png'
import datasystemLogo from '@assets/images/Partner Logos/datasystem.png'
import modazineLogo from '@assets/images/Partner Logos/modazine.png'
import vrsoftwareLogo from '@assets/images/Partner Logos/vrsoftware.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const partnersLogos = [
    {
        src: samsumgLogo,
        alt: 'samsung',
    },
    {
        src: ambevLogo,
        alt: 'ambev',
    },
    {
        src: abercrombieLogo,
        alt: 'abercrombie',
    },
    {
        src: abrasceLogo,
        alt: 'abrasce',
    },
    {
        src: agropalmaLogo,
        alt: 'agropalma',
    },
    {
        src: coplacanaLogo,
        alt: 'coplacana',
    },
    {
        src: galzeranoLogo,
        alt: 'galzerano',
    },
    {
        src: lifetimeLogo,
        alt: 'lifetime',
    },
    {
        src: medicalLogo,
        alt: 'medical',
    },
    {
        src: odontoclinicLogo,
        alt: 'odontoclinic',
    },
    {
        src: sanavitaLogo,
        alt: 'sanavita',
    },
    {
        src: swissLogo,
        alt: 'swiss',
    },
    {
        src: datasystemLogo,
        alt: 'datasystem',
    },
    {
        src: modazineLogo,
        alt: 'modazine',
    },
    {
        src: vrsoftwareLogo,
        alt: 'vrsoftware',
    },
]

export default function Partners() {
    const container = useRef<HTMLElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    const { t } = useTranslation()

    useGSAP(
        () => {
            // check if container exists
            if (!container.current) return

            // get elements that will be animated from the container
            const sectionBg = container.current.querySelector('.section-bg')
            const sectionTitle = container.current.querySelector('h2')
            const sectionLogos = gsap.utils.toArray(
                container.current.querySelectorAll('.partner-logo')
            )
            const sectionStatsPlus = gsap.utils.toArray<HTMLElement>(
                container.current.querySelectorAll('.plus')
            )
            const sectionStatsNumbers = gsap.utils.toArray<HTMLElement>(
                container.current.querySelectorAll('.stats-number')
            )
            const sectionStatsTexts = gsap.utils.toArray(
                container.current.querySelectorAll('.stats-text')
            )

            // background animation
            gsap.set(sectionBg, {
                autoAlpha: 0,
                scale: 0.8,
            })
            gsap.to(sectionBg, {
                autoAlpha: 1,
                scale: 1,
                duration: 2,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: sectionBg,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    scrub: 1,
                },
            })

            // title animation
            gsap.set(sectionTitle, {
                autoAlpha: 0,
                y: -100,
            })
            gsap.to(sectionTitle, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: sectionTitle,
                    start: 'top 80%',
                    markers: false,
                },
            })

            // logos animation
            gsap.set(sectionLogos, {
                autoAlpha: 0,
                y: 50,
            })
            gsap.to(sectionLogos, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.logos-container',
                    start: 'top 80%',
                    markers: false,
                },
            })
            // stats animation
            gsap.set(sectionStatsPlus, {
                autoAlpha: 0,
                scale: 0.8,
            })
            gsap.set(sectionStatsNumbers, {
                autoAlpha: 0,
                y: 50,
            })
            gsap.set(sectionStatsTexts, {
                autoAlpha: 0,
                x: 50,
            })
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.stats-container',
                        start: 'top bottom',
                        markers: false,
                    },
                    defaults: {
                        duration: 0.8,
                        ease: 'power4.out',
                    },
                })
                .to(
                    sectionStatsPlus,
                    {
                        autoAlpha: 1,
                        scale: 1,
                        stagger: 0.1,
                    },
                    '<+=0.2'
                )
                .to(
                    sectionStatsNumbers,
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.1,
                        onStart: () => {
                            sectionStatsNumbers.forEach((element) => {
                                animateCounting(element as HTMLElement)
                            })
                        },
                    },
                    '<+=0.2'
                )
                .to(
                    sectionStatsTexts,
                    {
                        autoAlpha: 1,
                        x: 0,
                        stagger: 0.1,
                    },
                    '<+=0.2'
                )
        },
        { scope: container }
    )

    const partnersData = t('pages.home.sections.partners', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <section ref={container} className="page-section">
            <div className="section-bg absolute left-1/2 top-1/2 -z-50 mx-auto h-full w-full translate-x-[-50%] translate-y-[-50%]">
                <img
                    src={sectionBg}
                    className="mask-rect h-full w-full object-cover opacity-100"
                />
            </div>

            <div className="container flex h-full flex-col items-center justify-center">
                <div className="container flex flex-col items-center justify-center text-center">
                    <h2 className="">
                        <span className="text-brand-blue">
                            {partnersData.title.part1}
                        </span>{' '}
                        {partnersData.title.part2} <br />
                        {partnersData.title.part3}
                    </h2>
                </div>

                <div className="logos-container relative mx-auto grid w-max grid-cols-2 items-center justify-items-center gap-2 py-16 md:grid-cols-3 lg:grid-cols-4 lg:py-20 xl:grid-cols-5">
                    {partnersLogos.map((partner, index) => (
                        <div
                            key={index}
                            className="partner-logo shadow-custom relative grid h-[120px] w-[160px] place-content-center overflow-hidden rounded-[8px] border border-white/10 bg-gradient-to-br from-neutral-darkest/90 px-6 backdrop-blur md:w-[150px] lg:h-[150px] xl:w-[200px]"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="stats-container relative flex flex-wrap items-center justify-center gap-6 md:gap-16">
                    {partnersData.stats.map((stats: any, index: number) => (
                        <h3
                            key={index}
                            className="stats-item flex flex-col items-center whitespace-pre-line text-center font-bold drop-shadow-custom lg:flex-row lg:text-start"
                        >
                            <span className="flex items-center gap-2">
                                <span className="plus text-6xl text-brand-blue lg:text-10xl">
                                    +
                                </span>
                                <span className="stats-number mr-2 text-6xl text-brand-blue lg:mr-6 lg:text-10xl">
                                    {stats.value}
                                </span>{' '}
                            </span>
                            <span className="stats-text text-xl/[1.1] lg:text-3xl/[1.1]">
                                {stats.text.part1}
                                <br />
                                {stats.text.part2}
                            </span>
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
