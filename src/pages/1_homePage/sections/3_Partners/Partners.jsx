export default function Partners() {
    const partnersData = [
        {
            src: '/src/assets/images/Partner Logos/samsung.svg',
            alt: 'samsung',
        },
        {
            src: '/src/assets/images/Partner Logos/ambev.png',
            alt: 'ambev',
        },
        {
            src: '/src/assets/images/Partner Logos/abercrombie.svg',
            alt: 'abercrombie',
        },
        {
            src: '/src/assets/images/Partner Logos/abrasce.png',
            alt: 'abrasce',
        },
        {
            src: '/src/assets/images/Partner Logos/agropalma.svg',
            alt: 'agropalma',
        },
        {
            src: '/src/assets/images/Partner Logos/coplacana.png',
            alt: 'coplacana',
        },
        {
            src: '/src/assets/images/Partner Logos/galzerano.png',
            alt: 'galzerano',
        },
        {
            src: '/src/assets/images/Partner Logos/lifetime.png',
            alt: 'lifetime',
        },
        {
            src: '/src/assets/images/Partner Logos/medical.png',
            alt: 'medical',
        },
        {
            src: '/src/assets/images/Partner Logos/odontoclinic.png',
            alt: 'odontoclinic',
        },
        {
            src: '/src/assets/images/Partner Logos/sanavita.png',
            alt: 'sanavita',
        },
        {
            src: '/src/assets/images/Partner Logos/swiss.png',
            alt: 'swiss',
        },
    ]

    return (
        <section className="page-section">
            <div className="container">
                <div className="absolute left-1/2 top-[50%] -z-50 mx-auto h-[110%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                    <img
                        src="/src/assets/images/Background/4.jpeg"
                        className="mask-rect h-full w-full object-cover opacity-50"
                    />
                </div>

                <div className="container flex flex-col items-center text-center">
                    <h3 className="text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                        <span className="text-brand-blue">empresas</span> que
                        confiam <br /> em nossas soluções
                    </h3>
                </div>

                <div className="mx-auto mt-20 grid w-max grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {partnersData.map((partner, index) => (
                        <a
                            key={index}
                            className="shadow-sm relative grid h-[150px] w-[200px] place-content-center rounded-xl border border-white/10 bg-gradient-to-br from-neutral-darkest/60 px-6 before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="w-full object-cover"
                            />
                        </a>
                    ))}
                </div>

                <div className="relative mx-auto grid h-max w-full max-w-xxl pt-16 md:pt-24 lg:grid-cols-3 lg:justify-items-center lg:pt-28">
                    <div>
                        <h3 className="flex items-center gap-4 text-3xl/none font-bold drop-shadow-custom">
                            <span className="text-10xl text-brand-blue">
                                +8
                            </span>{' '}
                            <span>
                                países <br />
                                atendidos
                            </span>
                        </h3>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-4 text-3xl/none font-bold drop-shadow-custom">
                            <span className="text-10xl text-brand-blue">
                                +80
                            </span>{' '}
                            clientes <br /> satisteitos
                        </h3>
                    </div>

                    <div>
                        <h3 className="flex items-center gap-4 text-3xl/none font-bold drop-shadow-custom">
                            <span className="text-10xl text-brand-blue">
                                +150
                            </span>{' '}
                            projetos <br /> concluídos
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
