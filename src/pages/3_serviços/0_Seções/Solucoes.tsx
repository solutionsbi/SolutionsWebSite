import Carrossel from '@/pages/1_homePage/sections/2_Solucoes/Carrossel'

export default function Solucoes() {
    return (
        <section className="page-section overflow-hidden">
            <div className="container">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col text-center">
                        <h2>
                            <span className="text-brand-blue">
                                explore todas
                            </span>{' '}
                            <br />
                            as nossas solucões
                        </h2>
                    </div>
                    <Carrossel />
                </div>
            </div>
        </section>
    )
}
