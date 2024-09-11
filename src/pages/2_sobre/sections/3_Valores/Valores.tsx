import { Divide } from 'lucide-react'

type CardProps = {
    icon: string
    title: string
    description: string
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="card-bg flex flex-col p-10">
            <div className="flex items-center gap-6">
                <img src={icon} alt="" className="h-10 w-10" />
                <h4
                    className="text-2xl/tight font-bold"
                    // dangerouslySetInnerHTML={{ __html: title }}
                >
                    {title}
                </h4>
            </div>
            <p className="mt-5">{description}</p>
        </div>
    )
}

const cards = [
    {
        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
        title: 'Inovação Constante',
        description:
            'Estamos sempre buscando novas tecnologias e ideias para oferecer soluções de ponta que mantêm nossos clientes na vanguarda.',
    },
    {
        icon: '/src/assets/svg//services-cards-icons/engenharia-de-dados.svg',
        title: 'Compromisso com a Excelência',
        description:
            'Nosso objetivo é superar as expectativas em cada projeto, garantindo qualidade e resultados consistentes.',
    },
    {
        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
        title: 'Transparência e Ética',
        description:
            'Valorizamos a honestidade em todas as nossas interações, construindo confiança com clientes e parceiros.',
    },
    {
        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
        title: 'Colaboração Efetiva',
        description:
            'Trabalhamos em conjunto com nossos clientes, criando parcerias que produzem soluções personalizadas e eficazes.',
    },
    {
        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
        title: 'Foco no Cliente',
        description:
            'Nossas decisões são orientadas pelas necessidades e objetivos dos nossos clientes, assegurando que entregamos verdadeiro valor.',
    },
    {
        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
        title: 'Crescimento Sustentável',
        description:
            'Buscamos um desenvolvimento que seja benéfico para nossos clientes, nossa equipe e o meio ambiente, garantindo um impacto positivo duradouro.',
    },
]

export default function Valores() {
    return (
        <section className="page-section">
            <div className="mb-16 flex w-full flex-col items-center text-center">
                <div className="mb-3 flex items-center gap-4 md:mb-4">
                    <img
                        src="/src/assets/svg/small-logo.png"
                        alt=""
                        className="h-auto w-6"
                    />
                    <h2 className="text-xl font-semibold uppercase drop-shadow-custom">
                        nossos valores
                    </h2>
                </div>
                <h3 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 lg:text-8xl">
                    <span className="text-brand-blue">Fundamentos</span> que{' '}
                    <br />
                    Definem Nossa Jornada
                </h3>
            </div>
            <div className="mx-auto grid max-w-xxl grid-cols-2 gap-2 md:grid-cols-3">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    )
}
