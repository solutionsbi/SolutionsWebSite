import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type FaqProps = {
    faqs: Faq[]
}

type Faq = {
    icon: string
    question: string
    answer: string
}

export default function Faq({ faqs }: FaqProps) {
    return (
        <section className="page-section">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <h2 className="mb-14 text-center lg:mb-20">
                        <span className="text-brand-blue"> perguntas</span>{' '}
                        frequentes
                    </h2>

                    <Accordion
                        type="single"
                        className="mx-auto grid w-full max-w-[992px] items-start justify-stretch gap-4"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="gradient-border rounded-lg bg-gradient-to-br from-neutral-darkest/40 transition-all duration-300 ease-in-out hover:border-brand-blue hover:shadow-lg"
                            >
                                <AccordionTrigger className="">
                                    <div className="flex items-center gap-6 text-left font-inter font-medium xl:text-lg">
                                        <img
                                            src={faq.icon}
                                            alt=""
                                            className="hidden h-8 w-8 md:block"
                                        />
                                        <h3 className="font-inter font-medium normal-case lg:text-md xl:text-lg">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-neutral-300 lg:text-base">
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
