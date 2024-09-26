import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

interface GhostButtonProps {
    children: React.ReactNode
    isActive?: boolean
    className?: string
}

export const GhostButton = ({
    children,
    isActive = false,
    className = '',
}: GhostButtonProps) => {
    const container = useRef<HTMLDivElement>(null)

    const { contextSafe } = useGSAP({ scope: container })

    const handleMouseEvent = contextSafe((scaleX: string) => {
        if (!isActive) {
            const buttonBottomLine =
                container.current?.querySelector('.bottom-line')
            gsap.to(buttonBottomLine!, {
                scaleX: scaleX,
                ease: 'power4.inOut',
                duration: 0.3,
            })
        }
    })

    const handleMouseEnter = () => handleMouseEvent('1')
    const handleMouseLeave = () => handleMouseEvent('0')

    return (
        <div ref={container} className="relative">
            <Button
                asChild
                variant="link"
                size="custom"
                className={`relative ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </Button>
            <div
                className={`bottom-line absolute bottom-0 left-0 h-0.5 w-full origin-left bg-brand-blue ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
            ></div>
        </div>
    )
}
