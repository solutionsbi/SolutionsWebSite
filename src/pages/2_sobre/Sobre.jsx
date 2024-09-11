import Hero from './sections/1_Hero/Hero'
import Timeline from './sections/2_Timeline/Timeline'
import Valores from './sections/3_Valores/Valores'

export default function Sobre() {
    return (
        <div className="grid">
            <Hero />
            <Timeline />
            <Valores />
        </div>
    )
}
