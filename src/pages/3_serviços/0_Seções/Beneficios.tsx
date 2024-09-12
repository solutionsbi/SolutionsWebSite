import { Button } from '@/components/ui/button'

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
                    className="mask-rect h-full w-full object-cover opacity-50"
                />
            </div>
            <div className="container">
                <div className="container grid justify-items-center gap-20 lg:grid-cols-2">
                    <div className="mb-16 flex w-full flex-col">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                            <h2 className="mb-5 text-6xl font-bold text-text-alternative drop-shadow-custom md:mb-6 lg:text-8xl">
                                {title}
                            </h2>
                            <p className="xl:text-lg">{description}</p>
                            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-10">
                                <Button>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="drop-shadow-md"
                                    >
                                        Agende uma Consultoria
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto grid gap-2">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col gap-6 border-l-[4px] border-brand-blue bg-gradient-to-r from-neutral-darkest/60 p-10 before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-auto w-12"
                                        src={benefit.icon}
                                        alt="step icon"
                                    />

                                    <h3 className="whitespace-pre-line text-3xl/[1.15]">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <div className="max-w-[90%] 2xl:text-md">
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
