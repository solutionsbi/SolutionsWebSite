import PrimaryButton from '../../components/custom/PrimaryButton'
import { useTranslation, Trans } from 'react-i18next'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ctaImage from '@/assets/images/Background/2.jpeg'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Cta() {
    const { t } = useTranslation()
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

            // background animation
            gsap.set(sectionBg, {
                autoAlpha: 1,
                scale: 0.8,
            })
            gsap.to(sectionBg, {
                autoAlpha: 1,
                scale: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: sectionBg,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                    markers: false,
                },
            })

            // create timeline for section animation
            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    markers: false,
                },
                defaults: {
                    duration: 1,
                    ease: 'power1.out',
                },
            })

            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionContainerBg, {
                transformOrigin: 'bottom',
                autoAlpha: 0,
                scaleY: 0,
            })
            gsap.set(sectionTitle, {
                autoAlpha: 0,
                x: 20,
            })

            gsap.set(sectionCta, {
                autoAlpha: 0,
                scale: 0.8,
                x: -20,
            })
            gsap.set(sectionBottomBar, {
                autoAlpha: 0,
                scaleX: 0,
            })

            // animate section elements
            sectionTl.current.to(
                sectionBottomBar,
                {
                    autoAlpha: 1,
                    scaleX: 1,
                    duration: 1,
                },
                '<+=0.5'
            )

            sectionTl.current.to(
                sectionContainerBg,
                {
                    autoAlpha: 1,
                    scaleY: 1,
                },
                '<+=0.5'
            )

            sectionTl.current.to(
                sectionTitle,
                {
                    autoAlpha: 1,
                    x: 0,
                },
                '<+=0.5'
            )

            sectionTl.current.to(
                sectionCta,
                {
                    autoAlpha: 1,
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
                    src={ctaImage}
                    className="mask-rect h-full w-full object-cover"
                />
            </div>
            <div className="shadow-custom container relative flex min-h-[50vh] flex-col justify-between p-10 md:p-14 lg:flex-row lg:p-20">
                <div className="bottom-bar absolute bottom-0 left-0 h-[2px] w-full bg-brand-blue"></div>
                <div className="container-bg absolute inset-0 -z-10 bg-gradient-to-tr from-neutral-darkest/60 backdrop-blur"></div>
                <div className="flex flex-col">
                    <h3 className="section-title text-5xl font-bold md:text-7xl lg:text-8xl">
                        <Trans
                            i18nKey="pages.home.sections.cta.title"
                            components={{
                                span: <span className="text-brand-blue" />,
                                br: <br />,
                            }}
                        />
                    </h3>
                </div>
                <div className="mt-16 self-end lg:mt-0">
                    <PrimaryButton
                        className="section-cta"
                        text={t('buttons.agende-uma-consultoria')}
                        additionalText={t('buttons.fale-conosco')}
                        href="https://api.whatsapp.com/send?phone=5519983085819&text=Olá!%20estou%20interessado%20em%20saber%20mais%20sobre%20as%20suas%20solu%C3%A7%C3%B5es%20para%20neg%C3%B3cios."
                        linkType="external"
                    />
                </div>
            </div>
        </section>
    )
}
