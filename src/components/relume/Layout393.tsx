import React from 'react'

type Card = {
    tagline: string
    heading: React.ReactNode
    description: string
}

type Props = {
    tagline: string
    heading: React.ReactNode
    description?: string
    card: Card[]
}

export type Layout393Props = React.ComponentPropsWithoutRef<'div'> &
    Partial<Props>

export const Layout393 = (props: Layout393Props) => {
    const { tagline, heading, card } = {
        ...Layout393Defaults,
        ...props,
    } as Props
    return (
        <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-center text-center md:mb-18 lg:mb-20">
                    <div className="flex items-center gap-4">
                        <img src="/src/assets/svg/small-logo.png" alt="" />
                        <p className="font-semibold uppercase">{tagline}</p>
                    </div>
                    <h1 className="mb-5 mt-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h1>
                </div>
                <div className="grid auto-cols-fr gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {card[0] && <Card {...card[0]} />}
                    {card[1] && <Card {...card[1]} />}
                    <img
                        src="/src/assets/images/stats3.jpeg"
                        className="hidden h-full w-full rounded-2xl object-cover shadow-custom md:block"
                        alt=""
                    />
                    <img
                        src="/src/assets/images/stats2.jpeg"
                        className="h-full w-full rounded-2xl object-cover shadow-custom"
                        alt=""
                    />

                    {card[2] && <Card {...card[2]} />}
                    {card[3] && <Card {...card[3]} />}
                </div>
            </div>
        </div>
    )
}

function Card(Card: Card) {
    return (
        <div className="flex flex-col rounded-2xl border border-white/10 bg-neutral-darkest/50 shadow-custom backdrop-blur">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                    <p className="mb-16 font-semibold uppercase">
                        {Card.tagline}
                    </p>
                    <div className="">
                        <h2 className="mb-3 border-b border-white/10 pb-3 text-6xl/none font-bold normal-case">
                            {Card.heading}
                        </h2>
                        <p>{Card.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Layout393Defaults: Layout393Props = {
    tagline: 'Tagline',
    heading: 'Short heading goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    card: [
        {
            tagline: 'Tagline',
            heading: 'Medium length section heading goes here',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            tagline: 'Tagline',
            heading: 'Medium length section heading goes here',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
}
