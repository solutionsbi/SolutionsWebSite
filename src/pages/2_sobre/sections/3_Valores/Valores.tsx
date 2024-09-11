type CardProps = {
    icon: string
    title: string
    description: string
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="before:backdrop-blur* relative flex flex-col rounded-r-3xl border-l-2 border-brand-blue bg-gradient-to-r from-neutral-darkest/50 to-neutral-darkest/0 p-10 before:absolute before:inset-0 before:-z-50">
            <div className="flex items-center gap-6">
                <img src={icon} alt="" className="h-10 w-10" />
                <h4
                    className="text-2xl/none font-bold"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>
            <p className="mt-5">{description}</p>
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
    // {
    //     icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
    //     title: 'Colaboração <br/> Efetiva',
    //     description:
    //         'Trabalhamos em conjunto com nossos clientes, criando parcerias que produzem soluções personalizadas e eficazes.',
    // },
    // {
    //     icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
    //     title: 'Foco no <br/> Cliente',
    //     description:
    //         'Nossas decisões são orientadas pelas necessidades e objetivos dos nossos clientes, assegurando que entregamos verdadeiro valor.',
    // },
    // {
    //     icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
    //     title: 'Crescimento <br/> Sustentável',
    //     description:
    //         'Buscamos um desenvolvimento que seja benéfico para nossos clientes, nossa equipe e o meio ambiente, garantindo um impacto positivo duradouro.',
    // },
]

export default function Valores() {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-1/2 -z-50 mx-auto h-[150%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src="/src/assets/images/Background/15.jpeg"
                    className="mask-rect h-full w-full object-cover opacity-50"
                />
            </div>
            <div className="container grid grid-cols-2">
                <div className="mx-auto grid gap-2 pr-[12%]">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
                <div className="mb-16 flex w-full flex-col">
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
                    <div>
                        <h3 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 lg:text-8xl">
                            <span className="text-brand-blue">Fundamentos</span>{' '}
                            <br /> que Definem <br /> Nossa Jornada
                        </h3>
                        <p className="w-[80%]">
                            Esses princípios fundamentais orientam todas as
                            nossas ações e decisões. Eles representam o
                            compromisso da nossa empresa em buscar a excelência,
                            manter a transparência, fomentar a inovação e
                            priorizar sempre as necessidades dos nossos
                            clientes. Cada valor é uma promessa de entrega de
                            resultados consistentes e de construção de parcerias
                            duradouras que impulsionam o crescimento sustentável
                            e ético.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
