export default function Hero() {
    return (
        <section className="relative px-[5%]">
            <div className="absolute left-0 top-[0%] -z-50 h-full w-full">
                <img
                    src="/src/assets/images/Background/19.jpeg"
                    className="mask-rect fixed-size opacity-100"
                />
            </div>
            <div className="container relative">
                <div className="grid place-content-center py-16 text-center md:py-24 lg:py-28">
                    <div className="flex w-full flex-col items-center">
                        <h1 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl">
                            <span className="text-brand-blue">conheça</span> a{' '}
                            <br />
                            solutions bi
                        </h1>

                        <p className="max-w-lg text-base text-text-alternative drop-shadow-custom md:text-md 3xl:text-xl">
                            Descubra a nossa história, valores <br /> e a missão
                            que guia nossa jornada.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
