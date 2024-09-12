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

                    <div className="grid grid-cols-2 gap-20 border-t-2 border-brand-blue bg-gradient-to-b from-neutral-darkest/70 px-10 pt-20">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex gap-10">
                                <div className="h-max font-ibm text-10xl/none font-bold text-brand-blue">
                                    {index + 1}
                                </div>
                                <div
                                    className={`flex w-[800px] flex-col gap-3`}
                                >
                                    <h3 className="whitespace-pre-line text-3xl font-semibold drop-shadow-custom">
                                        {step.title}
                                    </h3>
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
