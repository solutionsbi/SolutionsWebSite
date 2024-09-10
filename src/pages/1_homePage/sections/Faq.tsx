import { Faq4 } from '@/components/relume/Faq4'

export default function Faq() {
    const heading = (
        <>
            <span className="text-brand-blue">saiba mais</span> sobre <br />{' '}
            nossas soluções
        </>
    )

    const questions = [
        {
            icon: 'src/assets/svg/services-cards-icons/engenharia-de-dados.svg',
            title: 'Como escolher a solução certa para minha empresa?',
            answer: 'Para escolher a solução ideal, começamos com uma análise detalhada das necessidades do seu negócio. Entendemos seus desafios e objetivos para recomendar a solução que melhor se alinha às suas demandas. Quer você precise de otimização de processos, melhor tomada de decisões através de Business Intelligence, ou desenvolvimento de sistemas personalizados, nossas recomendações são baseadas em uma abordagem consultiva e personalizada, garantindo que a solução selecionada traga o máximo benefício para sua empresa.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/business-intelligence.svg',
            title: 'Como a inteligência artificial pode beneficiar meu negócio?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
            title: 'Quais são os principais benefícios de usar um sistema personalizado?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
            title: 'Qual é o processo de implementação das soluções?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
            title: 'Como posso começar um projeto com vocês?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
    ]

    return (
        <section className="relative">
            <div className="absolute left-0 top-0 -z-50 h-full w-full translate-y-[10%]">
                <img
                    src="src\assets\images\adobe25.jpeg"
                    className="mask-linear fixed-size"
                />
            </div>
            <Faq4
                tagline="tire suas dúvidas"
                heading={heading}
                questions={questions}
            />
        </section>
    )
}
