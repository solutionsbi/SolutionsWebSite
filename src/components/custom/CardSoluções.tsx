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
            <div className="relative flex select-none flex-col gap-10 overflow-hidden border-t-2 border-brand-blue bg-gradient-to-b from-neutral-darkest/60 p-10 before:absolute before:inset-0 before:-z-10 before:backdrop-blur lg:h-[450px] xl:h-[400px] 2xl:h-[500px]">
                <div className="flex items-center justify-between gap-6">
                    <h3 className="whitespace-pre-line text-3xl/none font-bold">
                        {title}
                    </h3>
                    <img className="h-12 w-12" src={icon} alt="" />
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
        </div>
    )
}
