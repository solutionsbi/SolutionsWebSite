import { Header30 } from '../../components/relume/Header30'
import { Gallery18 } from '../../components/relume/Gallery18'
import { Layout245 } from '../../components/relume/Layout245'
import { Gallery6 } from '../../components/relume/Gallery6'
import { WorldMap } from '../../components/custom/WorldMap'
import { Layout393 } from '../../components/relume/Layout393'
import { Faq4 } from '../../components/relume/Faq4'
import { Cta1 } from '../../components/relume/Cta1'

export default function Home() {
    return (
        <div className="grid overflow-hidden">
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
