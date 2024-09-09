import React from 'react'
import { Button } from '../ui/button'
import type { ButtonProps } from '@relume_io/relume-ui'
import { Link } from 'react-router-dom'

type VideoProps = {
    src: string
    alt?: string
}

type Props = {
    heading: React.ReactNode
    description: string
    buttons: ButtonProps[]
    video: VideoProps
}

export type Header30Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Header30 = (props: Header30Props) => {
    const { heading, description, buttons, video } = {
        ...Header30Defaults,
        ...props,
    } as Props
    return (
        <section id="relume" className="relative px-[5%]">
            <div className="container relative z-10">
                <div className="flex h-[75vh] max-h-[60rem] items-center justify-center py-16 text-center md:py-24 lg:py-28">
                    <div className="w-full max-w-lg">
                        <h1 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="text-base text-text-alternative drop-shadow-custom md:text-md">
                            {description}
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    {...button}
                                    asChild
                                    className="drop-shadow-custom"
                                >
                                    <Link to={button.url || '/'}>
                                        {button.title}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Header30Defaults: Header30Props = {
    heading: 'Medium length hero heading goes here',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    buttons: [
        { title: 'Button' },
        { title: 'Button', variant: 'secondary-alt' },
    ],
    video: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Relume placeholder image',
    },
}
