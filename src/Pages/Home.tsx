import Hero from './Sections/Hero'
import Solucoes from './Sections/Solucoes'
import Partners from './Sections/Partners'
import WorldMap from './Sections/WorldMap'
import Benefícios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Cta from './Sections/Cta'

export default function Home() {
    return (
        <div className="grid">
            <Hero
                position="center"
                title={
                    <>
                        Soluções em{' '}
                        <span className="text-brand-blue">tecnologia</span>
                        <br className="hidden md:inline-block" /> para seu
                        negócio
                    </>
                }
                description={
                    'Na SolutionsBI, oferecemos soluções em tecnologia para ajudar a sua empresa a crescer,\n inovar e se destacar no mercado.Conheça nossos serviços e descubra \n como podemos ajudar a impulsionar o seu negócio.'
                }
                cta1={{ text: 'Impulsione seu negócio', link: '#' }}
                cta2={{ text: 'Saiba mais', link: '/sobre' }}
                img="/src/assets/images/Background/11.jpeg"
            />
            <Solucoes />
            <Partners />
            <WorldMap />
            <Benefícios
                title={
                    <>
                        nossos <span className="text-brand-blue">valores</span>
                    </>
                }
                background="/src/assets/images/Background/24.jpeg"
                description="Na SolutionsBI, acreditamos que a tecnologia pode transformar negócios e impactar positivamente a sociedade. Por isso, trabalhamos com dedicação, ética e transparência para oferecer soluções inovadoras e eficientes para os nossos clientes."
                benefits={[
                    {
                        title: 'Inovação',
                        description:
                            'Buscamos constantemente por novas tecnologias e soluções inovadoras para oferecer o que há de melhor para os nossos clientes.',
                        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
                    },

                    {
                        title: 'Dedicação',
                        description:
                            'Nos dedicamos integralmente aos projetos dos nossos clientes, buscando sempre superar as expectativas e entregar resultados excepcionais.',
                        icon: '/src/assets/svg/services-cards-icons/engenharia-de-dados.svg',
                    },
                    {
                        title: 'Qualidade',
                        description:
                            'Priorizamos a qualidade em tudo o que fazemos, desde o atendimento ao cliente até a entrega dos projetos, garantindo a excelência em todos os nossos serviços.',
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                    },
                ]}
            />
            <Faq
                faqs={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/engenharia-de-dados.svg',
                        question:
                            'Como escolher a solução certa para minha empresa?',
                        answer: 'Para escolher a solução ideal, começamos com uma análise detalhada das necessidades do seu negócio. Entendemos seus desafios e objetivos para recomendar a solução que melhor se alinha às suas demandas. Quer você precise de otimização de processos, melhor tomada de decisões através de Business Intelligence, ou desenvolvimento de sistemas personalizados, nossas recomendações são baseadas em uma abordagem consultiva e personalizada, garantindo que a solução selecionada traga o máximo benefício para sua empresa.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/business-intelligence.svg',
                        question: 'Quais setores a SolutionsBI atende?',
                        answer: 'A SolutionsBI atende a empresas de diversos setores, incluindo varejo, saúde, educação, financeiro, entre outros. Nossas soluções são personalizadas para atender às necessidades específicas de cada cliente, independentemente do setor em que atuam.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question:
                            'Quais benefícios a SolutionsBI pode trazer para a minha empresa?',
                        answer: 'A SolutionsBI pode trazer uma série de benefícios para a sua empresa, incluindo otimização de processos, melhor tomada de decisões, aumento da eficiência operacional, redução de custos, entre outros. Nossas soluções são projetadas para impulsionar o crescimento e o sucesso do seu negócio, oferecendo inovação, qualidade e excelência em todos os nossos serviços.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        question: 'Como começar a trabalhar com a SolutionsBI?',
                        answer: 'Para começar a trabalhar com a SolutionsBI, basta entrar em contato conosco através do nosso site ou por telefone. Nossa equipe de especialistas está pronta para ajudar a sua empresa a impulsionar o crescimento e o sucesso do seu negócio com soluções inovadoras e eficientes.',
                    },
                ]}
            />
            <Cta />
        </div>
    )
}
