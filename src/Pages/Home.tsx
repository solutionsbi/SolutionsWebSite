import { useTranslation } from 'react-i18next'

import { Hero, HeroTitle, HeroDescription, HeroButtons } from './sections/Hero'
import { Services, ServicesHeader, ServicesCarousel } from './sections/Services'
import Clients from './sections/Clients'
import Clients2 from './sections/Clients2'
import WorldMap from './sections/WorldMap'
import Benefícios from './sections/Features'
import Faq from './sections/Faq'
import Cta from './sections/Cta'
import { Link } from 'react-router-dom'
import { getContactInfo } from '@/lib/getContactInfo'
import { LearnMoreButton, WhatsappButton } from '@/components/CustomButtons'

import heroBackgroundImage from '@/assets/images/backgrounds/11.jpeg'
import heroBackgroundVideo from '@/assets/video/27.mov'
import benefitsBackgroundImage from '@/assets/images/backgrounds/firefly/6.jpg'

export default function Home() {
    const { t } = useTranslation()
    const contactInfo = getContactInfo(t)
    const translations = t('pages.home', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <div className="grid">
            <Hero backgroundVideo={heroBackgroundVideo}>
                <HeroTitle>{translations.sections.hero.title}</HeroTitle>
                <HeroDescription>
                    {translations.sections.hero.description}
                </HeroDescription>
                <HeroButtons>
                    <WhatsappButton href={contactInfo[0].url}>
                        {translations.sections.hero.button1}
                    </WhatsappButton>
                    <LearnMoreButton to="/services">
                        {translations.sections.hero.button2}
                    </LearnMoreButton>
                </HeroButtons>
            </Hero>
            <Services>
                <ServicesCarousel />
            </Services>
            <Clients2 />
            <WorldMap />
            {/* <Benefícios
                title={
                    <>
                        {translations.sections.benefits.title.part1} <br />
                        <span className="text-brand-blue">
                            {translations.sections.benefits.title.part2}
                        </span>
                    </>
                }
                background={benefitsBackgroundImage}
                description={translations.sections.benefits.description}
                benefits={translations.sections.benefits.cards.map(
                    (card: any) => ({
                        title: card.title,
                        description: card.description,
                    })
                )}
            /> */}
            {/* <Faq
                faqs={translations.sections.faq.questions.map((faq: any) => ({
                    question: faq.question,
                    answer: faq.answer,
                }))}
            /> */}
            {/* <Cta /> */}
        </div>
    )
}
