import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type CardProps = {
    icon: string
    title: string
    description: string
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="relative flex flex-col rounded-r-3xl border-l-2 border-brand-blue bg-gradient-to-r from-neutral-darkest/70 to-neutral-darkest/0 p-10 before:absolute before:inset-0 before:-z-50 before:backdrop-blur">
            <div className="flex items-center gap-6">
                <img src={icon} alt="" className="h-10 w-10" />
                <h4
                    className="text-2xl/tight font-bold"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>
            <p className="mt-5 lg:max-w-[80%]">{description}</p>
        </div>
    )
}

const cards = [
    {
        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
        title: 'Inovação <br/> Constante',
        description:
            'Estamos sempre buscando novas tecnologias e ideias para oferecer soluções de ponta que mantêm nossos clientes na vanguarda.',
    },
    {
        icon: '/src/assets/svg//services-cards-icons/engenharia-de-dados.svg',
        title: 'Compromisso com <br/> a Excelência',
        description:
            'Nosso objetivo é superar as expectativas em cada projeto, garantindo qualidade e resultados consistentes.',
    },
    {
        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
        title: 'Transparência <br/> e Ética',
        description:
            'Valorizamos a honestidade em todas as nossas interações, construindo confiança com clientes e parceiros.',
    },
]

export default function Valores() {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-1/2 -z-50 mx-auto h-[120%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src="/src/assets/images/Background/24.jpeg"
                    className="mask-rect h-full w-full object-cover opacity-100"
                />
            </div>
            <div className="container">
                <div className="container grid justify-items-center gap-20 lg:grid-cols-2">
                    <div className="mb-16 flex w-full flex-col">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                            <h3 className="mb-5 text-6xl font-bold text-text-alternative drop-shadow-custom md:mb-6 lg:text-8xl">
                                <span className="text-brand-blue">
                                    Fundamentos
                                </span>{' '}
                                <br /> que Definem <br /> Nossa Jornada
                            </h3>
                            <p className="text-justify xl:text-md">
                                Esses princípios fundamentais orientam todas as
                                nossas ações e decisões. Eles representam o
                                compromisso da nossa empresa em buscar a
                                excelência, manter a transparência, fomentar a
                                inovação e priorizar sempre as necessidades dos
                                nossos clientes. Cada valor é uma promessa de
                                entrega de resultados consistentes e de
                                construção de parcerias duradouras que
                                impulsionam o crescimento sustentável e ético.
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-10">
                                <Button>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="drop-shadow-md"
                                    >
                                        Agende uma Consultoria
                                    </a>
                                </Button>
                                <Button variant="outline">
                                    <Link to="/sobre">Saiba mais</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto grid gap-2">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
