export default function Stats() {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-[0%] -z-50 mx-auto h-[110%] w-full translate-x-[-50%]">
                <img
                    src="/src/assets/images/Background/9.jpeg"
                    className="mask-rect h-full w-full object-cover"
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
                        nossos números
                    </h2>
                </div>
                <h3 className="mb-20 text-5xl font-bold drop-shadow-custom md:text-7xl lg:text-8xl">
                    Expertise que <br />
                    gera
                    <span className="text-brand-blue">resultados</span>
                </h3>
            </div>
            <div className="container grid gap-2 lg:grid-cols-2 2xl:grid-cols-3">
                <div className="card-bg flex flex-1 flex-col justify-between p-10">
                    <h4 className="mb-28 font-inter text-lg font-bold uppercase">
                        clientes satisfeitos
                    </h4>
                    <div className="flex flex-col text-right">
                        <p className="mb-3 border-b border-white/10 pb-3 font-ibm text-8xl/[1.2] font-bold uppercase drop-shadow">
                            <span className="text-brand-blue">80+</span>
                            <br />
                            empresas
                        </p>
                        <p className="mt-3 text-md">
                            Mais de 80 empresas confiam em nossas soluções para
                            transformar seus dados em ações estratégicas.
                        </p>
                    </div>
                </div>
                <div className="card-bg flex flex-1 flex-col justify-between p-10">
                    <h4 className="mb-28 font-inter text-lg font-bold uppercase">
                        Projetos Concluídos
                    </h4>
                    <div className="flex flex-col text-right">
                        <p className="mb-3 border-b border-white/10 pb-3 font-ibm text-8xl/[1.2] font-bold uppercase drop-shadow">
                            <span className="text-brand-blue">150+</span>
                            <br />
                            projetos
                        </p>
                        <p className="mt-3 text-md">
                            Completamos mais de 150 projetos com resultados
                            excepcionais, ajudando nossos clientes a alcançar
                            seus objetivos.
                        </p>
                    </div>
                </div>
                <img
                    src="/src/assets/images/Stats/stat3.jpeg"
                    className="h-full w-full rounded-3xl object-cover shadow-custom"
                    alt=""
                />
                <img
                    src="/src/assets/images/Stats/stat2.jpeg"
                    className="hidden h-full w-full rounded-3xl object-cover shadow-custom lg:block"
                    alt=""
                />
                <div className="card-bg flex flex-1 flex-col justify-between p-10">
                    <h4 className="mb-28 font-inter text-lg font-bold uppercase">
                        HORAS TRABALHADAS
                    </h4>
                    <div className="flex flex-col text-right">
                        <p className="mb-3 border-b border-white/10 pb-3 font-ibm text-8xl/[1.2] font-bold uppercase drop-shadow">
                            <span className="text-brand-blue">10.000+</span>
                            <br />
                            horas
                        </p>
                        <p className="mt-3 text-md">
                            Mais de 10.000 horas de comprometimento em criar
                            soluções personalizadas que impulsionam o sucesso
                            dos nossos clientes.
                        </p>
                    </div>
                </div>
                <div className="card-bg flex flex-1 flex-col justify-between p-10">
                    <h4 className="mb-28 font-inter text-lg font-bold uppercase">
                        Aumento de Eficiência{' '}
                    </h4>
                    <div className="flex flex-col text-right">
                        <p className="mb-3 border-b border-white/10 pb-3 font-ibm text-8xl/[1.2] font-bold uppercase drop-shadow">
                            Até <span className="text-brand-blue">75%</span> de{' '}
                            <br />
                            melhoria
                        </p>
                        <p className="mt-3 text-md">
                            Nossas soluções de BI e sistemas personalizados
                            geraram até 75% de aumento na eficiência
                            operacional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
