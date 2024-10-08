import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'

import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import EgenhariaDeDados from './Pages/EngenhariaDeDados'
import BusinessIntelligence from './Pages/BusinessIntelligence'
import SistemasPersonalizados from './Pages/SistemasPersonalizados'
import InteligenciaArtificial from './Pages/InteligenciaArtificial'
import TransformacaoDigital from './Pages/TransformacaoDigital'
import WebsistesEcommerce from './Pages/WebsitesEcommerce'
import PoliticaDePrivacidade from './Pages/PoliticaDePrivacidade'
import NotFound from './Pages/NotFound'

function App() {
    return (
        <ReactLenis root>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="sobre" element={<Sobre />} />
                        <Route
                            path="engenharia-de-dados"
                            element={<EgenhariaDeDados />}
                        />
                        <Route
                            path="business-intelligence"
                            element={<BusinessIntelligence />}
                        />
                        <Route
                            path="sistemas-personalizados"
                            element={<SistemasPersonalizados />}
                        />
                        <Route
                            path="inteligencia-artificial"
                            element={<InteligenciaArtificial />}
                        />
                        <Route
                            path="transformacao-digital"
                            element={<TransformacaoDigital />}
                        />
                        <Route
                            path="websites-e-ecommerces"
                            element={<WebsistesEcommerce />}
                        />
                        <Route
                            path="politica-de-privacidade"
                            element={<PoliticaDePrivacidade />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ReactLenis>
    )
}

export default App
