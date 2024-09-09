import * as React from 'react'

import ServiceCard from './ServiceCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'

type Service = {
    title: string
    description: string
    url: string
    icon: string
}

const services: Service[] = [
    {
        title: 'Egenharia de Dados',
        description:
            'Oferecemos soluções completas em engenharia de dados, desde a coleta e armazenamento até o processamento e análise de grandes volumes de dados, apoiando decisões estratégicas e promovendo a inovação contínua em sua empresa.',
        url: '/engenharia-de-dados',
        icon: '',
    },
    {
        title: 'Business Intelligence',
        description:
            'Com nossas soluções de BI, transformamos dados em vantagem competitiva. Organizamos suas informações e geramos insights que antecipam tendências, otimizam operações e melhoram a tomada de decisões. O BI oferece uma visão clara do seu negócio, permitindo reações rápidas e exploração de novas oportunidades de crescimento.',
        url: '/business-intelligence',
        icon: '',
    },
    {
        title: 'Sistemas Personalizados',
        description:
            'Projetamos e desenvolvemos sistemas personalizados que atendem as necessidades específicas do seu negócio. Desde aplicativos web e móveis até plataformas complexas, nossos desenvolvedores transformam ideias em ferramentas eficientes e escaláveis.',
        url: '/sistemas-personalizados',
        icon: '',
    },
    {
        title: 'Inteligência Artificial',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'inteligencia-artificial',
        icon: '',
    },
    {
        title: 'Transformação Digital',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'transformacao-digital',
        icon: '',
    },
    {
        title: 'Websites e E-commerce',
        description:
            'Desenvolvemos websites e plataformas de e-commerce que não apenas atraem visitantes, mas também convertem vendas. Nossas soluções são projetadas para oferecer uma experiência de usuário intuitiva e fluida, alinhada às melhores práticas de design e SEO, garantindo que sua presença online seja forte e eficaz.',
        url: 'websites-ecommerce',
        icon: '',
    },
]

export function ServicesCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="w-full">
            <Carousel setApi={setApi} className="w-[90%]">
                <CarouselContent className="">
                    {services.map((service: Service, index) => (
                        <CarouselItem key={index} className="">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                url={service.url}
                                icon={service.url}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}
