import { Button } from '../../../../components/ui/button'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="relative px-[5%]">
            {/* Background video container */}
            <div className="absolute left-0 top-[0%] -z-50 h-full w-full">
                <video
                    src="/src/assets/videos/home-hero.mov.mov"
                    autoPlay
                    muted
                    loop
                    className="mask-rect fixed-size opacity-100"
                />
            </div>
            {/* Content container */}
            <div className="container relative">
                <div className="grid place-content-center py-16 text-center md:py-24 lg:py-28">
                    <div className="flex w-full flex-col items-center">
                        <h1 className="mb-5 text-6xl font-semibold text-text-alternative drop-shadow-custom md:mb-6 md:text-9xl lg:text-10xl">
                            Capacitando{' '}
                            <span className="text-brand-blue">
                                Decisões{' '}
                                <br className="hidden lg:inline-block" />{' '}
                                Estratégicas
                            </span>{' '}
                            com <br className="hidden lg:inline-block" />{' '}
                            Tecnologia e Conhecimento
                        </h1>

                        <p className="max-w-lg text-base text-text-alternative drop-shadow-custom md:text-md 3xl:text-xl">
                            Conheça a Solutions BI: nossa história, valores e a
                            missão que guia nossa jornada. Entenda como
                            transformamos dados em decisões estratégicas e como
                            nossa expertise global pode impulsionar o sucesso do
                            seu negócio
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            <Button variant={'blue'}>
                                <a href="#" target="_blank">
                                    Agende uma consultoria
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
