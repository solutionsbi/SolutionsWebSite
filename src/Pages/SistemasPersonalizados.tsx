import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

export default function SistemasPersonalizados() {
    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Sistemas</span>
                        <br />
                        Personalizados
                    </>
                }
                description="Desenvolvemos soluções sob medida para atender às necessidades específicas da sua empresa, garantindo eficiência, segurança e escalabilidade."
                cta={
                    <a href="#" target="_blank">
                        Contrate agora
                    </a>
                }
                img="/src/assets/images/Solutions/sistemas-personalizados.jpeg"
            />
            <ComoFunciona
                description={
                    'Entenda como os Sistemas Personalizados podem ajudar a sua empresa \n a otimizar processos, aumentar a produtividade e impulsionar o crescimento.'
                }
                steps={[
                    {
                        title: 'Análise de \n Requisitos',
                        description:
                            'Iniciamos o projeto com uma análise detalhada dos requisitos e objetivos da sua empresa, identificando as necessidades específicas e os desafios a serem superados.',
                    },
                    {
                        title: 'Design e \n Desenvolvimento',
                        description:
                            'Com base nos requisitos identificados, nossa equipe de especialistas em desenvolvimento de software cria um design personalizado e inovador para o seu sistema, garantindo que atenda às suas expectativas e necessidades.',
                    },
                    {
                        title: 'Testes e \n Validação',
                        description:
                            'Antes do lançamento, o sistema passa por rigorosos testes e validações para garantir que esteja funcionando corretamente e atendendo aos requisitos estabelecidos. Essa etapa é fundamental para garantir a qualidade e a segurança do sistema.',
                    },
                    {
                        title: 'Implantação e \n Suporte',
                        description:
                            'Após a validação, o sistema é implantado e configurado para uso, garantindo que esteja funcionando corretamente e atendendo às suas necessidades. Além disso, oferecemos suporte contínuo para garantir que o sistema esteja sempre atualizado e funcionando perfeitamente.',
                    },
                ]}
            />
            <Beneficios
                title="Benefícios"
                background="/src/assets/images/Background/1.jpeg"
                description="Ao investir em Sistemas Personalizados, você terá acesso a uma série de benefícios que podem ajudar a impulsionar o crescimento e o sucesso do seu negócio."
                benefits={[
                    {
                        title: 'Eficiência e \n Produtividade',
                        description:
                            'Otimize processos, aumente a produtividade e reduza custos com soluções personalizadas e eficientes.',
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                    },
                    {
                        title: 'Segurança e \n Confiabilidade',
                        description:
                            'Proteja os dados e informações da sua empresa com sistemas seguros e confiáveis, desenvolvidos sob medida para atender às suas necessidades.',
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                    },
                    {
                        title: 'Escalabilidade e \n Flexibilidade',
                        description:
                            'Garanta que o seu sistema possa crescer e se adaptar às mudanças do seu negócio, oferecendo flexibilidade e escalabilidade para atender às suas necessidades futuras.',
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                    },
                ]}
            />
            <Faq
                faqs={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question: 'O que são Sistemas Personalizados?',
                        answer: 'Sistemas Personalizados são soluções de software desenvolvidas sob medida para atender às necessidades específicas da sua empresa. Esses sistemas são projetados e desenvolvidos de acordo com os requisitos e objetivos do seu negócio, garantindo eficiência, segurança e escalabilidade.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question:
                            'Quais são os benefícios dos Sistemas Personalizados?',
                        answer: 'Os benefícios dos Sistemas Personalizados incluem eficiência e produtividade, segurança e confiabilidade, escalabilidade e flexibilidade, entre outros. Ao investir em sistemas personalizados, as empresas podem otimizar processos, aumentar a produtividade e impulsionar o crescimento do seu negócio.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question:
                            'Como os Sistemas Personalizados podem ajudar a minha empresa?',
                        answer: 'Os Sistemas Personalizados podem ajudar a sua empresa a superar desafios específicos, otimizar processos, aumentar a produtividade e impulsionar o crescimento do seu negócio. Com soluções personalizadas e eficientes, as empresas podem atender às suas necessidades de forma mais eficaz e obter vantagem competitiva no mercado.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question:
                            'Quais tecnologias são utilizadas no desenvolvimento de Sistemas Personalizados?',
                        answer: 'No desenvolvimento de Sistemas Personalizados, utilizamos uma variedade de tecnologias e ferramentas de desenvolvimento de software, como Java, .NET, Python, Ruby on Rails, entre outras. Essas tecnologias nos permitem criar soluções inovadoras e personalizadas para atender às necessidades específicas da sua empresa.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
                        question:
                            'Como posso obter um Sistema Personalizado para a minha empresa?',
                        answer: 'Para obter um Sistema Personalizado para a sua empresa, entre em contato conosco para agendar uma reunião inicial e discutir os requisitos e objetivos do seu negócio. Com base nessas informações, nossa equipe de especialistas em desenvolvimento de software criará uma solução personalizada e inovadora para atender às suas necessidades.',
                    },
                ]}
            />
            <Solucoes />
            <Cta />
        </>
    )
}
