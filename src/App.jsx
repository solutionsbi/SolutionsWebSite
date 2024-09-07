// desc: Main component of the application, where the routes are defined and the layout is imported.

// ----------------------------------------------
// Importing dependencies
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing components and pages
import Layout from './pages/0_layout/Layout'
import Home from './pages/1_homePage/Home'
import Sobre from './pages/2_sobre/Sobre'
import EgenhariaDeDados from './pages/3_serviços/1_engenhariaDeDados/EngenhariaDeDados'
import BusinessIntelligence from './pages/3_serviços/2_businessIntelligence/BusinessIntelligence'
import SistemasPersonalizados from './pages/3_serviços/3_sistemasPersonalizados/SistemasPersonalizados'
import InteligenciaArtificial from './pages/3_serviços/4_inteligenciaArtificial/InteligenciaArtificial'
import TransformacaoDigital from './pages/3_serviços/5_transformacaoDigital/TransformacaoDigital'
import WebsistesEcommerce from './pages/3_serviços/6_websitesEcommerce/WebsitesEcommerce'
import PoliticaDePrivacidade from './pages/4_politicaDePrivacidade/PoliticaDePrivacidade'

// ----------------------------------------------

// Main component of the application
function App() {
    return (
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
                        path="websites-&-ecommerce"
                        element={<WebsistesEcommerce />}
                    />
                    <Route
                        path="politica-de-privacidade"
                        element={<PoliticaDePrivacidade />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
