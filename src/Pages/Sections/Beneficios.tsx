import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type BeneficiosProps = {
    title: React.ReactNode
    description: string
    benefits: Benefit[]
    background: string
}

type Benefit = {
    title: string
    description: string
    icon: string
}

export default function Beneficios({
    title,
    description,
    benefits,
    background,
}: BeneficiosProps) {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-1/2 -z-50 mx-auto h-[120%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src={background}
                    className="mask-rect h-full w-full object-cover opacity-100"
                />
            </div>
            <div className="container">
                <div className="container grid justify-items-center lg:grid-cols-2 lg:gap-20">
                    <div className="mb-16 flex w-full flex-col">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                            <h2 className="mb-5 md:mb-6">{title}</h2>
                            <p className="xl:text-md">{description}</p>
                            <div className="mt-6 hidden items-center justify-center gap-x-4 md:mt-10 md:flex">
                                <Button>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="drop-shadow-md"
                                    >
                                        Agende uma Consultoria
                                    </a>
                                </Button>
                                <Button variant="outline">
                                    <Link to="/sobre">Saiba mais</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto grid gap-2">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col gap-4 border-l-[4px] border-brand-blue bg-gradient-to-r from-neutral-darkest/60 px-8 py-6 before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
                            >
                                <div className="flex items-center gap-5">
                                    <img
                                        className="h-10 w-10"
                                        src={benefit.icon}
                                        alt="step icon"
                                    />
                                    <h3 className="whitespace-pre-line text-2xl/[1.15] lg:text-3xl/[1.15]">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <div className="max-w-[90%] text-neutral-200 2xl:text-md">
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
