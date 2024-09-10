import React from 'react'

type ImageProps = {
    src: string
    alt?: string
}

type FeatureSection = {
    tagline: string
    heading: React.ReactNode
    description: string
}

type Card = {
    tagline: string
    heading: React.ReactNode
    description: string
    image: ImageProps
}

type Props = {
    tagline: string
    heading: React.ReactNode
    description?: string
    cards: Card[]
    featureSections: FeatureSection[]
}

export type Layout393Props = React.ComponentPropsWithoutRef<'div'> &
    Partial<Props>

export const Layout393 = (props: Layout393Props) => {
    const { tagline, heading, description, cards, featureSections } = {
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
                <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {featureSections.map((feature, index) => (
                        <FeatureSection key={index} {...feature} />
                    ))}
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Card = (card: Card) => {
    return (
        <div className="flex auto-cols-fr flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-darkest/50 shadow-custom backdrop-blur last-of-type:row-span-1 last-of-type:grid sm:col-span-2 sm:grid-cols-2 sm:last-of-type:row-start-2 md:last-of-type:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:last-of-type:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
                <img
                    src={card.image.src}
                    alt={card.image.alt}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                <div className="flex h-full flex-col justify-between">
                    <p className="mb-2 font-semibold uppercase">
                        {card.tagline}
                    </p>
                    <div className="">
                        <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            {card.heading}
                        </h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FeatureSection(featureSection: FeatureSection) {
    return (
        <div className="flex flex-col rounded-2xl border border-white/10 bg-neutral-darkest/50 shadow-custom backdrop-blur">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                    <div className="rb-5 mb-5 md:mb-6">
                        <p className="font-semibold uppercase">
                            {featureSection.tagline}
                        </p>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        {featureSection.heading}
                    </h2>
                    <p>{featureSection.description}</p>
                </div>
            </div>
        </div>
    )
}

export const Layout393Defaults: Layout393Props = {
    tagline: 'Tagline',
    heading: 'Short heading goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cards: [
        {
            tagline: 'Tagline',
            heading: 'Medium length section heading goes here',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: {
                src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
                alt: 'Relume placeholder image 1',
            },
        },
        {
            tagline: 'Tagline',
            heading: 'Medium length section heading goes here',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: {
                src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
                alt: 'Relume placeholder image 2',
            },
        },
    ],
    featureSections: [
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
