import Carrossel from '@/pages/1_homePage/sections/2_Solucoes/Carrossel'

export default function Solucoes() {
    return (
        <section className="page-section">
            <div className="container flex flex-col items-center text-center">
                <h3 className="mb-20 text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                    <span className="text-brand-blue">nossas soluções</span>{' '}
                    <br /> para seu negócio
                </h3>
            </div>
            <Carrossel />
        </section>
    )
}
