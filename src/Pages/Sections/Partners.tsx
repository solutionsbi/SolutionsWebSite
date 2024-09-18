import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateCounting } from '@/lib/animateCouting'
import sectionBg from '@assets/images/Background/firefly/10.jpg'
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

const partnersData = [
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

const stats = [
    {
        number: '9',
        text: 'países \n atendidos',
    },
    {
        number: '80',
        text: 'clientes \nsatisfeitos',
    },
    {
        number: '150',
        text: 'projetos \nconcluídos',
    },
]

export default function Partners() {
    const container = useRef<HTMLElement>(null)
    const enterTl = useRef<gsap.core.Timeline | null>(null)

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
            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionBg, {
                opacity: 0,
                scale: 0.8,
            })
            gsap.set(sectionTitle, {
                opacity: 0,
                x: 50,
            })
            gsap.set(sectionLogos, {
                opacity: 0,
                y: 50,
            })
            gsap.set(sectionStatsPlus, {
                opacity: 0,
                scale: 0.8,
            })
            gsap.set(sectionStatsNumbers, {
                opacity: 0,
                y: 50,
            })
            gsap.set(sectionStatsTexts, {
                opacity: 0,
                x: 50,
            })

            // create a scrolltriggered timeline
            enterTl.current = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: 'power1.out',
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    markers: false,
                },
            })

            // add animations to the timeline
            enterTl.current
                .to(sectionBg, {
                    opacity: 1,
                    scale: 1,
                    duration: 5,
                })
                .to(
                    sectionTitle,
                    {
                        opacity: 1,
                        x: 0,
                    },
                    '<+=1'
                )
                .to(
                    sectionLogos,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                    },
                    '<+=0.2'
                )
                .to(
                    sectionStatsPlus,
                    {
                        opacity: 1,
                        scale: 1,
                        stagger: 0.1,
                    },
                    '<+=0.5'
                )
                .to(
                    sectionStatsNumbers,
                    {
                        opacity: 1,
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
                        opacity: 1,
                        x: 0,
                        stagger: 0.1,
                    },
                    '<+=0.2'
                )
        },
        { scope: container }
    )

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
                        <span className="text-brand-blue">empresas</span> que{' '}
                        <br className="md:hidden" />
                        confiam <br className="hidden md:inline-block" /> em
                        nossas soluções
                    </h2>
                </div>

                <div className="relative mx-auto grid w-max grid-cols-2 items-center justify-items-center gap-2 py-16 md:grid-cols-3 lg:grid-cols-4 lg:py-20 xl:grid-cols-5">
                    {partnersData.map((partner, index) => (
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

                <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-16">
                    {stats.map((stats, index) => (
                        <h3
                            key={index}
                            className="stats-item flex flex-col items-center whitespace-pre-line text-center font-bold drop-shadow-custom lg:flex-row lg:text-start"
                        >
                            <span className="flex items-center gap-2">
                                <span className="plus text-6xl text-brand-blue lg:text-10xl">
                                    +
                                </span>
                                <span className="stats-number mr-2 text-6xl text-brand-blue lg:mr-6 lg:text-10xl">
                                    {stats.number}
                                </span>{' '}
                            </span>
                            <span className="stats-text text-xl/[1.1] lg:text-3xl/[1.1]">
                                {stats.text}
                            </span>
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
