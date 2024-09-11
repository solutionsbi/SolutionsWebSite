import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from '@relume_io/relume-ui'

import { RxPlus } from 'react-icons/rx'

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

export default function Faq() {
    return (
        <div id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-xl">
                <div className="container flex flex-col items-center text-center">
                    <div className="mb-3 flex items-center gap-4 md:mb-4">
                        <img
                            src="/src/assets/svg/small-logo.png"
                            alt=""
                            className="h-auto w-6"
                        />
                        <h2 className="text-xl font-semibold uppercase drop-shadow-custom">
                            tire suas dúvidas
                        </h2>
                    </div>
                    <h3 className="mb-20 text-5xl font-bold md:text-7xl lg:text-8xl">
                        <span className="text-brand-blue">saiba mais</span>{' '}
                        sobre <br /> nossas soluções
                    </h3>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start justify-stretch gap-4"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="card-bg px-10 py-4"
                        >
                            <AccordionTrigger
                                icon={
                                    <RxPlus className="size-7 shrink-0 p-1 transition-transform duration-300 md:size-8" />
                                }
                                className="md:py-5 md:text-md 3xl:py-7 [&[data-state=open]>svg]:rotate-45"
                            >
                                <div className="flex items-center gap-6 text-left font-inter font-medium 3xl:text-[22px]">
                                    <img
                                        src={question.icon}
                                        alt=""
                                        className="h-10 w-10"
                                    />
                                    {question.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6 3xl:text-md">
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
