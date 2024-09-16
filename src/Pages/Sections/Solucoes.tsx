import Carrossel from '../../components/custom/CarrosselSoluções'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SolucoesProps = {
    title?: boolean
}

export default function Solucoes({ title = false }: SolucoesProps) {
    return (
        <section className="page-section overflow-hidden">
            <div className="container">
                <div className="flex flex-col gap-20">
                    {title && (
                        <div className="flex flex-col text-center">
                            <h2>
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
