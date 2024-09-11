import { Link } from 'react-router-dom'

interface Card {
    title: string
    description: string
    url: string
    icon: string
    img: string
}

export function Card({ title, description, url, icon, img }: Card) {
    return (
        <div className="flex flex-col gap-2">
            <div className="card-bg flex select-none flex-col gap-10 p-10 lg:h-[450px] xl:h-[400px] 2xl:h-[500px]">
                <div className="flex items-center gap-6">
                    <img className="h-10 w-10" src={icon} alt="" />
                    <h3 className="whitespace-pre-line text-2xl/none font-bold">
                        {title}
                    </h3>
                </div>
                <p className="3xl:text-md">{description}</p>

                <Link
                    to={url}
                    className="mt-auto flex w-full items-center justify-between"
                >
                    <span className="font-semibold uppercase 3xl:text-xl">
                        Saiba mais
                    </span>
                    <img src="/src/assets/svg/right-arrow.svg" alt="" />
                </Link>
            </div>
            <div className="before:bg- relative h-[300px] before:absolute before:inset-0 before:bg-black/10">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
        </div>
    )
}
