import React from 'react'

type Props = {
    tagline: string
    heading: React.ReactNode
}

export type Layout245Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Layout245 = (props: Layout245Props) => {
    const { tagline, heading } = {
        ...props,
    } as Props
    return (
        <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container flex flex-col items-center text-center">
                <div className="mb-3 flex items-center gap-4 md:mb-4">
                    <img src="/src/assets/svg/small-logo.png" alt="" />
                    <p className="font-semibold uppercase drop-shadow-custom">
                        {tagline}
                    </p>
                </div>
                <h2 className="text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                    {heading}
                </h2>
            </div>
        </div>
    )
}
