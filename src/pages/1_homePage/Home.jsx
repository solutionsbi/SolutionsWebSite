import Hero from './sections/Hero'
import Servicos from './sections/Servicos'
import Partners from './sections/Partners'
import WorldMap from './sections/WorldMap'
import Stats from './sections/Stats'
import Faq from './sections/Faq'
import Cta from './sections/Cta'

export default function Home() {
    return (
        <div className="grid">
            <Hero />
            <Servicos />
            <Partners />
            <WorldMap />
            <Stats />
            <Faq />
            <Cta />
        </div>
    )
}
