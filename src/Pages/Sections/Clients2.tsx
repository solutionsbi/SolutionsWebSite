import ClientLogoCarousel from '@/components/ClientLogoCarousel'

import abercrombieLogo from '@/assets/client-logos/client-logo-abercombie&Fitch.png'
import abrasceLogo from '@/assets/client-logos/client-logo-abrasce.png'
import agropalmaLogo from '@/assets/client-logos/client-logo-agropalma.png'
import ambevLogo from '@/assets/client-logos/client-logo-ambev.png'
import coplacanaLogo from '@/assets/client-logos/client-logo-coplacana.png'
import datasystemLogo from '@/assets/client-logos/client-logo-dataSystem.png'
import galzeranoLogo from '@/assets/client-logos/client-logo-galzerano.png'
import ippLogo from '@/assets/client-logos/client-logo-ipp.png'
import lifetimeLogo from '@/assets/client-logos/client-logo-lifetime.png'
import medicalLogo from '@/assets/client-logos/client-logo-medicalSupport.png'
import modazineLogo from '@/assets/client-logos/client-logo-modazine.png'
import odontoclinicLogo from '@/assets/client-logos/client-logo-odontoclinic.png'
import s3curityLogo from '@/assets/client-logos/client-logo-s3curity.png'
import samsumgLogo from '@/assets/client-logos/client-logo-samsung.png'
import sanavitaLogo from '@/assets/client-logos/client-logo-sanavita.png'
import swissLogo from '@/assets/client-logos/client-logo-swissChore.png'
import tapLogo from '@/assets/client-logos/client-logo-tap.png'
import vrsoftwareLogo from '@/assets/client-logos/client-logo-vrsoftware.png'

type ClientLogo = {
    src: string
    alt: string
}

export const clientsLogosRow1: ClientLogo[] = [
    {
        src: abercrombieLogo,
        alt: 'abercrombie',
    },
    {
        src: abrasceLogo,
        alt: 'abrasce',
    },
    {
        src: agropalmaLogo,
        alt: 'agropalma',
    },
    {
        src: ambevLogo,
        alt: 'ambev',
    },
    {
        src: coplacanaLogo,
        alt: 'coplacana',
    },
    {
        src: datasystemLogo,
        alt: 'datasystem',
    },
    {
        src: galzeranoLogo,
        alt: 'galzerano',
    },
    {
        src: ippLogo,
        alt: 'ipp',
    },
    {
        src: lifetimeLogo,
        alt: 'lifetime',
    },
]

export const clientsLogosRow2: ClientLogo[] = [
    {
        src: medicalLogo,
        alt: 'medical',
    },
    {
        src: modazineLogo,
        alt: 'modazine',
    },
    {
        src: odontoclinicLogo,
        alt: 'odontoclinic',
    },
    {
        src: s3curityLogo,
        alt: 's3curity',
    },
    {
        src: samsumgLogo,
        alt: 'samsung',
    },
    {
        src: sanavitaLogo,
        alt: 'sanavita',
    },
    {
        src: swissLogo,
        alt: 'swiss',
    },
    {
        src: tapLogo,
        alt: 'tap',
    },
    {
        src: vrsoftwareLogo,
        alt: 'vrsoftware',
    },
]

export default function Clients2() {
    return (
        <section className="page-section bg-neutral-100">
            <div className="container">
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="bg-gradient-to-r from-blue-700 to-blue-950 bg-clip-text text-xl font-medium text-transparent">
                        Confiança que gera resultados
                    </span>
                    <h2 className="section-title normal-case text-neutral-900 drop-shadow-sm">
                        Grandes Empresas que
                        <br />
                        Confiam em nossas soluções
                    </h2>
                    <p className="text-neutral-500">
                        Estamos orgulhosos de apoiar empresas que estão moldando
                        o futuro com tecnologia.
                        <br /> Descubra quem já alcançou resultados
                        transformadores conosco.
                    </p>
                </div>

                <div className="mt-10">
                    <ClientLogoCarousel logos={clientsLogosRow1} />
                    <ClientLogoCarousel
                        logos={clientsLogosRow2}
                        direction="backward"
                    />
                </div>

                <div className="mt-10 flex w-full items-center justify-center gap-16 text-center">
                    <Statistic>
                        <Statistic.Number>9+</Statistic.Number>
                        <Statistic.Description>
                            <span>Países</span> <br />
                            <span>Atendidos</span>
                        </Statistic.Description>
                    </Statistic>
                    <Statistic>
                        <Statistic.Number>150+</Statistic.Number>
                        <Statistic.Description>
                            <span>Projetos</span> <br />
                            <span>Concluídos</span>
                        </Statistic.Description>
                    </Statistic>
                    <Statistic>
                        <Statistic.Number>80+</Statistic.Number>
                        <Statistic.Description>
                            <span>Clientes</span> <br />
                            <span>Satisfeitos</span>
                        </Statistic.Description>
                    </Statistic>
                </div>
            </div>
        </section>
    )
}

const Statistic = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => (
    <div
        className={`flex flex-col items-center justify-center gap-2 ${
            className || ''
        }`}
    >
        {children}
    </div>
)

Statistic.Number = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => (
    <span
        className={`font-poppins bg-gradient-to-r from-blue-700 to-blue-950 bg-clip-text text-12xl font-bold text-transparent ${
            className || ''
        }`}
    >
        {children}
    </span>
)

Statistic.Description = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => (
    <h3
        className={`text-xl font-normal normal-case leading-none text-neutral-500 drop-shadow-sm ${
            className || ''
        }`}
    >
        {children}
    </h3>
)
