import { useTranslation } from 'react-i18next'

import Hero from './Sections/Hero'
import Solucoes from './Sections/Solucoes'
import Partners from './Sections/Partners'
import { Map } from './Sections/Map'
import Benefícios, { Benefit as BenefitType } from './Sections/Beneficios'
import Faq, { Faq as FaqType } from './Sections/Faq'
import Cta from './Sections/Cta'

import heroImage from '@/assets/images/Background/11.jpeg'
import benefitsImage from '@/assets/images/Background/firefly/6.jpg'

export default function Home() {
    const { t } = useTranslation()

    return (
        <div className="grid">
            <Hero
                position="center"
                title={
                    <>
                        {t('paginas.home.sections.hero.title.part1')}{' '}
                        <span className="text-brand-blue">
                            {t('paginas.home.sections.hero.title.part2')}
                        </span>
                        <br className="hidden md:inline-block" />
                        {t('paginas.home.sections.hero.title.part3')}
                    </>
                }
                description={t('paginas.home.sections.hero.description')}
                cta={{
                    text: t('paginas.home.sections.hero.cta.text'),
                    href: '/sobre',
                    additionalText: t(
                        'paginas.home.sections.hero.cta.additionalText'
                    ),
                    linkType: 'internal',
                }}
                img={heroImage}
            />
            <Solucoes />
            <Partners />
            <Map />
            <Benefícios
                title={
                    <>
                        {t('paginas.home.sections.benefits.title.part1')}{' '}
                        <span className="text-brand-blue">
                            {t('paginas.home.sections.benefits.title.part2')}
                        </span>
                    </>
                }
                background={benefitsImage}
                description={t('paginas.home.sections.benefits.description')}
                benefits={t<string, { returnObjects: true }, BenefitType[]>(
                    'paginas.home.sections.benefits.cards',
                    { returnObjects: true }
                )}
                cta={{
                    href: '/sobre',
                    text: t('paginas.home.sections.benefits.cta.text'),
                    additionalText: t(
                        'paginas.home.sections.benefits.cta.additionalText'
                    ),
                    linkType: 'internal',
                }}
            />
            <Faq
                faqs={t<string, { returnObjects: true }, FaqType[]>(
                    'paginas.home.sections.faq.cards',
                    { returnObjects: true }
                )}
            />
            <Cta />
        </div>
    )
}
