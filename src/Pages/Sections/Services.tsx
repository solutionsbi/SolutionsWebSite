import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Carrossel from '../../components/ServiceCardsCarousel'
import { cn } from '@/lib/utils'

const servicesVariants = {
    // Add variants if needed, similar to heroVariants
}

export interface ServicesProps extends React.HTMLAttributes<HTMLElement> {
    // Add any specific props for Services
}

const Services = React.forwardRef<HTMLElement, ServicesProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn('relative overflow-hidden px-[5%]', className)}
                {...props}
            >
                <div className="container relative z-10">
                    <div className="flex flex-col gap-20">{children}</div>
                </div>
                <div className="custom-shape-divider-bottom-1727529304">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <filter
                                id="innerShadow"
                                x="-20%"
                                y="-20%"
                                width="140%"
                                height="140%"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="3"
                                    stdDeviation="5"
                                    floodOpacity="0.3"
                                />
                            </filter>
                        </defs>
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                            filter="url(#innerShadow)"
                        ></path>
                    </svg>
                </div>
            </section>
        )
    }
)
Services.displayName = 'Services'

const ServicesHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col text-center', className)}
        {...props}
    >
        <h2 className="section-title">{props.children}</h2>
    </div>
))
ServicesHeader.displayName = 'ServicesHeader'

const ServicesCarousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props}>
        <Carrossel />
    </div>
))
ServicesCarousel.displayName = 'ServicesCarousel'

export { Services, ServicesHeader, ServicesCarousel, servicesVariants }
