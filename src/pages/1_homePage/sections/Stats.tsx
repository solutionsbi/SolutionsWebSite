import { Layout393 } from '@/components/relume/Layout393'

export default function Stats() {
    const cards = [
        {
            tagline: 'clientes satifeitos',
            heading: (
                <>
                    80+{' '}
                    <span className="text-brand-blue">
                        <br /> Empresas
                    </span>
                </>
            ),
            description:
                'Mais de 80 empresas confiam em nossas soluções para transformar seus dados em ações estratégicas.',
        },
        {
            tagline: 'projetos concluídos',
            heading: (
                <>
                    150+{' '}
                    <span className="text-brand-blue">
                        {' '}
                        <br /> Projetos
                    </span>
                </>
            ),
            description:
                'Completamos mais de 150 projetos com resultados excepcionais, ajudando nossos clientes a alcançar seus objetivos.',
        },
        {
            tagline: 'horas trabalhadas',
            heading: (
                <>
                    10.000+{' '}
                    <span className="text-brand-blue">
                        {' '}
                        <br /> Horas
                    </span>
                </>
            ),
            description:
                'Mais de 10.000 horas de comprometimento em criar soluções personalizadas que impulsionam o sucesso dos nossos clientes.',
        },
        {
            tagline: 'Aumento de Eficiência',
            heading: (
                <>
                    Até <span className="text-brand-blue">75%</span> de <br />
                    Melhoria
                </>
            ),
            description:
                'Nossas soluções de BI e sistemas personalizados geraram até 75% de aumento na eficiência operacional.',
        },
    ]

    const heading = (
        <>
            expertise que <br />
            gera <span className="text-brand-blue">resultados</span>
        </>
    )

    return (
        <section className="relative">
            <div className="absolute left-0 top-0 -z-50 h-full w-full translate-y-[0%] 3xl:translate-y-[0%]">
                <img
                    src="src\assets\images\adobe25.jpeg"
                    className="mask-linear fixed-size scale-x-[-1] opacity-70"
                />
            </div>
            <Layout393
                tagline="nossos números"
                heading={heading}
                card={cards}
            />
        </section>
    )
}
