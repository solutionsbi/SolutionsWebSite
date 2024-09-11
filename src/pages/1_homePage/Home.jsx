import Hero from './sections/Hero'
import Solucoes from './sections/Solucoes/Solucoes'
import Partners from './sections/Partners'
import WorldMap from './sections/WorldMap'
import Stats from './sections/Stats'
import Faq from './sections/Faq'
import Cta from './sections/Cta'

export default function Home() {
    return (
        <div className="grid">
            <Hero />
            <Solucoes />
            <Partners />
            <WorldMap />
            <Stats />
            <Faq />
            <Cta />
        </div>
    )
}
