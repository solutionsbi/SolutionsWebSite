import Carrossel from '../../components/custom/CarrosselSoluções'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SolucoesProps = {
    title?: boolean
}

export default function Solucoes({ title = false }: SolucoesProps) {
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
                                    explore todas
                                </span>{' '}
                                <br />
                                as nossas solucões
                            </h2>
                        </div>
                    )}
                    <Carrossel />
                </div>
            </div>
        </section>
    )
}
