import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi,
} from '@/components/ui/carousel'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'

type Service = {
    title: string
    description: string
    url: string
    icon: string
    img?: string
}

type Card = {
    title: string
    description: string
    url: string
    icon: string
}

const services: Service[] = [
    {
        title: 'Engenharia\nde Dados',
        description:
            'Oferecemos soluções completas em engenharia de dados, desde a coleta até a análise de grandes volumes, apoiando decisões estratégicas e promovendo inovação contínua na sua empresa',
        url: '/engenharia-de-dados',
        icon: '/src/assets/svg/tech-icons/carbon_data-vis-1.svg',
    },
    {
        title: 'Business\nIntelligence',
        description:
            'Transformamos dados em insights estratégicos, otimizando operações e decisões. O BI oferece uma visão clara do seu negócio, permitindo rápidas reações e novas oportunidades de crescimento.',
        url: '/business-intelligence',
        icon: '/src/assets/svg/tech-icons/ep_data-line.svg',
    },
    {
        title: 'Sistemas\nPersonalizados',
        description:
            'Desenvolvemos sistemas personalizados para atender necessidades específicas. Desde aplicativos até plataformas complexas, transformamos ideias em ferramentas eficientes e escaláveis.',
        url: '/sistemas-personalizados',
        icon: '/src/assets/svg/tech-icons/token_dweb.svg',
    },
    {
        title: 'Inteligência\nArtificial',
        description:
            'Integrando IA, modernizamos processos e criamos novas oportunidades de crescimento, alinhando sua empresa às demandas do mercado digital e promovendo inovação contínua.',
        url: 'inteligencia-artificial',
        icon: '/src/assets/svg/tech-icons/fluent_brain-circuit-20-regular.svg',
    },
    {
        title: 'Transformação\nDigital',
        description:
            'Ajudamos sua empresa a se adaptar ao digital, modernizando processos e integrando tecnologias. Nossa abordagem cria novas oportunidades de crescimento e inovação alinhadas ao mercado.',
        url: 'transformacao-digital',
        icon: '/src/assets/svg/tech-icons/simple-icons_circuitverse.svg',
    },
    {
        title: 'Websites e\nE-commerce',
        description:
            'Desenvolvemos websites e e-commerce que atraem e convertem visitantes. Nossas soluções oferecem uma experiência de usuário intuitiva, alinhada às melhores práticas de design e SEO.',
        url: 'websites-ecommerce',
        icon: '/src/assets/svg/tech-icons/material-symbols_ads-click-rounded.svg',
    },
]

export function Card({ title, description, url, icon }: Card) {
    return (
        <div className="flex flex-col gap-2">
            <div className="relative flex h-[294px] select-none flex-col overflow-hidden border-t-2 border-brand-blue bg-gradient-to-b from-neutral-darkest/60 p-6 before:absolute before:inset-0 before:-z-10 before:backdrop-blur lg:h-[320px] lg:p-8 xl:h-[350px]">
                <div className="flex items-center justify-between">
                    <h3 className="whitespace-pre-line text-2xl/[1.1] font-bold">
                        {title}
                    </h3>
                    <img className="h-12 w-12" src={icon} alt="" />
                </div>
                <p className="mt-8 text-sm text-neutral-200 lg:text-base">
                    {description}
                </p>

                <Link
                    to={url}
                    className="mt-10 flex w-full items-center justify-between"
                >
                    <span className="font-semibold uppercase lg:text-md">
                        Saiba mais
                    </span>
                    <MoveRight size={24} />
                </Link>
            </div>
        </div>
    )
}

export default function Carrossel() {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[Autoplay({ delay: 8000 })]}
            className="max-w-xxl mx-auto w-full"
        >
            <CarouselContent className="">
                {services.map((service: Service, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 2xl:basis-1/3"
                    >
                        <Card
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            url={service.url}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mx-auto mt-16 flex w-max items-center gap-4">
                <CarouselPrevious className="" />
                <CarouselNext className="" />
            </div>
        </Carousel>
    )
}
