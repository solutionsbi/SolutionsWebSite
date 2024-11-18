import { useEffect, useState } from 'react'
import i18next from 'i18next'

interface I18nextWrapperProps {
    children: React.ReactNode
}

export function I18nextWrapper({ children }: I18nextWrapperProps) {
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const init = async () => {
            await i18next.loadNamespaces('translation')
            setIsInitialized(true)
        }
        init()
    }, [])

    if (!isInitialized) {
        return <div>Loading...</div> // Or your loading component
    }

    return <>{children}</>
}
