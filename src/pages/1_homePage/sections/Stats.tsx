import { Layout393 } from '@/components/relume/Layout393'

export default function Stats() {
    const cards = [
        {
            tagline: 'Aumento de Eficiência',
            image: {
                src: '/src/assets/images/stats2.jpeg',
                alt: 'Clientes satisfeitos',
            },
            heading: (
                <>
                    até 75% de <span className="text-brand-blue">melhoria</span>
                </>
            ),
            description:
                'Nossas soluções de BI e sistemas personalizados geraram até 75% de aumento na eficiência operacional.',
        },
        {
            tagline: 'horas trabalhadas',
            image: {
                src: '/src/assets/images/stats1.jpeg',
                alt: 'Clientes satisfeitos',
            },
            heading: (
                <>
                    10.000+ <span className="text-brand-blue">horas</span>
                </>
            ),
            description:
                'Mais de 10.000 horas de comprometimento em criar soluções personalizadas que impulsionam o sucesso dos nossos clientes.',
        },
    ]

    const features = [
        {
            tagline: 'clientes satifeitos',
            heading: (
                <>
                    80+ <span className="text-brand-blue">empresas</span>
                </>
            ),
            description:
                'Mais de 80 empresas confiam em nossas soluções para transformar seus dados em ações estratégicas.',
        },
        {
            tagline: 'projetos concluídos',
            heading: (
                <>
                    150+ <span className="text-brand-blue">projetos</span>
                </>
            ),
            description:
                'Completamos mais de 150 projetos com resultados excepcionais, ajudando nossos clientes a alcançar seus objetivos.',
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
            <div className="absolute left-0 top-0 -z-50 h-full w-full translate-y-[10%]">
                <img
                    src="src\assets\images\adobe19.jpeg"
                    className="mask-linear fixed-size"
                />
            </div>
            <Layout393
                tagline="nossos números"
                heading={heading}
                cards={cards}
                featureSections={features}
            />
        </section>
    )
}
