import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18nextconfig'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback="Loading...">
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Suspense>
    </StrictMode>
)
