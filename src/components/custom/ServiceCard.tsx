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
}

export default function ServiceCard({
    title,
    description,
    url,
    icon,
}: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <img src={icon} alt="" />
            </CardHeader>
            <CardContent>
                <p>C{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link to={url}>Saiba mais</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
