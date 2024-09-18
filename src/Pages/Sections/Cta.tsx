import PrimaryButton from '../../components/custom/PrimaryButton'
import { MoveRight } from 'lucide-react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Cta() {
    const container = useRef<HTMLElement>(null)
    const sectionTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            // check if container exists
            if (!container.current) return

            // get section elements to be animated
            const sectionBg = container.current.querySelector('.section-bg')
            const sectionContainerBg =
                container.current.querySelector('.container-bg')
            const sectionTitle =
                container.current.querySelector('.section-title')
            const sectionCta = container.current.querySelector('.section-cta')
            const sectionBottomBar =
                container.current.querySelector('.bottom-bar')

            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionBg, {
                opacity: 0,
                scale: 0.8,
            })
            gsap.set(sectionContainerBg, {
                transformOrigin: 'bottom',
                opacity: 0,
                scaleY: 0,
            })
            gsap.set(sectionTitle, {
                opacity: 0,
                x: 20,
            })

            gsap.set(sectionCta, {
                opacity: 0,
                scale: 0.8,
                x: -20,
            })
            gsap.set(sectionBottomBar, {
                opacity: 0,
                scaleX: 0,
            })

            // create timeline for section animation
            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                },
                defaults: {
                    duration: 1.5,
                    ease: 'power1.inOut',
                },
            })

            // animate section elements
            sectionTl.current.to(sectionBg, {
                opacity: 1,
                scale: 1,
                duration: 3,
            })

            sectionTl.current.to(
                sectionBottomBar,
                {
                    opacity: 1,
                    scaleX: 1,
                    duration: 2,
                },
                '<+=0.5'
            )

            sectionTl.current.to(
                sectionContainerBg,
                {
                    opacity: 1,
                    scaleY: 1,
                    duration: 2,
                },
                '<'
            )

            sectionTl.current.to(
                sectionTitle,
                {
                    opacity: 1,
                    x: 0,
                },
                '<+=0.5'
            )

            sectionTl.current.to(
                sectionCta,
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                },
                '<+=0.5'
            )
        },
        { scope: container }
    )

    return (
        <section ref={container} className="relative px-[5%] py-16">
            <div className="section-bg absolute left-1/2 top-1/2 -z-50 mx-auto h-[120%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src="/src/assets/images/Background/2.jpeg"
                    className="mask-rect h-full w-full object-cover"
                />
            </div>
            <div className="shadow-custom container relative flex min-h-[50vh] flex-col justify-between p-10 md:p-14 lg:flex-row lg:p-20">
                <div className="bottom-bar absolute bottom-0 left-0 h-[2px] w-full bg-brand-blue"></div>
                <div className="container-bg absolute inset-0 -z-10 bg-gradient-to-tr from-neutral-darkest/60 backdrop-blur"></div>
                <div className="flex flex-col">
                    <h3 className="section-title text-5xl font-bold md:text-7xl lg:text-8xl">
                        fale com um de <br className="hidden md:inline-block" />{' '}
                        nossos{' '}
                        <span className="text-brand-blue">especialistas</span>{' '}
                        <br className="hidden md:inline-block" /> e{' '}
                        <span className="text-brand-blue">impulsione</span> já{' '}
                        <br className="hidden md:inline-block" /> o seu negócio
                    </h3>
                </div>
                <div className="mt-16 self-end lg:mt-0">
                    <PrimaryButton
                        className="section-cta"
                        animationDirection="horizontal"
                    >
                        <a
                            href="https://api.whatsapp.com/send?phone=5519993230833"
                            target="_blank"
                            className="flex items-center gap-4 font-ibm text-md font-bold uppercase"
                        >
                            <MoveRight />
                        </a>
                    </PrimaryButton>
                </div>
            </div>
        </section>
    )
}
