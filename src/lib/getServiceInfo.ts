import { TFunction } from 'i18next'

import { IconArtificialIntelligence } from '@/components/icons/servicesIcons'
import { IconDataEngineering } from '@/components/icons/servicesIcons'
import { IconBusinessIntelligence } from '@/components/icons/servicesIcons'
import { IconCustomSystems } from '@/components/icons/servicesIcons'
import { IconWebsitesAndEcommerces } from '@/components/icons/servicesIcons'
import { IconDigitalTransformation } from '@/components/icons/servicesIcons'
import bgArtificialIntelligence from '@/assets/images/backgrounds/bg-artificial-intelligence.jpeg'
import bgDataEngineering from '@/assets/images/backgrounds/1.jpeg'
import bgBusinessIntelligence from '@/assets/images/backgrounds/2.jpeg'
import bgCustomSystems from '@/assets/images/backgrounds/4.jpeg'
import bgWebsitesAndEcommerces from '@/assets/images/backgrounds/5.jpeg'
import bgDigitalTransformation from '@/assets/images/backgrounds/11.jpeg'
interface ServiceInfo {
    title: string
    description: {
        short: string
        medium: string
        long: string
    }
    url: string
    backgroundImage: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    howItWorks: Record<string, string>
    benefits: Record<string, string>
    faq: Record<string, string>
}

export const getServiceInfo = (t: TFunction): ServiceInfo[] => [
    {
        title: t('pages.services.artificialIntelligence.title'),
        description: {
            short: t('pages.services.artificialIntelligence.description.short'),
            medium: t(
                'pages.services.artificialIntelligence.description.medium'
            ),
            long: t('pages.services.artificialIntelligence.description.long'),
        },
        url: '/solucoes/inteligencia-artificial',
        backgroundImage: bgArtificialIntelligence,
        icon: IconArtificialIntelligence,
        howItWorks: t('pages.services.artificialIntelligence.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.artificialIntelligence.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.artificialIntelligence.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
    {
        title: t('pages.services.dataEngineering.title'),
        description: {
            short: t('pages.services.dataEngineering.description.short'),
            medium: t('pages.services.dataEngineering.description.medium'),
            long: t('pages.services.dataEngineering.description.long'),
        },
        url: '/solucoes/engenharia-de-dados',
        backgroundImage: bgDataEngineering,
        icon: IconDataEngineering,
        howItWorks: t('pages.services.dataEngineering.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.dataEngineering.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.dataEngineering.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
    {
        title: t('pages.services.businessIntelligence.title'),
        description: {
            short: t('pages.services.businessIntelligence.description.short'),
            medium: t('pages.services.businessIntelligence.description.medium'),
            long: t('pages.services.businessIntelligence.description.long'),
        },
        url: '/solucoes/bi',
        backgroundImage: bgBusinessIntelligence,
        icon: IconBusinessIntelligence,
        howItWorks: t('pages.services.businessIntelligence.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.businessIntelligence.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.businessIntelligence.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
    {
        title: t('pages.services.customSystems.title'),
        description: {
            short: t('pages.services.customSystems.description.short'),
            medium: t('pages.services.customSystems.description.medium'),
            long: t('pages.services.customSystems.description.long'),
        },
        url: '/solucoes/bi',
        backgroundImage: bgCustomSystems,
        icon: IconCustomSystems,
        howItWorks: t('pages.services.customSystems.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.customSystems.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.customSystems.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
    {
        title: t('pages.services.websitesAndEcommerces.title'),
        description: {
            short: t('pages.services.websitesAndEcommerces.description.short'),
            medium: t(
                'pages.services.websitesAndEcommerces.description.medium'
            ),
            long: t('pages.services.websitesAndEcommerces.description.long'),
        },
        url: '/solucoes/bi',
        backgroundImage: bgWebsitesAndEcommerces,
        icon: IconWebsitesAndEcommerces,
        howItWorks: t('pages.services.websitesAndEcommerces.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.websitesAndEcommerces.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.websitesAndEcommerces.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
    {
        title: t('pages.services.digitalTransformation.title'),
        description: {
            short: t('pages.services.digitalTransformation.description.short'),
            medium: t(
                'pages.services.digitalTransformation.description.medium'
            ),
            long: t('pages.services.digitalTransformation.description.long'),
        },
        url: '/solucoes/bi',
        backgroundImage: bgDigitalTransformation,
        icon: IconDigitalTransformation,
        howItWorks: t('pages.services.digitalTransformation.howItWorks', {
            returnObjects: true,
        }) as Record<string, string>,
        benefits: t('pages.services.digitalTransformation.benefits', {
            returnObjects: true,
        }) as Record<string, string>,
        faq: t('pages.services.digitalTransformation.faq', {
            returnObjects: true,
        }) as Record<string, string>,
    },
]
