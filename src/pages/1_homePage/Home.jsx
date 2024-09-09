import Hero from './sections/Hero'
import Servicos from './sections/Servicos'
import Partners from './sections/Partners'

export default function Home() {
    return (
        <div className="grid">
            <Hero />
            <Servicos />
            <Partners />
        </div>
    )
}
