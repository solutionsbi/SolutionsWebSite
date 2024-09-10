import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

interface ServiceCardProps {
    title: string
    description: string
    url: string
    icon: string
    img: string
}

export default function ServiceCard({
    title,
    description,
    url,
    icon,
    img,
}: ServiceCardProps) {
    return (
        <div className="flex flex-col gap-2 xl:max-w-[420px] 3xl:max-w-[464px]">
            <Card className="flex select-none flex-col gap-10 lg:h-[450px] xl:h-[480px] 3xl:h-[500px]">
                <CardHeader className="flex flex-row items-center gap-6">
                    <img className="h-10 w-10" src={icon} alt="" />
                    <CardTitle className="whitespace-pre-line">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="3xl:text-md">{description}</p>
                </CardContent>
                <CardFooter className="mt-auto justify-self-end">
                    <Link
                        to={url}
                        className="flex w-full items-center justify-between"
                    >
                        <span className="font-semibold uppercase 3xl:text-xl">
                            Saiba mais
                        </span>
                        <img src="/src/assets/svg/right-arrow.svg" alt="" />
                    </Link>
                </CardFooter>
            </Card>
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
