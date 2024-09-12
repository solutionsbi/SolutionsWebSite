type Step = {
    title: string
    description: string
    icon?: string
}

type ComoFuncionaProps = {
    title: string
    description: string
    steps: Step[]
}

export default function ComoFunciona({
    title,
    description,
    steps,
}: ComoFuncionaProps) {
    return (
        <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="flex w-full flex-col items-center">
                    <div className="flex flex-col items-center text-center">
                        <h2
                            dangerouslySetInnerHTML={{ __html: title }}
                            className="mb-5 text-6xl font-bold tracking-tight text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl 3xl:text-[68px]"
                        />

                        <p className="max-w-[650px] text-base text-text-alternative drop-shadow-custom md:text-md 3xl:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4"
                            >
                                {step.icon && (
                                    <img
                                        className="h-auto w-12"
                                        src={step.icon}
                                        alt="step icon"
                                    />
                                )}
                                <div>
                                    <h3 className="text-3xl font-semibold text-text-alternative drop-shadow-custom">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-text-alternative drop-shadow-custom">
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
