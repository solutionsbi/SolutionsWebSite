import { Header30 } from '@/components/relume/Header30'

export default function hero() {
    return (
        <section className="relative">
            <div className="absolute left-0 top-[-12vh] -z-50 h-full w-full">
                <video
                    src="/src/assets/videos/home-hero.mov"
                    autoPlay
                    muted
                    loop
                    className="mask-circle fixed-size"
                />
            </div>
            <Header30
                heading={
                    <>
                        Impulsione Seu Negócio com Nossas{' '}
                        <span className="text-brand-blue">Soluções</span>
                    </>
                }
                description="Combinamos análise de dados inteligente e sistemas personalizados para fornecer as informações que você precisa para tomar decisões estratégicas e impulsionar o crescimento do seu negócio."
                buttons={[
                    {
                        title: 'Agende uma consultoria',
                        variant: 'blue',
                        url: '#',
                    },
                    { title: 'Saiba mais', variant: 'outline', url: '#' },
                ]}
            />
        </section>
    )
}
