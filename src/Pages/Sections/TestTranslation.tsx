import React from 'react'
import { useTranslation } from 'react-i18next'

const TestTranslation: React.FC = () => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
    }

    return (
        <div>
            <button onClick={toggleLanguage}>{t('toggleLanguage')}</button>
            <h1>{t('greeting')}</h1>
            {/* Rest of your app */}
        </div>
    )
}

export default TestTranslation
