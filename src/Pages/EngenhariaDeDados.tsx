import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroBg from '@/assets/images/Solutions/engenharia-de-dados.jpeg'
import benefitsBg from '@/assets/images/Background/25.jpeg'

export default function EngenhariaDeDados() {
    return (
        <div className="grid">
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Engenharia</span>
                        <br />
                        de Dados
                    </>
                }
                description="Ajudamos a sua empresa a coletar, armazenar e processar dados de forma eficiente e segura, garantindo que você tenha informações precisas e confiáveis para tomar decisões estratégicas."
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                    linkType: 'external',
                }}
                img={heroBg}
            />
            <ComoFunciona
                description={
                    'Entenda cada etapa do processo que transforma \n seus dados brutos em insights valiosos e utilizáveis.'
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
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                    linkType: 'external',
                }}
                title="Benefícios"
                background={benefitsBg}
                description="Ao investir em engenharia de dados, você terá acesso a uma série de benefícios que podem ajudar a impulsionar o crescimento e o sucesso do seu negócio."
                benefits={[
                    {
                        title: 'Dados Precisos \n e Confiáveis',
                        description:
                            'Tenha acesso a informações precisas e confiáveis para tomar decisões estratégicas com segurança.',
                    },
                    {
                        title: 'Tomada de Decisão \n Mais Rápida',
                        description:
                            'Com dados atualizados e insights valiosos, você poderá tomar decisões mais rápidas e eficientes.',
                    },
                    {
                        title: 'Redução \n de Custos',
                        description:
                            'Ao automatizar processos e identificar oportunidades de otimização, você poderá reduzir custos e aumentar a eficiência operacional.',
                    },
                ]}
            />
            <Faq
                faqs={[
                    {
                        question: 'O que é engenharia de dados?',
                        answer: 'A engenharia de dados é uma disciplina que envolve coletar, armazenar e processar dados de forma eficiente e segura, garantindo que você tenha acesso a informações precisas e confiáveis para tomar decisões estratégicas.',
                    },
                    {
                        question:
                            'Quais são os benefícios da engenharia de dados?',
                        answer: 'Ao investir em engenharia de dados, você terá acesso a informações precisas e confiáveis para tomar decisões estratégicas com segurança, poderá tomar decisões mais rápidas e eficientes, e reduzir custos e aumentar a eficiência operacional.',
                    },
                    {
                        question:
                            'Como a engenharia de dados pode ajudar o meu negócio?',
                        answer: 'A engenharia de dados pode ajudar o seu negócio a coletar, armazenar e processar dados de forma eficiente e segura, garantindo que você tenha acesso a informações precisas e confiáveis para tomar decisões estratégicas.',
                    },
                    {
                        question:
                            'Quais são os principais desafios da engenharia de dados?',
                        answer: 'Alguns dos principais desafios da engenharia de dados incluem lidar com grandes volumes de dados, garantir a segurança e privacidade dos dados, e garantir a qualidade e confiabilidade das informações coletadas.',
                    },
                ]}
            />
            <Solucoes title={true} />
            <Cta />
        </div>
    )
}
