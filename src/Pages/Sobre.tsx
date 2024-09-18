import Hero from './Sections/Hero'
import Timeline from './Sections/Timeline'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

import heroImage from '@/assets/images/Background/14.jpeg'

export default function Sobre() {
    return (
        <div className="grid">
            <Hero
                title={
                    <>
                        <span className="text-brand-blue">conheça a</span>{' '}
                        <br /> solutions BI
                    </>
                }
                description={
                    'Saiba mais sobre nossa história e como tudo começou.'
                }
                img={heroImage}
                position="center"
            />
            <Timeline />
            <Solucoes title={true} />
            <Cta />
        </div>
    )
}
