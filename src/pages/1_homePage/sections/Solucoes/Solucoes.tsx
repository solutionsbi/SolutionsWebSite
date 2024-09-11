import { Card } from './Card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

type Service = {
    icon: string
    title: string
    description: string
    url: string
    img: string
}

const services: Service[] = [
    {
        title: 'Egenharia\nde Dados',
        description:
            'Oferecemos soluções completas em engenharia de dados, desde a coleta e armazenamento até o processamento e análise de grandes volumes de dados, apoiando decisões estratégicas e promovendo a inovação contínua em sua empresa.',
        url: '/engenharia-de-dados',
        icon: '/src/assets/svg/services-cards-icons/engenharia-de-dados.svg',
        img: '/src/assets/images/solutions/engenharia-de-dados.jpeg',
    },
    {
        title: 'Business\nIntelligence',
        description:
            'Com nossas soluções de BI, transformamos dados em vantagem competitiva. Organizamos suas informações e geramos insights que antecipam tendências, otimizam operações e melhoram a tomada de decisões. O BI oferece uma visão clara do seu negócio, permitindo reações rápidas e exploração de novas oportunidades de crescimento.',
        url: '/business-intelligence',
        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
        img: '/src/assets/images/solutions/business-intelligence.jpeg',
    },
    {
        title: 'Sistemas\nPersonalizados',
        description:
            'Projetamos e desenvolvemos sistemas personalizados que atendem as necessidades específicas do seu negócio. Desde aplicativos web e móveis até plataformas complexas, nossos desenvolvedores transformam ideias em ferramentas eficientes e escaláveis.',
        url: '/sistemas-personalizados',
        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
        img: '/src/assets/images/solutions/sistemas-personalizados.jpeg',
    },
    {
        title: 'Inteligência\nArtificial',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'inteligencia-artificial',
        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
        img: '/src/assets/images/solutions/inteligencia-artificial.jpeg',
    },
    {
        title: 'Transformação\nDigital',
        description:
            'Ajudamos sua empresa a se adaptar e prosperar na era digital, modernizando processos e integrando tecnologias inovadoras. Nossa abordagem de transformação digital não só melhora a eficiência, mas também cria novas oportunidades de crescimento e inovação, alinhando sua empresa às demandas do mercado atual.',
        url: 'transformacao-digital',
        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
        img: '/src/assets/images/solutions/transformacao-digital.jpeg',
    },
    {
        title: 'Websites e\nE-commerce',
        description:
            'Desenvolvemos websites e plataformas de e-commerce que não apenas atraem visitantes, mas também convertem vendas. Nossas soluções são projetadas para oferecer uma experiência de usuário intuitiva e fluida, alinhada às melhores práticas de design e SEO, garantindo que sua presença online seja forte e eficaz.',
        url: 'websites-ecommerce',
        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
        img: '/src/assets/images/solutions/websites-ecommerce.jpeg',
    },
]

export default function Solucoes() {
    return (
        <section className="relative flex flex-col px-[5%] pb-16 md:pb-24 lg:pb-28">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[Autoplay({ delay: 8000 })]}
                className="mx-auto w-full max-w-xxl"
            >
                <CarouselContent className="">
                    {services.map((service: Service, index) => (
                        <CarouselItem
                            key={index}
                            className="lg:basis-1/2 2xl:basis-1/3"
                        >
                            <Card
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                url={service.url}
                                img={service.img}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
