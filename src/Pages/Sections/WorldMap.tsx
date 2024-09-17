import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Map } from '@/components/custom/Map'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function WorldMap() {
    const sectionRef = useRef<HTMLElement | null>(null)
    const svgRef = useRef<SVGSVGElement | null>(null)

    const { contextSafe } = useGSAP({ scope: sectionRef })

    useGSAP(
        () => {
            if (sectionRef.current && svgRef.current) {
                gsap.fromTo(
                    svgRef.current,
                    {
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                            markers: true,
                        },
                    }
                )
            }
        },
        { scope: sectionRef }
    )

    return (
        <section ref={sectionRef} className="page-section relative">
            <div className="container grid place-content-center">
                <Map />
            </div>
        </section>
    )
}
