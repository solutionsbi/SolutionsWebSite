import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroBg from '@/assets/images/Solutions/websites-ecommerce.jpeg'
import benefitsBg from '@/assets/images/Background/25.jpeg'
import icon1 from '@/assets/svg/services-cards-icons/engenharia-de-dados.svg'
import icon2 from '@/assets/svg/services-cards-icons/business-intelligence.svg'
import icon3 from '@/assets/svg/services-cards-icons/sistemas-personalizados.svg'
import icon4 from '@/assets/svg/services-cards-icons/inteligencia-artificial.svg'
import icon5 from '@/assets/svg/services-cards-icons/transformacao-digital.svg'
import icon6 from '@/assets/svg/services-cards-icons/websites-ecommerce.svg'

export default function WebsistesEcommerce() {
    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">Websites</span>
                        <br />
                        E-commerce
                    </>
                }
                description="Desenvolvemos websites e lojas virtuais personalizadas para ajudar a sua empresa a se destacar no mercado digital e impulsionar as vendas online."
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519993230833',
                    text: 'Agende Uma Consultoria',
                    additionalText: 'Fale Conosco',
                }}
                img={heroBg}
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
                background={benefitsBg}
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
                        icon: icon1,
                        question:
                            'Qual é a diferença entre um website e um e-commerce?',
                        answer: 'Um website é uma plataforma online que apresenta informações sobre uma empresa, seus produtos e serviços. Ele pode ser usado para diversos fins, como divulgação institucional, geração de leads e relacionamento com clientes. Já um e-commerce é uma loja virtual que permite a venda de produtos ou serviços online. Ele possui funcionalidades específicas, como carrinho de compras, métodos de pagamento e integração com sistemas de gestão.',
                    },
                    {
                        icon: icon2,
                        question:
                            'Por que ter um website ou e-commerce é importante para o meu negócio?',
                        answer: 'Ter um website ou e-commerce é essencial para qualquer negócio nos dias de hoje. Eles são a porta de entrada para a sua empresa no mundo digital, permitindo que os clientes encontrem informações sobre seus produtos e serviços a qualquer hora e de qualquer lugar. Além disso, um website bem estruturado e funcional pode aumentar a visibilidade da sua marca, impulsionar as vendas online e fortalecer o relacionamento com os clientes.',
                    },
                    {
                        icon: icon3,
                        question:
                            'Como posso garantir que meu website ou e-commerce seja bem-sucedido?',
                        answer: 'Para garantir o sucesso do seu website ou e-commerce, é importante investir em um design responsivo e intuitivo, que proporcione uma experiência agradável para os usuários. Além disso, é fundamental integrar funcionalidades como carrinho de compras, métodos de pagamento seguros e análise de dados para otimizar a performance e impulsionar as vendas. Por fim, é essencial realizar testes e otimizações contínuas para garantir que o site funcione corretamente e esteja alinhado com os objetivos do seu negócio.',
                    },
                    {
                        icon: icon4,
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
