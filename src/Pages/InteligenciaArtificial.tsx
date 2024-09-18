import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

export default function InteligenciaArtificial() {
    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Inteligência</span>
                        <br />
                        Artificial
                    </>
                }
                description="Desenvolvemos soluções de Inteligência Artificial para ajudar a sua empresa a otimizar processos, aumentar a produtividade e impulsionar o crescimento."
                cta={
                    <a href="#" target="_blank">
                        Contrate agora
                    </a>
                }
                img="/src/assets/images/Solutions/inteligencia-artificial.jpeg"
            />
            <ComoFunciona
                description={
                    'Nossa abordagem à Inteligência Artificial é projetada para \n integrar tecnologias de ponta que solucionam desafios específicos do seu negócio, \nelevando seu desempenho a novos patamares.'
                }
                steps={[
                    {
                        title: 'Diagnóstico e \n Identificação de Oportunidades',
                        description:
                            'O primeiro passo é entender profundamente os desafios e necessidades do seu negócio. Realizamos uma análise detalhada para identificar áreas onde a Inteligência Artificial pode gerar maior impacto, seja na automação de processos, personalização de serviços ou na tomada de decisões mais assertivas.',
                    },
                    {
                        title: 'Desenvolvimento e Treinamento \nde Modelos de AI',
                        description:
                            'Com base no diagnóstico, desenvolvemos modelos de IA personalizados que são treinados com seus dados específicos. Nossos especialistas em machine learning ajustam os algoritmos para garantir que os modelos aprendam e se adaptem de forma precisa, proporcionando resultados alinhados aos objetivos da sua empresa.',
                    },
                    {
                        title: 'Implementação e \nIntegração',
                        description:
                            'Após o desenvolvimento e testes rigorosos, integramos a solução de IA em seus sistemas existentes. Garantimos que a tecnologia funcione de forma harmoniosa com suas operações atuais, maximizando os benefícios sem interrupções.',
                    },
                    {
                        title: 'Monitoramento e \nOtimização Contínua',
                        description:
                            'A Inteligência Artificial não é estática; por isso, monitoramos continuamente o desempenho dos modelos implementados, realizando ajustes e otimizações conforme necessário para garantir que eles continuem a oferecer valor ao longo do tempo.',
                    },
                    {
                        title: 'Expansão e \n Escalabilidade',
                        description:
                            'À medida que sua empresa cresce, as soluções de IA são escaláveis para acompanhar a expansão. Podemos adaptar e ampliar os modelos de AI para novos cenários e demandas, garantindo que você continue a colher os benefícios à medida que suas necessidades evoluem.',
                    },
                ]}
            />
            <Beneficios
                title="Benefícios"
                background="/src/assets/images/Background/1.jpeg"
                description="Os benefícios da Inteligência Artificial são inúmeros e impactam positivamente diversos aspectos do seu negócio. Desde a automação de tarefas repetitivas até a personalização de serviços, a IA pode transformar a maneira como você opera e impulsionar o crescimento da sua empresa."
                benefits={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        title: 'Automação \nde Processos',
                        description:
                            'A IA pode automatizar tarefas repetitivas e manuais, liberando sua equipe para se concentrar em atividades de maior valor agregado.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        title: 'Personalização \n de Serviços',
                        description:
                            'A IA pode analisar o comportamento do cliente e personalizar serviços e produtos de acordo com suas preferências e necessidades.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        title: 'Otimização \nde Processos',
                        description:
                            'A IA pode identificar oportunidades de melhoria e otimizar processos internos, aumentando a eficiência e a produtividade da sua empresa.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        title: 'Análise de \nDados Avançada',
                        description:
                            'A IA pode analisar grandes volumes de dados de forma rápida e precisa, fornecendo insights valiosos para o seu negócio.',
                    },
                ]}
            />
            <Faq
                faqs={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        question: 'O que é Inteligência Artificial?',
                        answer: 'A Inteligência Artificial é um campo da ciência da computação que se concentra no desenvolvimento de sistemas e tecnologias capazes de realizar tarefas que normalmente requerem inteligência humana, como aprendizado, raciocínio, percepção e tomada de decisões.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        question:
                            'Como a Inteligência Artificial pode beneficiar a minha empresa?',
                        answer: 'A Inteligência Artificial pode beneficiar a sua empresa de diversas maneiras, desde a automação de processos e a personalização de serviços até a análise de dados avançada e a tomada de decisões mais assertivas. Ela pode ajudar a otimizar operações, aumentar a produtividade e impulsionar o crescimento do seu negócio.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        question:
                            'Quais são os principais desafios na implementação de soluções de Inteligência Artificial?',
                        answer: 'Alguns dos principais desafios na implementação de soluções de Inteligência Artificial incluem a coleta e preparação de dados de qualidade, a escolha dos algoritmos certos para os modelos de IA, a integração com sistemas existentes e a garantia de segurança e privacidade dos dados.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
                        question:
                            'Como a Inteligência Artificial é utilizada em diferentes setores?',
                        answer: 'A Inteligência Artificial é utilizada em diversos setores, como saúde, finanças, varejo, manufatura, logística, entre outros. Ela pode ser aplicada para melhorar a eficiência operacional, personalizar serviços, prever tendências de mercado, otimizar processos e muito mais.',
                    },
                ]}
            />
            <Solucoes />
            <Cta />
        </>
    )
}
