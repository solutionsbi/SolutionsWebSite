// import React, { useRef } from 'react'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(useGSAP, ScrollTrigger)

//     const container = useRef<HTMLElement>(null)
//     const enterTl = useRef<gsap.core.Timeline | null>(null)
//     const scrubTl = useRef<gsap.core.Timeline | null>(null)

//     // animations
//     // useGSAP(
//     //     () => {
//     //         if (!container.current) return

//     //         const sectionBg = container.current.querySelector('.section-bg')
//     //         const sectionTitle =
//     //             container.current.querySelector('.section-title')
//     //         const sectionDescription = container.current.querySelector(
//     //             '.section-description'
//     //         )
//     //         const sectionCta1 =
//     //             container.current.querySelector('.section-cta-1')
//     //         const sectionCta2 =
//     //             container.current.querySelector('.section-cta-2')

//     //         enterTl.current = gsap.timeline({
//     //             defaults: {
//     //                 duration: 1,
//     //                 ease: 'power4.out',
//     //             },
//     //             scrollTrigger: {
//     //                 trigger: container.current,
//     //                 start: 'top bottom',
//     //                 end: 'top center',
//     //             },
//     //         })

//     //         gsap.set(sectionBg, {
//     //             autoAlpha: 0.8,
//     //             scale: 0.8,
//     //         })
//     //         gsap.set(sectionTitle, {
//     //             x: -20,
//     //             autoAlpha: 0,
//     //         })
//     //         gsap.set(sectionDescription, {
//     //             y: 30,
//     //             autoAlpha: 0,
//     //         })
//     //         if (cta) {
//     //             gsap.set(sectionCta1, {
//     //                 x: -20,
//     //                 autoAlpha: 0,
//     //             })
//     //         }

//     //         enterTl.current
//     //             .to(
//     //                 sectionBg,
//     //                 {
//     //                     scale: 1,
//     //                     autoAlpha: 1,
//     //                     duration: 3,
//     //                 },
//     //                 '<'
//     //             )
//     //             .to(
//     //                 sectionTitle,
//     //                 {
//     //                     autoAlpha: 1,
//     //                     x: 0,
//     //                 },
//     //                 '<+=0.4'
//     //             )
//     //             .to(
//     //                 sectionDescription,
//     //                 {
//     //                     autoAlpha: 1,
//     //                     y: 0,
//     //                 },
//     //                 '<+=0.4'
//     //             )
//     //         if (cta) {
//     //             enterTl.current?.to(
//     //                 sectionCta1,
//     //                 {
//     //                     autoAlpha: 1,
//     //                     x: 0,
//     //                 },
//     //                 '<+=0.4'
//     //             )
//     //         }
//     //     },
//     //     { scope: container }
//     // )

import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const heroVariants = cva('relative h-[78vh] px-[5%]', {
    variants: {
        layout: {
            default: 'items-center text-center',
            start: 'items-start',
            end: 'items-end',
        },
        size: {
            default: 'h-[78vh]',
            small: 'h-[50vh]',
            large: 'h-[100vh]',
        },
    },
    defaultVariants: {
        layout: 'default',
        size: 'default',
    },
})

export interface HeroProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof heroVariants> {
    backgroundImage?: string
    backgroundVideo?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
    (
        {
            className,
            layout,
            size,
            backgroundImage,
            backgroundVideo,
            children,
            ...props
        },
        ref
    ) => {
        const videoRef = useRef<HTMLVideoElement>(null)
        const [isVideoLoaded, setIsVideoLoaded] = useState(false)

        useEffect(() => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
                setIsVideoLoaded(true)
            }
        }, [])

        return (
            <section
                ref={ref}
                className={cn(heroVariants({ layout, size, className }))}
                {...props}
            >
                {backgroundImage && (
                    <div className="section-bg absolute left-0 top-[-12vh] -z-50 h-[100vh] w-full">
                        <img
                            src={backgroundImage}
                            className="mask-rect h-full w-full object-cover"
                            alt="Hero background"
                        />
                    </div>
                )}
                {backgroundVideo && (
                    <div className="section-bg absolute left-0 top-[-12vh] -z-50 h-[100vh] w-full">
                        <video
                            src={backgroundVideo}
                            className="mask-linear-bottom h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            ref={videoRef}
                        />
                    </div>
                )}
                <div className="container relative grid h-full items-center">
                    <div
                        className={`flex flex-col ${layout === 'start' ? 'items-start' : layout === 'end' ? 'items-end' : 'items-center text-center'}`}
                    >
                        {children}
                    </div>
                </div>
            </section>
        )
    }
)
Hero.displayName = 'Hero'

const HeroTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn('section-title mb-4 whitespace-pre-line', className)}
        {...props}
    />
))
HeroTitle.displayName = 'HeroTitle'

const HeroDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            'section-description mb-6 max-w-[650px] text-sm drop-shadow-custom md:text-base xl:text-md',
            className
        )}
        {...props}
    />
))
HeroDescription.displayName = 'HeroDescription'

const HeroButtons = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-wrap items-center gap-4', className)}
        {...props}
    />
))
HeroButtons.displayName = 'HeroButtons'

export { Hero, HeroTitle, HeroDescription, HeroButtons, heroVariants }
