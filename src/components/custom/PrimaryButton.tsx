/**
 * PrimaryButton Component
 *
 * Description:
 * A customizable button component with animated hover effects using GSAP.
 *
 * What it does:
 * - Renders a button with a link inside
 * - Provides smooth hover animations for text and background
 * - Supports custom styling through className prop
 *
 * How it works:
 * 1. Uses React hooks (useRef, useGSAP) for DOM manipulation and animation
 * 2. Implements GSAP for creating smooth animations on hover
 * 3. Animates button border, text color, background, and text position
 * 4. Utilizes React Router's Link component for navigation
 *
 * Usage example:
 * ```jsx
 * <PrimaryButton href="/about" className="my-custom-class">
 *   Learn More
 * </PrimaryButton>
 * ```
 */

import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

interface PrimaryButtonProps {
    href: string
    children: React.ReactNode
    className?: string
    additionalText?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    href,
    children,
    className,
    additionalText,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    const { contextSafe } = useGSAP({ scope: buttonRef })

    const animateButton = (isEnter: boolean) => {
        if (!buttonRef.current) return

        const buttonText = buttonRef.current.children[0].children[0]
        const buttonText2 = buttonRef.current.children[0].children[1]
        const buttonBackground = buttonRef.current.children[1]

        tl.current = gsap.timeline({
            defaults: {
                duration: 0.25,
                ease: 'power1.inOut',
            },
        })

        tl.current
            ?.to(buttonRef.current, {
                border: isEnter ? '1px solid #2960F7' : '1px solid transparent',
                color: isEnter ? '#2960F7' : 'white',
            })
            .to(
                buttonBackground,
                {
                    scaleX: isEnter ? 1 : 0,
                    skewX: isEnter ? 0 : 12,
                },
                '<'
            )
            .to(
                buttonText,
                {
                    // opacity: isEnter ? 0 : 1,
                    y: isEnter ? '-100px' : 0,
                },
                '<'
            )
            .to(
                buttonText2,
                {
                    yPercent: isEnter ? -100 : 0,
                    opacity: isEnter ? 1 : 0,
                },
                '<'
            )
    }

    const handleMouseEnter = contextSafe(() => {
        animateButton(true)
    })

    const handleMouseLeave = contextSafe(() => {
        animateButton(false)
    })

    return (
        <Button
            ref={buttonRef}
            className={`${className} relative z-[30] overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={href} className="relative z-[20] flex overflow-hidden">
                <span>{children}</span>
                <span className="absolute left-1/2 -translate-x-1/2 translate-y-full">
                    {additionalText ? additionalText : children}
                </span>
            </Link>

            <div
                className={`absolute left-1/2 top-1/2 z-[10] h-full w-full -translate-x-1/2 -translate-y-1/2 skew-x-12 scale-x-0 bg-brand-white`}
            ></div>
        </Button>
    )
}

export default PrimaryButton
