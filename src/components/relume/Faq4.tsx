import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from '@relume_io/relume-ui'

import React from 'react'

import { RxPlus } from 'react-icons/rx'

type QuestionsProps = {
    icon: string
    title: string
    answer: string
}

type Props = {
    tagline: string
    heading: React.ReactNode
    questions: QuestionsProps[]
}

export type Faq4Props = React.ComponentPropsWithoutRef<'div'> & Partial<Props>

export const Faq4 = (props: Faq4Props) => {
    const { heading, questions } = {
        ...props,
    } as Props
    return (
        <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-xl">
                <div className="rb-12 mb-12 flex flex-col items-center text-center md:mb-18 lg:mb-20">
                    <div className="mb-5 flex items-center gap-4">
                        <img src="/src/assets/svg/small-logo.png" alt="" />
                        <p className="font-semibold uppercase">
                            {props.tagline}
                        </p>
                    </div>
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start justify-stretch gap-4"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-2xl border border-white/10 bg-neutral-darkest/50 px-5 backdrop-blur md:px-6"
                        >
                            <AccordionTrigger
                                icon={
                                    <RxPlus className="size-7 shrink-0 p-1 transition-transform duration-300 md:size-8" />
                                }
                                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                            >
                                <div className="flex items-center gap-6">
                                    <img src={question.icon} alt="" />
                                    {question.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6">
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
