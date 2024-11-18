import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        supportedLngs: ['pt', 'en'],
        lng: 'pt',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            crossDomain: true,
            withCredentials: true,
        },
        react: {
            useSuspense: false,
        },
        ns: ['translation'],
        defaultNS: 'translation',
        initImmediate: false,
    })

export default i18n
