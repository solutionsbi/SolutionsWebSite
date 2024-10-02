import { useTranslation } from 'react-i18next'

import Hero from './Sections/Hero'
import Solucoes from './Sections/Solucoes'
import Partners from './Sections/Partners'
import { Map } from './Sections/Map'
import Benefícios from './Sections/Beneficios'
import Faq from './Sections/Faq'
import Cta from './Sections/Cta'

import heroBackgroundImage from '@/assets/optimized-imgs/1.webp'
import benefitsBackgroundImage from '@/assets/webp-imgs/3.webp'

export default function Home() {
    const { t } = useTranslation()

    const homeData = t('pages.home', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <div className="grid">
            <Hero
                className="h-[64vh]"
                position="center"
                title={
                    <>
                        {homeData.sections.hero.title.part1}{' '}
                        <span className="text-brand-blue">
                            {homeData.sections.hero.title.part2}{' '}
                        </span>
                        <br className="hidden md:inline-block" />
                        {homeData.sections.hero.title.part3}
                    </>
                }
                description={homeData.sections.hero.description}
                cta={{
                    text: homeData.sections.hero.cta.text,
                    additionalText: homeData.sections.hero.cta.additionalText,
                    href: '/sobre',
                    linkType: 'external',
                }}
                img={heroBackgroundImage}
            />
            <Solucoes />
            <Partners />
            <Map />
            <Benefícios
                title={
                    <>
                        {homeData.sections.benefits.title.part1} <br />
                        <span className="text-brand-blue">
                            {homeData.sections.benefits.title.part2}
                        </span>
                    </>
                }
                background={benefitsBackgroundImage}
                description={homeData.sections.benefits.description}
                benefits={homeData.sections.benefits.cards.map((card: any) => ({
                    title: card.title,
                    description: card.description,
                }))}
                cta={{
                    href: '/sobre',
                    text: t('buttons.saiba-mais'),
                    additionalText: t('buttons.sobre-nos'),
                    linkType: 'internal',
                }}
            />
            <Faq
                faqs={homeData.sections.faq.questions.map((faq: any) => ({
                    question: faq.question,
                    answer: faq.answer,
                }))}
            />
            <Cta />
        </div>
    )
}
