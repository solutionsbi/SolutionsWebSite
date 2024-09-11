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
            <div className="absolute left-1/2 top-[-15%] -z-50 mx-auto h-full w-full max-w-[1920px] translate-x-[-50%]">
                <img
                    src="/src/assets/images/Background/10.jpeg"
                    className="mask-rect fixed-size"
                />
            </div>
            <div className="container flex flex-col items-center text-center">
                <div className="mb-3 flex items-center gap-4 md:mb-4">
                    <img
                        src="/src/assets/svg/small-logo.png"
                        alt=""
                        className="h-auto w-6"
                    />
                    <h2 className="text-xl font-semibold uppercase drop-shadow-custom">
                        nossos clientes
                    </h2>
                </div>
                <h3 className="text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                    temos parceiros <br className="hidden md:inline-block" />{' '}
                    <span className="text-brand-blue">ao redor do mundo</span>
                </h3>
                <p className="mt-6 max-w-xl text-lg text-gray-300 md:text-xl lg:text-2xl">
                    Empresas líderes de mercado de diferentes setores confiam em
                    nossas soluções de dados e sistemas personalizados para
                    superar desafios e conquistar resultados excepcionais.
                </p>
            </div>
            <div className="mx-auto mt-20 grid w-max grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {partnersData.map((partner, index) => (
                    <a
                        key={index}
                        className="card-bg grid h-[200px] w-[200px] place-content-center rounded-3xl border border-white/10 px-6"
                    >
                        <img
                            src={partner.src}
                            alt={partner.alt}
                            className="w-full object-cover"
                        />
                    </a>
                ))}
            </div>
        </section>
    )
}
