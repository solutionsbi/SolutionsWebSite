/**
 * This file contains React components for service icons used in the application.
 *
 * Components:
 * - IconDataEngineering
 * - IconBusinessIntelligence
 * - IconCustomSystems
 * - IconArtificialIntelligence
 * - IconDigitalTransformation
 * - IconWebsitesAndEcommerces
 *
 * Each component is a functional component that renders an SVG icon as an <img> element.
 * They accept a 'className' prop for custom styling.
 *
 * Usage example:
 * import { IconDataEngineering } from '@/components/icons/servicesIcons';
 *
 * function MyComponent() {
 *   return <IconDataEngineering className="w-6 h-6" />;
 * }
 *
 * The icons are imported from the '@/assets/svg/services-icons/' directory.
 */

import React from 'react'
import iconDataEngineering from '@/assets/svg/services-icons/icon-data-engineering.svg'
import iconBusinessIntelligence from '@/assets/svg/services-icons/icon-business-intelligence.svg'
import iconCustomSystems from '@/assets/svg/services-icons/icon-custom-systems.svg'
import iconArtificialIntelligence from '@/assets/svg/services-icons/icon-artificial-intelligence.svg'
import iconDigitalTransformation from '@/assets/svg/services-icons/icon-digital-transformation.svg'
import iconWebsitesAndEcommerces from '@/assets/svg/services-icons/icon-websites-and-ecommerce.svg'

interface IconProps {
    className?: string
}

export const IconDataEngineering: React.FC<IconProps> = ({ className }) => (
    <img
        src={iconDataEngineering}
        alt="Data Engineering"
        className={className}
    />
)

export const IconBusinessIntelligence: React.FC<IconProps> = ({
    className,
}) => (
    <img
        src={iconBusinessIntelligence}
        alt="Business Intelligence"
        className={className}
    />
)

export const IconCustomSystems: React.FC<IconProps> = ({ className }) => (
    <img src={iconCustomSystems} alt="Custom Systems" className={className} />
)

export const IconArtificialIntelligence: React.FC<IconProps> = ({
    className,
}) => (
    <img
        src={iconArtificialIntelligence}
        alt="Artificial Intelligence"
        className={className}
    />
)

export const IconDigitalTransformation: React.FC<IconProps> = ({
    className,
}) => (
    <img
        src={iconDigitalTransformation}
        alt="Digital Transformation"
        className={className}
    />
)

export const IconWebsitesAndEcommerces: React.FC<IconProps> = ({
    className,
}) => (
    <img
        src={iconWebsitesAndEcommerces}
        alt="Websites and E-commerces"
        className={className}
    />
)
