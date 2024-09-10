import * as React from 'react'

import ServiceCard from './ServiceCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

type Service = {
    title: string
    description: string
    url: string
    icon: string
    img: string
}

const services: Service[] = [
    {
        title: 'Egenharia\nde Dados',
        description:
            'Oferecemos soluções completas em engenharia de dados, desde a coleta e armazenamento até o processamento e análise de grandes volumes de dados, apoiando decisões estratégicas e promovendo a inovação contínua em sua empresa.',
        url: '/engenharia-de-dados',
        icon: '/src/assets/svg/services-cards-icons/engenharia-de-dados.svg',
        img: '/src/assets/images/service-cards/engenharia-de-dados.jpeg',
    },
    {
        title: 'Business\nIntelligence',
        description:
            'Com nossas soluções de BI, transformamos dados em vantagem competitiva. Organizamos suas informações e geramos insights que antecipam tendências, otimizam operações e melhoram a tomada de decisões. O BI oferece uma visão clara do seu negócio, permitindo reações rápidas e exploração de novas oportunidades de crescimento.',
        url: '/business-intelligence',
        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
        img: '/src/assets/images/service-cards/business-intelligence.jpeg',
    },
    {
        title: 'Sistemas\nPersonalizados',
        description:
            'Projetamos e desenvolvemos sistemas personalizados que atendem as necessidades específicas do seu negócio. Desde aplicativos web e móveis até plataformas complexas, nossos desenvolvedores transformam ideias em ferramentas eficientes e escaláveis.',
        url: '/sistemas-personalizados',
        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
        img: '/src/assets/images/service-cards/sistemas-personalizados.jpeg',
    },
    {
        title: 'Inteligência\nArtificial',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'inteligencia-artificial',
        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
        img: '/src/assets/images/service-cards/inteligencia-artificial.jpeg',
    },
    {
        title: 'Transformação\nDigital',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'transformacao-digital',
        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
        img: '/src/assets/images/service-cards/transformacao-digital.jpeg',
    },
    {
        title: 'Websites e\nE-commerce',
        description:
            'Desenvolvemos websites e plataformas de e-commerce que não apenas atraem visitantes, mas também convertem vendas. Nossas soluções são projetadas para oferecer uma experiência de usuário intuitiva e fluida, alinhada às melhores práticas de design e SEO, garantindo que sua presença online seja forte e eficaz.',
        url: 'websites-ecommerce',
        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
        img: '/src/assets/images/service-cards/websites-ecommerce.jpeg',
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
        <Carousel
            setApi={setApi}
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[Autoplay({ delay: 8000 })]}
            className="mx-auto max-w-[90%] 3xl:max-w-[1440px]"
        >
            <CarouselContent className="">
                {services.map((service: Service, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-full lg:basis-1/2 xl:basis-1/3"
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            url={service.url}
                            icon={service.icon}
                            img={service.img}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
