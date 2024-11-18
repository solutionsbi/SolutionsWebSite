import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18nextconfig'
import { I18nextWrapper } from './components/I18nextWrapper'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <I18nextWrapper>
                <App />
            </I18nextWrapper>
        </I18nextProvider>
    </StrictMode>
)
