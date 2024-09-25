import { useTranslation } from 'react-i18next'

import Hero from './Sections/Hero'
import Timeline from './Sections/Timeline'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroImage from '@/assets/images/Background/14.jpeg'

export default function Sobre() {
    const { t } = useTranslation()

    return (
        <div className="grid">
            <Hero
                title={
                    <>
                        <span className="text-brand-blue">
                            {t('pages.about.sections.hero.title.part1')}
                        </span>{' '}
                        <br /> {t('pages.about.sections.hero.title.part2')}
                    </>
                }
                description={t('pages.about.sections.hero.description')}
                img={heroImage}
                position="center"
            />
            <Timeline />
            <Solucoes title={true} />
            <Cta />
        </div>
    )
}
