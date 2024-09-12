import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type FaqProps = {
    title: React.ReactNode
    faqs: Faq[]
}

type Faq = {
    icon: string
    question: string
    answer: string
}

export default function Faq({ title, faqs }: FaqProps) {
    return (
        <section className="page-section">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <h2 className="mb-20">
                        <span className="text-brand-blue"> perguntas</span>{' '}
                        frequentes
                    </h2>

                    <Accordion
                        type="multiple"
                        className="mx-auto grid w-full max-w-xl items-start justify-stretch gap-4"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="gradient-border hover:shadow-lg rounded-lg bg-gradient-to-br from-neutral-darkest/40 px-10 py-4 transition-all duration-300 ease-in-out hover:border-brand-blue"
                            >
                                <AccordionTrigger className="md:py-5 md:text-md 3xl:py-7">
                                    <div className="flex items-center gap-6 text-left font-inter font-medium xl:text-lg">
                                        <img
                                            src={faq.icon}
                                            alt=""
                                            className="h-8 w-8"
                                        />
                                        <h3 className="">{faq.question}</h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="max-w-[80%] text-neutral-200 md:pb-6 xl:text-md 3xl:text-md">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
