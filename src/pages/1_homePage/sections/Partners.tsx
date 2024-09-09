import { Layout245 } from '@/components/relume/Layout245'
import { Gallery6 } from '@/components/relume/Gallery6'

export default function Partners() {
    const partnersData = [
        {
            src: '/src/assets/images/partner-logos/samsung.svg',
            alt: 'samsung',
        },
        {
            src: '/src/assets/images/partner-logos/ambev.png',
            alt: 'ambev',
        },
        {
            src: '/src/assets/images/partner-logos/abercrombie.svg',
            alt: 'abercrombie',
        },
        {
            src: '/src/assets/images/partner-logos/abrasce.png',
            alt: 'abrasce',
        },
        {
            src: '/src/assets/images/partner-logos/agropalma.svg',
            alt: 'agropalma',
        },
        {
            src: '/src/assets/images/partner-logos/coplacana.png',
            alt: 'coplacana',
        },
        {
            src: '/src/assets/images/partner-logos/galzerano.png',
            alt: 'galzerano',
        },
        {
            src: '/src/assets/images/partner-logos/lifetime.png',
            alt: 'lifetime',
        },
        {
            src: '/src/assets/images/partner-logos/medical.png',
            alt: 'medical',
        },
        {
            src: '/src/assets/images/partner-logos/odontoclinic.png',
            alt: 'odontoclinic',
        },
        {
            src: '/src/assets/images/partner-logos/sanavita.png',
            alt: 'sanavita',
        },
        {
            src: '/src/assets/images/partner-logos/swiss.png',
            alt: 'swiss',
        },
    ]

    return (
        <>
            <Layout245
                tagline="nossos clientes"
                heading={
                    <span className="">
                        somos parceiros de mais de 50 empresas{' '}
                        <span className="text-brand-blue">
                            ao redor do mundo
                        </span>
                    </span>
                }
                description="Empresas líderes de mercado de diferentes setores confiam em nossas soluções de dados e sistemas personalizados para superar desafios e conquistar resultados excepcionais."
            />
            <Gallery6 images={partnersData} />
        </>
    )
}
