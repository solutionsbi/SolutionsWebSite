import {
    Button,
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from '@relume_io/relume-ui'

import React from 'react'

import type { ButtonProps } from '@relume_io/relume-ui'
import { RxPlus } from 'react-icons/rx'

type QuestionsProps = {
    title: string
    answer: string
}

type Props = {
    heading: string
    description: string
    footerHeading: string
    footerDescription: string
    button: ButtonProps
    questions: QuestionsProps[]
}

export type Faq4Props = React.ComponentPropsWithoutRef<'section'> &
    Partial<Props>

export const Faq4 = (props: Faq4Props) => {
    const {
        heading,
        description,
        questions,
        footerHeading,
        footerDescription,
        button,
    } = {
        ...Faq4Defaults,
        ...props,
    } as Props
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-lg">
                <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start justify-stretch gap-4"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border-primary px-5 md:px-6"
                        >
                            <AccordionTrigger
                                icon={
                                    <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                                }
                                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                            >
                                {question.title}
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6">
                                {question.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        {footerHeading}
                    </h4>
                    <p className="md:text-md">{footerDescription}</p>
                    <div className="mt-6 md:mt-8">
                        <Button {...button}>{button.title}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Faq4Defaults: Faq4Props = {
    heading: 'FAQs',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    questions: [
        {
            title: 'Question text goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            title: 'Question text goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            title: 'Question text goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            title: 'Question text goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
        {
            title: 'Question text goes here',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
    ],
    footerHeading: 'Still have questions?',
    footerDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: {
        title: 'Contact',
        variant: 'secondary',
    },
}
