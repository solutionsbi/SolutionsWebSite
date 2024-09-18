import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroBg from '@/assets/images/Solutions/business-intelligence.jpeg'
import benefitsBg from '@/assets/images/Background/25.jpeg'

export default function BusinessIntelligence() {
    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Business</span>
                        <br />
                        Intelligence
                    </>
                }
                description="Transforme seus dados em insights valiosos e tome decisões estratégicas com base em informações confiáveis e atualizadas."
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                }}
                img={heroBg}
            />
            <ComoFunciona
                description={
                    'Entenda como o Business Intelligence pode ajudar a sua empresa \n a transformar dados brutos em informações valiosas e utilizáveis.'
                }
                steps={[
                    {
                        title: 'Coleta e \n Armazenamento',
                        description:
                            'Começamos pela coleta de dados brutos de diversas fontes, sejam internas ou externas. Esses dados são então armazenados em um ambiente seguro e escalável, garantindo que estejam sempre acessíveis e protegidos.',
                    },
                    {
                        title: 'Processamento \ne Limpeza',
                        description:
                            'Os dados armazenados passam por um processo de limpeza, onde são eliminadas inconsistências e duplicações. Em seguida, são processados para garantir que estejam prontos para análises avançadas, transformando-os em informações organizadas e estruturadas.',
                    },
                    {
                        title: 'Modelagem e \nEstruturação',
                        description:
                            'Após o processamento, os dados são modelados e estruturados em bancos de dados otimizados para consultas rápidas e eficientes. Esse processo garante que as informações estejam prontas para serem usadas em relatórios, dashboards e análises estratégicas.',
                    },
                    {
                        title: 'Integração \ne Acesso',
                        description:
                            'Por fim, os dados estruturados são integrados aos sistemas de BI (Business Intelligence) e outras ferramentas analíticas da empresa, permitindo que as equipes acessem insights valiosos de forma intuitiva e em tempo real.',
                    },
                ]}
            />
            <Beneficios
                title="Benefícios"
                background={benefitsBg}
                description="Ao investir em Business Intelligence, você terá acesso a uma série de benefícios que podem ajudar a impulsionar o crescimento e o sucesso do seu negócio."
                benefits={[
                    {
                        title: 'Tomada de Decisão \n Estratégica',
                        description:
                            'Tome decisões mais assertivas e estratégicas com base em informações confiáveis e atualizadas.',
                    },
                    {
                        title: 'Análises Avançadas \n e Personalizadas',
                        description:
                            'Acesse relatórios e dashboards personalizados com análises avançadas e insights valiosos para o seu negócio.',
                    },
                    {
                        title: 'Acesso em \n Tempo  Real',
                        description:
                            'Tenha acesso a informações em tempo real, permitindo que as equipes tomem decisões rápidas e eficientes.',
                    },
                    {
                        title: 'Visualização de \n Dados Intuitiva',
                        description:
                            'Visualize seus dados de forma intuitiva e interativa, facilitando a compreensão e interpretação das informações.',
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
                        question: 'O que é Business Intelligence?',
                        answer: 'Business Intelligence (BI) é um conjunto de práticas, tecnologias e ferramentas que permitem às empresas coletar, organizar, analisar e visualizar dados para tomar decisões estratégicas com base em informações confiáveis e atualizadas.',
                    },
                    {
                        question:
                            'Quais são os benefícios do Business Intelligence?',
                        answer: 'Os benefícios do Business Intelligence incluem tomada de decisão estratégica, análises avançadas e personalizadas, acesso em tempo real, visualização de dados intuitiva, entre outros. Ao investir em BI, as empresas podem impulsionar o crescimento e o sucesso do seu negócio.',
                    },
                    {
                        question:
                            'Como o Business Intelligence pode ajudar a minha empresa?',
                        answer: 'O Business Intelligence pode ajudar a sua empresa a transformar dados brutos em insights valiosos, permitindo que as equipes tomem decisões mais assertivas e estratégicas. Com acesso a informações confiáveis e atualizadas, as empresas podem identificar oportunidades de crescimento, otimizar processos e melhorar o desempenho operacional.',
                    },
                    {
                        question: 'Quais ferramentas de BI vocês utilizam?',
                        answer: 'Utilizamos uma variedade de ferramentas de Business Intelligence, como Power BI, Tableau, QlikView, Looker, entre outras. Essas ferramentas nos permitem coletar, organizar, analisar e visualizar dados de forma eficiente e intuitiva, proporcionando insights valiosos para as empresas.',
                    },
                    {
                        question:
                            'Como o BI se integra com meus sistemas atuais?',
                        answer: 'O Business Intelligence pode ser integrado com os sistemas atuais da sua empresa por meio de APIs, conectores e outras ferramentas de integração. Essa integração permite que os dados sejam extraídos, transformados e carregados de forma automatizada, garantindo que as informações estejam sempre atualizadas e acessíveis para análises avançadas.',
                    },
                ]}
            />
            <Solucoes />
            <Cta />
        </>
    )
}
