import { useTranslation } from 'react-i18next'

import Hero from './sections/Hero'
import Timeline from './sections/Timeline'
import Solucoes from './sections/Services'
import Cta from './sections/Cta'

import heroImage from '@/assets/images/backgrounds/1.jpeg'

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
                className="h-[50vh]"
            />
            <Timeline />
            <Solucoes title={true} />
            <Cta />
        </div>
    )
}
