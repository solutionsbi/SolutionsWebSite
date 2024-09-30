/**
 * This file contains the getContactInfo function and ContactInfo type definition.
 *
 * The getContactInfo function:
 * - Purpose: Provides an array of contact information objects.
 * - Input: Takes a translation function (t) as an argument.
 * - Output: Returns an array of objects, each representing a contact method (WhatsApp, Email, Location).
 *
 * Each contact object includes:
 * - title: Translated title of the contact method
 * - url: URL or action link for the contact method
 * - description: Detailed information about the contact method
 * - icon: Corresponding icon component from react-icons
 *
 * The ContactInfo type is derived from the return type of getContactInfo,
 * representing a single contact information object.
 */

import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import { TFunction } from 'i18next'

export const getContactInfo = (t: TFunction) => [
    {
        title: 'WhatsApp',
        url: 'https://api.whatsapp.com/send?phone=5519983085819&text=Olá!%20estou%20interessado%20em%20saber%20mais%20sobre%20as%20suas%20solu%C3%A7%C3%B5es%20para%20neg%C3%B3cios.',
        description: '+55 (19) 98308-5819',
        icon: FaWhatsapp,
    },
    {
        title: 'Email',
        url: 'mailto:contato@solutionsbi.com.br',
        description: 'contato@solutionsbi.com.br',
        icon: MdEmail,
    },
    {
        title: t('contactInfo.location'),
        url: 'https://www.google.com/maps/place/Rua+Treze+de+Maio,+257+-+Centro,+Limeira+-+SP,+13480-082/@-22.0643365,-47.4006336,17z/data=!3m1!4b1!4m6!3m5!1s0x94c98a6742248333:0x3283242822822222!8m2!3d-22.0643365!4d-47.3980589!16s%2Fg%2F11c5r4x6c1',
        description:
            'Rua Treze de maio, 257 \n 2º andar | Sala 21 \n Centro - Limeira/SP \n Cep: 13480-082',
        icon: FaMapLocationDot,
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/solutionsbi/',
        description: '@solutionsbi',
        icon: FaLinkedin,
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/solutionsbi/',
        description: '@solutionsbi',
        icon: FaInstagram,
    },
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/solutionsbi/',
        description: '@solutionsbi',
        icon: FaFacebookSquare,
    },
]

export type ContactInfo = ReturnType<typeof getContactInfo>[number]
