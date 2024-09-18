import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

export default function TransformacaoDigital() {
    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Transformação</span>
                        <br />
                        Digital
                    </>
                }
                description="Ajudamos a sua empresa a se adaptar às mudanças tecnológicas e a transformar processos, produtos e serviços para atender às demandas do mercado atual."
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                }}
                img="/src/assets/images/Solutions/transformacao-digital.jpeg"
            />
            <ComoFunciona
                description={
                    'Entenda como a Transformação Digital pode ajudar a sua empresa \n a se adaptar às mudanças tecnológicas e a impulsionar o crescimento.'
                }
                steps={[
                    {
                        title: 'Análise de \n Processos',
                        description:
                            'Iniciamos o processo com uma análise detalhada dos processos, produtos e serviços da sua empresa, identificando oportunidades de melhoria e inovação.',
                    },
                    {
                        title: 'Estratégia e \n Planejamento',
                        description:
                            'Com base na análise realizada, desenvolvemos uma estratégia e um plano de ação personalizado para a transformação digital da sua empresa, alinhado com os objetivos e metas estabelecidos.',
                    },
                    {
                        title: 'Implementação \ne Integração',
                        description:
                            'Após a definição da estratégia, iniciamos a implementação das soluções e tecnologias necessárias para a transformação digital da sua empresa, garantindo que sejam integradas de forma eficiente e segura.',
                    },
                    {
                        title: 'Monitoramento \ne Otimização',
                        description:
                            'Por fim, monitoramos e otimizamos continuamente os processos, produtos e serviços da sua empresa, garantindo que estejam alinhados com as melhores práticas e as tendências do mercado.',
                    },
                ]}
            />
            <Beneficios
                title="Benefícios"
                background="/src/assets/images/Background/1.jpeg"
                description="Ao investir em Transformação Digital, você terá acesso a uma série de benefícios que podem ajudar a impulsionar o crescimento e o sucesso do seu negócio."
                benefits={[
                    {
                        title: 'Inovação e \n Competitividade',
                        description:
                            'Mantenha-se inovador e competitivo no mercado, adaptando-se às mudanças tecnológicas e às demandas dos clientes.',
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                    },
                    {
                        title: 'Eficiência e \n Agilidade',
                        description:
                            'Otimize processos, aumente a eficiência e a agilidade da sua empresa com soluções digitais e automatizadas.',
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                    },
                    {
                        title: 'Experiência do \n Cliente',
                        description:
                            'Melhore a experiência do cliente com soluções digitais personalizadas e inovadoras, que atendam às suas necessidades e expectativas.',
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                    },
                ]}
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                }}
            />
            <Faq
                faqs={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                        question: 'O que é Transformação Digital?',
                        answer: 'Transformação Digital é o processo de adaptação e inovação de processos, produtos e serviços de uma empresa por meio da utilização de tecnologias digitais, com o objetivo de impulsionar o crescimento e o sucesso do negócio.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                        question:
                            'Quais são os benefícios da Transformação Digital?',
                        answer: 'Os benefícios da Transformação Digital incluem inovação e competitividade, eficiência e agilidade, melhoria da experiência do cliente, entre outros. Ao investir em Transformação Digital, as empresas podem se adaptar às mudanças tecnológicas e às demandas do mercado, mantendo-se competitivas e inovadoras.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                        question:
                            'Como a Transformação Digital pode ajudar a minha empresa?',
                        answer: 'A Transformação Digital pode ajudar a sua empresa a se adaptar às mudanças tecnológicas e às demandas do mercado, impulsionando o crescimento e o sucesso do seu negócio. Com soluções digitais e inovadoras, as empresas podem otimizar processos, aumentar a eficiência e a agilidade, e melhorar a experiência do cliente.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/transformacao-digital.svg',
                        question:
                            'Quais são as principais tendências de Transformação Digital?',
                        answer: 'Algumas das principais tendências de Transformação Digital incluem automação de processos, estratégia de dados, transformação digital de negócios, entre outras. Essas tendências estão mudando a forma como as empresas operam e se relacionam com os clientes, permitindo que sejam mais inovadoras, eficientes e competitivas no mercado.',
                    },
                ]}
            />
            <Solucoes />
            <Cta />
        </>
    )
}
