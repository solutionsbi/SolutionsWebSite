import { useTranslation } from 'react-i18next'

import Hero from './sections/Hero'
import ComoFunciona from './sections/HowItWorks'
import Beneficios from './sections/Features'
import Faq from './sections/Faq'
import Solucoes from './sections/Services'
import Cta from './sections/Cta'

import heroBg from '@/assets/images/backgrounds/business-intelligence.jpeg'
import benefitsBg from '@/assets/images/backgrounds/25.jpeg'

export default function BusinessIntelligence() {
    const { t } = useTranslation()

    const translations = t('pages.solutions.items.businessIntelligence', {
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
                benefits={translations.benefits.cards.map(
                    (card: any, index: any) => ({
                        title: card.title,
                        description: card.description,
                    })
                )}
            />
            <Faq
                faqs={translations.faqs.questions.map(
                    (faq: any, index: any) => ({
                        question: faq.question,
                        answer: faq.answer,
                    })
                )}
            />
            <Solucoes title={true} />
            <Cta />
        </>
    )
}
