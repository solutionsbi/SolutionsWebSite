import { Button } from '@/components/ui/button'

export default function Cta() {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-[0%] -z-50 mx-auto h-[110%] w-full max-w-[1920px] translate-x-[-50%]">
                <img
                    src="/src/assets/images/Background/4.jpeg"
                    className="mask-rect h-full w-full object-cover"
                />
            </div>
            <div className="card-bg container flex flex-col justify-between p-10 md:p-14 lg:flex-row lg:p-20">
                <div className="flex flex-col">
                    <div className="mb-3 flex items-center gap-4 md:mb-6">
                        <img
                            src="/src/assets/svg/small-logo.png"
                            alt=""
                            className="h-auto w-6"
                        />
                        <h2 className="text-xl font-semibold uppercase drop-shadow-custom">
                            tire suas dúvidas
                        </h2>
                    </div>
                    <h3 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                        fale com um de <br /> nossos{' '}
                        <span className="text-brand-blue">especialistas</span>{' '}
                        <br className="hidden md:inline-block" /> e{' '}
                        <span className="text-brand-blue">impulsione</span> já{' '}
                        <br className="hidden md:inline-block" /> o seu negócio
                    </h3>
                </div>
                <div className="mt-16 self-end lg:mt-0">
                    <Button asChild variant={'outline'} className="px-6 py-4">
                        <a
                            href="https://api.whatsapp.com/send?phone=5519993230833"
                            target="_blank"
                            className="text-lg uppercase"
                        >
                            fale conosco
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
