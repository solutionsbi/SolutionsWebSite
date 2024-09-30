import { useTranslation } from 'react-i18next'

import Hero from './sections/Hero'
import ComoFunciona from './sections/HowItWorks'
import Beneficios from './sections/Features'
import Faq from './sections/Faq'
import Solucoes from './sections/Services'
import Cta from './sections/Cta'

import heroBg from '@/assets/images/backgrounds/transformacao-digital.jpeg'
import benefitsBg from '@/assets/images/backgrounds/25.jpeg'

export default function TransformacaoDigital() {
    const { t } = useTranslation()

    const translations = t('pages.solutions.items.transformacaoDigital', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <>
            <Hero
                position="start"
                title={
                    <>
                        <span className="text-brand-blue">
                            {translations.title.part1}
                        </span>
                        <br />
                        {translations.title.part2}
                    </>
                }
                description={translations.description.medium}
                img={heroBg}
            />
            <ComoFunciona
                description={translations.howItWorks.description}
                steps={translations.howItWorks.steps.map(
                    (step: any, index: any) => ({
                        title: step.title,
                        description: step.description,
                    })
                )}
            />
            <Beneficios
                title={translations.benefits.title}
                background={benefitsBg}
                description={translations.benefits.description}
                benefits={translations.benefits.cards.map((card: any) => ({
                    title: card.title,
                    description: card.description,
                }))}
            />
            <Faq
                faqs={translations.faqs.questions.map(
                    (question: any, index: any) => ({
                        question: question.question,
                        answer: question.answer,
                    })
                )}
            />
            <Solucoes title={true} />
            <Cta />
        </>
    )
}
