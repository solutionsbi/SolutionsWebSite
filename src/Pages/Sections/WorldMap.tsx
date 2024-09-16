import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function WorldMap() {
    const sectionRef = useRef<HTMLElement | null>(null)

    const { contextSafe } = useGSAP({ scope: sectionRef })

    return (
        <section ref={sectionRef} className="page-section relative">
            <div className="relative h-full w-full">
                <div className="section-bg -z-50 mx-auto h-screen w-full max-w-3xl">
                    <img
                        src="/src/assets/images/map2.png"
                        alt=""
                        className="mask-rect h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
