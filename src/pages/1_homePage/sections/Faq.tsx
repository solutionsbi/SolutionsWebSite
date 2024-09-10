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
            answer: 'A inteligência artificial pode automatizar processos, fornecer insights através da análise de grandes volumes de dados, melhorar a personalização de serviços e produtos, e otimizar a tomada de decisões com base em padrões e tendências que seriam difíceis de identificar manualmente. Ela pode transformar a eficiência operacional e criar vantagens competitivas significativas.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/sistemas-personalizados.svg',
            title: 'Quais são os principais benefícios de usar um sistema personalizado?',
            answer: 'Um sistema personalizado é desenvolvido para atender exatamente às necessidades específicas da sua empresa, garantindo maior eficiência e usabilidade. Ele pode ser escalado de acordo com o crescimento do seu negócio, integrar-se perfeitamente com outros sistemas já existentes e oferecer uma vantagem competitiva única ao proporcionar funcionalidades específicas que soluções genéricas não conseguem.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/inteligencia-artificial.svg',
            title: 'Qual é o processo de implementação das soluções?',
            answer: 'O processo de implementação começa com uma fase de planejamento detalhada, onde definimos os requisitos do projeto em conjunto com o cliente. Em seguida, passamos para a fase de desenvolvimento, que é dividida em sprints para permitir ajustes contínuos. Após a conclusão do desenvolvimento, realizamos testes rigorosos para garantir a qualidade. Por fim, fazemos a implantação e oferecemos suporte contínuo para assegurar o sucesso da solução implementada.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/transformacao-digital.svg',
            title: 'Qual é o processo de implementação das soluções?',
            answer: 'O processo de implementação começa com uma fase de planejamento detalhada, onde definimos os requisitos do projeto em conjunto com o cliente. Em seguida, passamos para a fase de desenvolvimento, que é dividida em sprints para permitir ajustes contínuos. Após a conclusão do desenvolvimento, realizamos testes rigorosos para garantir a qualidade. Por fim, fazemos a implantação e oferecemos suporte contínuo para assegurar o sucesso da solução implementada.',
        },
        {
            icon: 'src/assets/svg/services-cards-icons/websites-ecommerce.svg',
            title: 'Como garantir a segurança dos dados ao implementar novas soluções?',
            answer: 'Garantir a segurança dos dados é uma prioridade em todos os nossos projetos. Implementamos práticas rigorosas de segurança, como criptografia de dados, controles de acesso baseados em permissões, e auditorias regulares. Além disso, trabalhamos com as melhores práticas da indústria para assegurar que as soluções estejam em conformidade com as normas de segurança, como GDPR e LGPD, garantindo que seus dados estejam sempre protegidos.',
        },
    ]

    return (
        <section className="relative">
            <div className="absolute left-0 top-0 -z-50 h-full w-full translate-y-[-15%] 2xl:translate-y-[-10%] 3xl:translate-y-[0%]">
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
