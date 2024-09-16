import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateCounting } from '@/lib/animateCouting'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const partnersData = [
    {
        src: '/src/assets/images/Partner Logos/samsung.svg',
        alt: 'samsung',
    },
    {
        src: '/src/assets/images/Partner Logos/ambev.png',
        alt: 'ambev',
    },
    {
        src: '/src/assets/images/Partner Logos/abercrombie.svg',
        alt: 'abercrombie',
    },
    {
        src: '/src/assets/images/Partner Logos/abrasce.png',
        alt: 'abrasce',
    },
    {
        src: '/src/assets/images/Partner Logos/agropalma.svg',
        alt: 'agropalma',
    },
    {
        src: '/src/assets/images/Partner Logos/coplacana.png',
        alt: 'coplacana',
    },
    {
        src: '/src/assets/images/Partner Logos/galzerano.png',
        alt: 'galzerano',
    },
    {
        src: '/src/assets/images/Partner Logos/lifetime.png',
        alt: 'lifetime',
    },
    {
        src: '/src/assets/images/Partner Logos/medical.png',
        alt: 'medical',
    },
    {
        src: '/src/assets/images/Partner Logos/odontoclinic.png',
        alt: 'odontoclinic',
    },
    {
        src: '/src/assets/images/Partner Logos/sanavita.png',
        alt: 'sanavita',
    },
    {
        src: '/src/assets/images/Partner Logos/swiss.png',
        alt: 'swiss',
    },
]

const stats = [
    {
        number: '8',
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

    useGSAP(() => {
        // check if container exists
        if (!container.current) return

        // get elements that will be animated from the container
        const sectionBg = container.current.querySelector('.section-bg')
        const sectionTitle = container.current.querySelector('h2')
        const sectionLogos = gsap.utils.toArray(
            container.current.querySelectorAll('.partner-logo')
        )
        const sectionStats = gsap.utils.toArray(
            container.current.querySelectorAll('.stats-item')
        )
        const sectionStatsPlus = gsap.utils.toArray<HTMLElement>(
            container.current.querySelectorAll('.stats-item span:first-child')
        )
        const sectionStatsNumbers = gsap.utils.toArray<HTMLElement>(
            container.current.querySelectorAll('.stats-item span:nth-child(2)')
        )
        const sectionStatsTexts = gsap.utils.toArray(
            container.current.querySelectorAll('.stats-item span:nth-child(3)')
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
            onComplete: () => {
                gsap.to(sectionBg, {
                    scale: 0.8,
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'bottom 80%',
                        end: 'bottom top',
                        scrub: true,
                        markers: false,
                    },
                })
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
                    y: 0,
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
    })

    return (
        <section ref={container} className="page-section">
            <div className="container flex flex-col items-center">
                <div className="section-bg absolute left-1/2 top-[50%] -z-50 mx-auto h-[110%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                    <img
                        src="/src/assets/images/Background/22.jpeg"
                        className="mask-rect h-full w-full object-cover opacity-100"
                    />
                </div>

                <div className="container flex flex-col items-center text-center">
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
                            <span className="text-6xl text-brand-blue lg:text-10xl">
                                +
                            </span>
                            <span className="mr-2 text-6xl text-brand-blue lg:mr-6 lg:text-10xl">
                                {stats.number}
                            </span>{' '}
                            <span className="text-xl/[1.1] lg:text-3xl/[1.1]">
                                {stats.text}
                            </span>
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
