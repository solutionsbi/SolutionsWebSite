import Hero from './sections/1_Hero/Hero'
import Timeline from './sections/2_Timeline/Timeline'
import Valores from './sections/3_Valores/Valores'
import Solucoes from './sections/4_Solucoes/Solucoes'
import Cta from '../1_homePage/sections/7_Cta/Cta'

export default function Sobre() {
    return (
        <div className="grid">
            <Hero />
            <Timeline />
            <Valores />
            <Solucoes />
            <Cta />
        </div>
    )
}
