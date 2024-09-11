import Carrossel from '@/pages/1_homePage/sections/2_Solucoes/Carrossel'

export default function Solucoes() {
    return (
        <section className="page-section">
            <div className="container flex flex-col items-center text-center">
                <div className="mb-3 flex items-center gap-4 md:mb-4">
                    <img
                        src="/src/assets/svg/small-logo.png"
                        alt=""
                        className="h-auto w-6"
                    />
                    <h2 className="text-xl font-semibold uppercase drop-shadow-custom">
                        nossas soluções
                    </h2>
                </div>
                <h3 className="mb-20 text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                    <span className="text-brand-blue">sob medida</span> <br />{' '}
                    para seu negócio
                </h3>
            </div>
            <Carrossel />
        </section>
    )
}
