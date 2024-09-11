import Hero from './sections/1_Hero/Hero'
import Solucoes from './sections/2_Solucoes/Solucoes'
import Partners from './sections/3_Partners/Partners'
import WorldMap from './sections/4_World/WorldMap'
import Stats from './sections/5_Stats/Stats'
import Faq from './sections/6_Faq/Faq'
import Cta from './sections/7_Cta/Cta'

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
