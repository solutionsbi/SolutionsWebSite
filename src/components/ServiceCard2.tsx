import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardIcon,
} from '@/components/ui/card'
import { LearnMoreButton } from '@/components/CustomButtons'
import { useTranslation } from 'react-i18next'
import { BrandLogoNoText } from '@/components/icons/brandLogos'

export function ServiceCard2({
    icon,
    title,
    description,
}: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
}) {
    const { t } = useTranslation()

    return (
        <Card className="relative z-10 flex h-full flex-col overflow-hidden border-slate-800 bg-gradient-to-b from-blue-700 to-blue-950 p-2 text-white shadow-md">
            <CardHeader className="z-20 justify-between gap-4">
                <CardTitle className="whitespace-pre-line font-bold leading-tight drop-shadow-md">
                    {title}
                </CardTitle>
                <CardIcon icon={icon} className="h-12 w-auto" />
            </CardHeader>
            <CardContent className="z-20">
                <p className="text-slate-200 drop-shadow-md">{description}</p>
            </CardContent>
            <CardFooter className="z-20 mt-auto">
                <LearnMoreButton
                    to="/services"
                    className="ml-auto h-max w-full justify-between border-none p-0 text-md"
                >
                    {t('buttons.saiba-mais')}
                </LearnMoreButton>
            </CardFooter>
            <BrandLogoNoText className="-left-10 -top-10 z-10 w-[110%] fill-blue-300/10 drop-shadow-[5px_5px_10px_rgba(0,0,0,1)]" />
        </Card>
    )
}
