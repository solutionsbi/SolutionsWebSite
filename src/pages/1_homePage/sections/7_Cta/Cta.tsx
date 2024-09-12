import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

export default function Cta() {
    return (
        <section className="page-section">
            <div className="absolute left-1/2 top-1/2 -z-50 mx-auto h-[150%] w-full max-w-[1920px] translate-x-[-50%] translate-y-[-50%]">
                <img
                    src="/src/assets/images/Background/15.jpeg"
                    className="mask-rect h-full w-full object-cover"
                />
            </div>
            <div className="container relative inset-0 flex flex-col justify-between border-l-2 border-brand-blue bg-gradient-to-r from-neutral-darkest/50 p-10 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm md:p-14 lg:flex-row lg:p-20">
                <div className="flex flex-col">
                    <h3 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                        fale com um de <br /> nossos{' '}
                        <span className="text-brand-blue">especialistas</span>{' '}
                        <br className="hidden md:inline-block" /> e{' '}
                        <span className="text-brand-blue">impulsione</span> já{' '}
                        <br className="hidden md:inline-block" /> o seu negócio
                    </h3>
                </div>
                <div className="mt-16 self-end lg:mt-0">
                    <a
                        href="https://api.whatsapp.com/send?phone=5519993230833"
                        target="_blank"
                        className="flex items-center gap-4 font-ibm text-md font-bold uppercase"
                    >
                        <span className="hover:text-brand-blue">
                            Agende uma consultoria
                        </span>

                        <MoveRight />
                    </a>
                </div>
            </div>
        </section>
    )
}
