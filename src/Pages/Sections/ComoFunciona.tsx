type Step = {
    title: string
    description: string
}

type ComoFuncionaProps = {
    description: string
    steps: Step[]
}

export default function ComoFunciona({
    description,
    steps,
}: ComoFuncionaProps) {
    return (
        <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <div className="mb-20 flex flex-col items-center text-center">
                        <h2 className="mb-4">
                            <span className="text-brand-blue">como</span>{' '}
                            funciona
                        </h2>

                        <p className="whitespace-pre-line drop-shadow-custom md:text-md xl:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 border-t-2 border-brand-blue bg-gradient-to-b from-neutral-darkest/70 px-5 pt-12 lg:grid-cols-2 xl:gap-20 xl:px-20 xl:pt-20">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col gap-6"
                            >
                                <div className="flex h-max gap-6">
                                    <span className="font-ibm text-8xl/none font-bold text-brand-blue">
                                        {index + 1}
                                    </span>
                                    <h3 className="whitespace-pre-line text-2xl/tight drop-shadow-custom">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className={`flex flex-col gap-3`}>
                                    <p className="text-justify text-base text-text-alternative drop-shadow-custom">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
