import React from 'react'

type Props = {
    tagline: string
    heading: React.ReactNode
    description: string
}

export type Layout245Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Layout245 = (props: Layout245Props) => {
    const { tagline, heading, description } = {
        ...props,
    } as Props
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container flex flex-col items-start">
                <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
                    <div>
                        <div className="mb-3 flex items-center gap-4 md:mb-4">
                            <img src="/src/assets/svg/small-logo.png" alt="" />
                            <p className="font-semibold uppercase">{tagline}</p>
                        </div>
                        <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                            {heading}
                        </h2>
                    </div>
                    <p className="md:text-md">{description}</p>
                </div>
            </div>
        </section>
    )
}
