import React from 'react'

type ImageProps = {
    url?: string
    src: string
    alt?: string
}

type Props = {
    images: ImageProps[]
}

export type Gallery6Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Gallery6 = (props: Gallery6Props) => {
    const { images } = {
        ...props,
    } as Props
    return (
        <div id="relume" className="px-[5%]">
            <div className="container">
                <div className="mx-auto grid w-max grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {images.map((image, index) => (
                        <a
                            key={index}
                            href={image.url}
                            className="grid h-[200px] w-[200px] place-content-center rounded-3xl border border-white/10 bg-black/50 px-6 shadow-custom backdrop-blur"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full object-cover"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
