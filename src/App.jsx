// desc: Main component of the application, where the routes are defined and the layout is imported.

// ----------------------------------------------
// Importing dependencies
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing components and pages
import Layout from './components/Layout/Layout'
import Home from './pages/HomePage/Home'
import Sobre from './pages/Sobre/Sobre'
import EgenhariaDeDados from './pages/Serviços/EngenhariaDeDados'
import BusinessIntelligence from './pages/Serviços/BusinessIntelligence'
import SistemasPersonalizados from './pages/Serviços/SistemasPersonalizados'
import InteligenciaArtificial from './pages/Serviços/InteligenciaArtificial'
import TransformacaoDigital from './pages/Serviços/TransformacaoDigital'
import WebsistesEcommerce from './pages/Serviços/WebsitesEcommerce'
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade/PoliticaDePrivacidade'

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
                        path="websites-&-ecommercer"
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
