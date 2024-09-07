import { Header30 } from '../../components/ui/relume/Header30'
import { Gallery18 } from '../../components/ui/relume/Gallery18'
import { Layout245 } from '../../components/ui/relume/Layout245'
import { Gallery6 } from '../../components/ui/relume/Gallery6'
import { WorldMap } from '../../components/ui/Custom/WorldMap'
import { Layout393 } from '../../components/ui/relume/Layout393'
import { Faq4 } from '../../components/ui/relume/FAQ4'
import { Cta1 } from '../../components/ui/relume/CTA1'

export default function Home() {
    return (
        <div className="grid">
            <Header30 />
            <Gallery18 />
            <Layout245 />
            <Gallery6 />
            <WorldMap />
            <Layout393 />
            <Faq4 />
            <Cta1 />
        </div>
    )
}
