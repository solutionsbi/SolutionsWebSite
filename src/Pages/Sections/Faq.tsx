import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

import icon1 from '@/assets/svg/abstract-icons/icon1.svg'
import icon2 from '@/assets/svg/abstract-icons/icon2.svg'
import icon3 from '@/assets/svg/abstract-icons/icon3.svg'
import icon4 from '@/assets/svg/abstract-icons/icon4.svg'
import icon5 from '@/assets/svg/abstract-icons/icon5.svg'

const icons = [icon1, icon2, icon3, icon4, icon5]

export type Faq = {
    question: string
    answer: string
}

type FaqProps = {
    faqs: Faq[]
}

export default function Faq({ faqs }: FaqProps) {
    const { t } = useTranslation()
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

            // set initial styles to prevent flashing of unstyled content
            gsap.set(sectionTitle, {
                autoAlpha: 0,
                y: 100,
            })
            gsap.set(sectionFaqs, {
                autoAlpha: 0,
                y: -100,
            })

            // create timeline for section animation
            sectionTl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    markers: false,
                },
                defaults: {
                    duration: 1,
                    ease: 'power4.out',
                },
            })

            // add animation to section elements
            sectionTl.current
                .to(sectionTitle, {
                    autoAlpha: 1,
                    y: 0,
                })
                .to(
                    sectionFaqs,
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.2,
                    },
                    '<+=0.2'
                )
        },
        { scope: container }
    )

    return (
        <section ref={container} className="page-section">
            <div className="container grid h-full items-center">
                <div className="flex w-full flex-col items-center">
                    <h2 className="section-title mb-14 text-center lg:mb-20">
                        <span className="text-brand-blue">
                            {' '}
                            {t('pages.home.sections.faq.title.part1')}
                        </span>{' '}
                        <br />
                        {t('pages.home.sections.faq.title.part2')}
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
                                                src={icons[index]}
                                                alt=""
                                                className="hidden h-8 w-8 md:block"
                                            />
                                            <h3 className="font-inter normal-case lg:text-md xl:text-lg">
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
