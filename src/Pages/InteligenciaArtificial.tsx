import { useTranslation } from 'react-i18next'

import Hero from './Sections/Hero'
import ComoFunciona from './Sections/ComoFunciona'
import Beneficios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroBg from '@/assets/images/Background/34.webp'

export default function InteligenciaArtificial() {
    const { t } = useTranslation()

    const translations = t('pages.solutions.items.inteligenciaArtificial', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <>
            <Hero
                className="h-[80vh]"
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
                description={translations.description.long}
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519983085819',
                    text: t('buttons.agende-uma-consultoria'),
                    additionalText: t('buttons.fale-conosco'),
                    linkType: 'external',
                }}
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
                description={translations.benefits.description}
                benefits={translations.benefits.cards.map(
                    (card: any, index: any) => ({
                        title: card.title,
                        description: card.description,
                    })
                )}
                cta={{
                    href: 'https://api.whatsapp.com/send?phone=5519983085819',
                    text: t('buttons.agende-uma-consultoria'),
                    additionalText: t('buttons.fale-conosco'),
                    linkType: 'external',
                }}
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
