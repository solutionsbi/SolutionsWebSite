import Hero from '../0_Seções/Hero'
import ComoFunciona from '../0_Seções/ComoFunciona'
import Beneficios from '../0_Seções/Beneficios'
import Faq from '../0_Seções/Faq'
import Solucoes from '../0_Seções/Solucoes'
import Cta from '@/pages/1_homePage/sections/7_Cta/Cta'

export default function WebsistesEcommerce() {
    return (
        <>
            <Hero
                title={
                    <>
                        <span className="text-brand-blue">Websites</span>
                        <br />
                        E-commerce
                    </>
                }
                description="Desenvolvemos websites e lojas virtuais personalizadas para ajudar a sua empresa a se destacar no mercado digital e impulsionar as vendas online."
                cta1="Saiba mais"
                img="/src/assets/images/Solutions/websites-ecommerce.jpeg"
            />
            <ComoFunciona
                description={
                    'Nosso processo de desenvolvimento de websites e e-commerce é projetado para \n criar soluções digitais eficazes que atendam às necessidades do seu negócio.'
                }
                steps={[
                    {
                        title: 'Briefing e \n Planejamento',
                        description:
                            'O primeiro passo é entender o seu negócio, público-alvo e objetivos. Realizamos um briefing detalhado para identificar as necessidades e expectativas da sua empresa, criando um plano estratégico para o desenvolvimento do website ou e-commerce.',
                    },
                    {
                        title: 'Design e \n Desenvolvimento',
                        description:
                            'Com base no briefing, nossa equipe de designers e desenvolvedores cria um layout personalizado e responsivo, alinhado à identidade visual da sua marca. Utilizamos as melhores práticas de UX/UI para garantir uma experiência de navegação intuitiva e agradável para os usuários.',
                    },
                    {
                        title: 'Integração de \n Funcionalidades',
                        description:
                            'Implementamos as funcionalidades necessárias para o seu website ou e-commerce, como carrinho de compras, métodos de pagamento, integração com redes sociais, entre outras. Garantimos que todas as ferramentas estejam integradas de forma eficiente e segura, proporcionando uma experiência completa para os seus clientes.',
                    },
                    {
                        title: 'Testes e \n Otimização',
                        description:
                            'Realizamos testes rigorosos em todas as etapas do desenvolvimento para garantir que o website ou e-commerce funcione corretamente em diferentes dispositivos e navegadores. Além disso, otimizamos o desempenho e a velocidade de carregamento para proporcionar uma experiência ágil e sem falhas aos usuários.',
                    },
                    {
                        title: 'Lançamento e \n Suporte',
                        description:
                            'Após a conclusão do desenvolvimento e testes, realizamos o lançamento do website ou e-commerce. Fornecemos suporte contínuo para garantir que tudo funcione conforme o esperado e oferecemos treinamento para que você possa gerenciar e atualizar o conteúdo de forma autônoma.',
                    },
                ]}
            />
            <Beneficios
                title="Benefícios"
                background="/src/assets/images/Background/1.jpeg"
                description="Ter um website ou e-commerce bem estruturado e funcional pode trazer inúmeros benefícios para o seu negócio. Desde aumentar a visibilidade da sua marca até impulsionar as vendas online, uma presença digital sólida é essencial para se destacar no mercado atual."
                benefits={[
                    {
                        icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        title: 'Presença Online',
                        description:
                            'Um website ou e-commerce bem desenvolvido é a porta de entrada para o seu negócio no mundo digital. Ele permite que os clientes encontrem informações sobre sua empresa, produtos e serviços a qualquer hora e de qualquer lugar, aumentando a visibilidade da sua marca.',
                    },
                    {
                        icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        title: 'Vendas Online',
                        description:
                            'Um e-commerce bem estruturado e funcional pode impulsionar as vendas online da sua empresa. Com um sistema de carrinho de compras, métodos de pagamento seguros e integração com redes sociais, você oferece uma experiência completa para os seus clientes, aumentando as conversões e o faturamento.',
                    },
                    {
                        icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        title: 'Otimização para \n Mecanismos de Busca',
                        description:
                            'Um website otimizado para mecanismos de busca (SEO) tem mais chances de ser encontrado pelos usuários nos resultados de pesquisa. Isso aumenta a visibilidade da sua marca, atrai tráfego qualificado para o seu site e melhora o posicionamento nos rankings, gerando mais oportunidades de negócio.',
                    },
                    {
                        icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        title: 'Análise de Dados e \n Métricas de Desempenho',
                        description:
                            'Com um website ou e-commerce, você pode coletar e analisar dados sobre o comportamento dos usuários, as preferências de compra e o desempenho das suas campanhas. Isso fornece insights valiosos para tomar decisões estratégicas, otimizar a experiência do cliente e impulsionar o crescimento do seu negócio.',
                    },
                ]}
            />
            <Faq
                title="Perguntas Frequentes"
                faqs={[
                    {
                        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        question:
                            'Qual é a diferença entre um website e um e-commerce?',
                        answer: 'Um website é uma plataforma online que apresenta informações sobre uma empresa, seus produtos e serviços. Ele pode ser usado para diversos fins, como divulgação institucional, geração de leads e relacionamento com clientes. Já um e-commerce é uma loja virtual que permite a venda de produtos ou serviços online. Ele possui funcionalidades específicas, como carrinho de compras, métodos de pagamento e integração com sistemas de gestão.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        question:
                            'Por que ter um website ou e-commerce é importante para o meu negócio?',
                        answer: 'Ter um website ou e-commerce é essencial para qualquer negócio nos dias de hoje. Eles são a porta de entrada para a sua empresa no mundo digital, permitindo que os clientes encontrem informações sobre seus produtos e serviços a qualquer hora e de qualquer lugar. Além disso, um website bem estruturado e funcional pode aumentar a visibilidade da sua marca, impulsionar as vendas online e fortalecer o relacionamento com os clientes.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        question:
                            'Como posso garantir que meu website ou e-commerce seja bem-sucedido?',
                        answer: 'Para garantir o sucesso do seu website ou e-commerce, é importante investir em um design responsivo e intuitivo, que proporcione uma experiência agradável para os usuários. Além disso, é fundamental integrar funcionalidades como carrinho de compras, métodos de pagamento seguros e análise de dados para otimizar a performance e impulsionar as vendas. Por fim, é essencial realizar testes e otimizações contínuas para garantir que o site funcione corretamente e esteja alinhado com os objetivos do seu negócio.',
                    },
                    {
                        icon: '/src/assets/svg/services-cards-icons/websites-ecommerce.svg',
                        question:
                            'Como posso medir o desempenho do meu website ou e-commerce?',
                        answer: 'Para medir o desempenho do seu website ou e-commerce, você pode utilizar ferramentas de análise de dados, como o Google Analytics. Essas ferramentas fornecem informações detalhadas sobre o tráfego do site, o comportamento dos usuários, as conversões e o retorno sobre o investimento (ROI). Com base nesses dados, você pode identificar oportunidades de melhoria, otimizar a performance e tomar decisões estratégicas para impulsionar o crescimento do seu negócio.',
                    },
                ]}
            />
            <Solucoes />
            <Cta />
        </>
    )
}
