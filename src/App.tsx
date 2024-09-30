import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'

import Layout from '@/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import DataEngineering from '@/pages/DataEngineering'
import BusinessIntelligence from '@/pages/BusinessIntelligence'
import CustomSystems from '@/pages/CustomSystems'
import ArtificialIntelligence from '@/pages/ArtificialIntelligence'
import DigitalTransformation from '@/pages/DigitalTransformation'
import WebsitesEcommerces from '@/pages/WebsitesEcommerces'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import NotFound from '@/pages/NotFound'

function App() {
    return (
        <ReactLenis root>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        {/* <Route path="sobre" element={<About />} /> */}
                        {/* <Route
                            path="engenharia-de-dados"
                            element={<DataEngineering />}
                        /> */}
                        {/* <Route
                            path="business-intelligence"
                            element={<BusinessIntelligence />}
                        /> */}
                        {/* <Route
                            path="sistemas-personalizados"
                            element={<CustomSystems />}
                        /> */}
                        {/* <Route
                            path="inteligencia-artificial"
                            element={<ArtificialIntelligence />}
                        /> */}
                        {/* <Route
                            path="transformacao-digital"
                            element={<DigitalTransformation />}
                        /> */}
                        {/* <Route
                            path="websites-e-ecommerces"
                            element={<WebsitesEcommerces />}
                        /> */}
                        {/* <Route
                            path="politica-de-privacidade"
                            element={<PrivacyPolicy />}
                        /> */}
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ReactLenis>
    )
}

export default App
