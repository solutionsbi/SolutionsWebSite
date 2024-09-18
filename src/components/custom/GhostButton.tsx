import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export const GhostButton = ({ children }: { children: React.ReactNode }) => {
    const container = useRef<HTMLButtonElement>(null)

    const { contextSafe } = useGSAP({ scope: container })

    const handleMouseEvent = contextSafe((scaleX: string) => {
        const buttonBottomLine =
            container.current?.querySelector('.bottom-line')
        gsap.to(buttonBottomLine!, {
            scaleX: scaleX,
            ease: 'power4.inOut',
            duration: 0.3,
        })
    })

    const handleMouseEnter = () => handleMouseEvent('1')
    const handleMouseLeave = () => handleMouseEvent('0')

    return (
        <Button
            ref={container}
            variant="link"
            size="custom"
            onClick={() => console.log('clicked!')}
            className={'relative'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div className="bottom-line absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue"></div>
        </Button>
    )
}
