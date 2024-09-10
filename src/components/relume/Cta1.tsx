import React from 'react'
import { Button } from '../ui/button'

type Props = {
    tagline: string
    heading: React.ReactNode
    button: {
        title: string
        url: string
    }
}

export type Cta1Props = React.ComponentPropsWithoutRef<'div'> & Partial<Props>

export const Cta1 = (props: Cta1Props) => {
    const { heading, button, tagline } = {
        ...Cta1Defaults,
        ...props,
    } as Props
    return (
        <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rounded-3xl border border-white/10 bg-neutral-darkest/0 bg-gradient-to-r from-neutral-darkest p-12 shadow-custom">
                    <div className="mb-5 flex items-center gap-4">
                        <img src="/src/assets/svg/small-logo.png" alt="" />
                        <p className="font-semibold uppercase">{tagline}</p>
                    </div>
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                    <div className="mt-6 flex gap-x-4 md:mt-8">
                        <Button asChild variant="blue" {...button}>
                            <a href={button.url}>{button.title}</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Cta1Defaults: Cta1Props = {
    heading: <>medium length heading</>,
    button: { title: 'Button', url: '#' },
    tagline: 'short tagline',
}
