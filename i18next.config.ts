import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        supportedLngs: ['pt', 'en'],
        lng: 'pt', // Set default language to Portuguese
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        react: {
            useSuspense: true,
        },
    })

export default i18n
