import React from 'react'
import { Button } from '../ui/button'
import type { ButtonProps } from '@relume_io/relume-ui'
import { Link } from 'react-router-dom'

type Props = {
    heading: React.ReactNode
    description: string
    buttons: ButtonProps[]
}

export type Header30Props = React.ComponentPropsWithoutRef<'div'> &
    Partial<Props>

export const Header30 = (props: Header30Props) => {
    const { heading, description, buttons } = {
        ...props,
    } as Props
    return (
        <div id="relume" className="relative px-[5%]">
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
        </div>
    )
}
