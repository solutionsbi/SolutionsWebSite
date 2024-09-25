import { useTranslation } from 'react-i18next'

import Carrossel from '../../components/custom/SolutionsCarousel'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SolucoesProps = {
    title?: boolean
}

export default function Solucoes({ title = false }: SolucoesProps) {
    const { t } = useTranslation()
    const container = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const sectionTitle =
                container.current?.querySelector('.section-title')

            if (sectionTitle) {
                gsap.set(sectionTitle, {
                    opacity: 0,
                    y: 20,
                })

                gsap.to(sectionTitle, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: sectionTitle,
                        start: 'top bottom',
                    },
                })
            }
        },
        { scope: container }
    )
    return (
        <section
            ref={container}
            className={`overflow-hidden px-[5%] ${title && 'py-24'}`}
        >
            <div className="container">
                <div className="flex flex-col gap-20">
                    {title && (
                        <div className="flex flex-col text-center">
                            <h2 className="section-title">
                                <span className="text-brand-blue">
                                    {t('pages.solutions.title.part1')}
                                </span>{' '}
                                <br />
                                {t('pages.solutions.title.part2')}
                            </h2>
                        </div>
                    )}
                    <Carrossel />
                </div>
            </div>
        </section>
    )
}
