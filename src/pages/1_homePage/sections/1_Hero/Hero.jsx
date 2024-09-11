import { Button } from '../../../../components/ui/button'
import { Link } from 'react-router-dom'

// Hero component for the homepage
export default function Hero() {
    return (
        <section className="relative px-[5%]">
            {/* Background video container */}
            <div className="absolute left-0 top-[0%] -z-50 h-[120vh] w-full">
                <img
                    src="/src/assets/images/Background/14.jpeg"
                    className="mask-rect h-full w-full object-cover"
                />
                {/* <video
                    src="/src/assets/videos/home-hero.mov"
                    autoPlay
                    muted
                    loop
                    className="mask-rect fixed-size opacity-100"
                /> */}
            </div>
            {/* Content container */}
            <div className="container relative">
                <div className="grid place-content-center py-16 text-center md:py-24 lg:py-28">
                    <div className="flex w-full flex-col items-center">
                        <h1 className="mb-5 text-6xl font-bold tracking-tight text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl 3xl:text-[68px]">
                            soluções em{' '}
                            <span className="text-brand-blue">tecnologia</span>{' '}
                            <br />
                            para o seu negócio
                        </h1>
                        {/* <h1 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl 3xl:text-[68px]">
                            Impulsione Seu Negócio{' '}
                            <br className="hidden lg:block" /> com Nossas{' '}
                            <span className="text-brand-blue">Soluções</span>
                        </h1> */}

                        <p className="max-w-[650px] text-base text-text-alternative drop-shadow-custom md:text-md 3xl:text-xl">
                            Na Solutions BI, criamos soluções personalizadas
                            para atender às necessidades do seu negócio. Nossos
                            serviços incluem desenvolvimento de software,
                            análise de dados, consultoria em tecnologia e muito
                            mais.
                        </p>
                        {/* <p className="max-w-lg text-base text-text-alternative drop-shadow-custom md:text-md 3xl:text-xl">
                            Combinamos análise de dados inteligente e sistemas
                            personalizados para fornecer as informações que você
                            precisa para tomar decisões estratégicas e
                            impulsionar o crescimento do seu negócio.
                        </p> */}

                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            <Button variant={'outline'}>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="drop-shadow-md"
                                >
                                    Agende uma Consultoria
                                </a>
                            </Button>
                            <Button variant="outline">
                                <Link to="/sobre">Saiba mais</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
