import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type FaqProps = {
    faqs: Faq[]
}

type Faq = {
    icon: string
    question: string
    answer: string
}

export default function Faq({ faqs }: FaqProps) {
    const container = useRef<HTMLElement>(null)
    const sectionTl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            // check if container exists
            if (!container.current) return

            // get section elements to be animated
            const sectionTitle =
                container.current.querySelector('.section-title')
            const sectionFaqs = gsap.utils.toArray(
                container.current.querySelectorAll('.faq-item')
            )

            // console.group('FAQ Section Elements')
            // console.log('Section Title:', sectionTitle)
            // console.log('Section Faq:', sectionFaqs)
            // console.groupEnd()

            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionTitle, {
                opacity: 0,
                x: 20,
            })
            gsap.set(sectionFaqs, {
                opacity: 0,
                y: 50,
            })

            // create timeline for section animation
            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                },
                defaults: {
                    duration: 1.5,
                    ease: 'power1.inOut',
                },
            })

            // add animation to section elements
            sectionTl.current
                .to(sectionTitle, {
                    opacity: 1,
                    x: 0,
                })
                .to(
                    sectionFaqs,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                    },
                    '<+=0.5'
                )
        },
        { scope: container }
    )

    return (
        <section ref={container} className="page-section">
            <div className="container grid h-full items-center">
                <div className="flex w-full flex-col items-center">
                    <h2 className="section-title mb-14 text-center lg:mb-20">
                        <span className="text-brand-blue"> perguntas</span>{' '}
                        frequentes
                    </h2>

                    <Accordion
                        type="single"
                        className="mx-auto grid w-full max-w-[992px] items-start justify-stretch gap-4"
                    >
                        {faqs.map((faq, index) => (
                            <div className="faq-item" key={index}>
                                <AccordionItem
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
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
