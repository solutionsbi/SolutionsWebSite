import Hero from './Sections/Hero'
import Timeline from './Sections/Timeline'
import Solucoes from './Sections/Solucoes'
import Cta from './Sections/Cta'

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
                img={'/src/assets/images/Background/14.jpeg'}
                position="center"
            />
            <Timeline />
            <Solucoes title={true} />
            <Cta />
        </div>
    )
}
