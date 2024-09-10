import { Cta1 } from '../../../components/relume/Cta1'

export default function Contact() {
    const heading = (
        <>
            fale com um de <br /> nossos{' '}
            <span className="text-brand-blue">especialistas</span> <br /> e{' '}
            <span className="text-brand-blue">impulsione</span> já <br /> o seu
            negócio
        </>
    )

    const button = {
        title: 'Fale conosco',
        url: '#',
    }

    return (
        <section className="relative">
            <div className="absolute left-0 top-0 -z-50 h-full w-full translate-y-[-15%] 2xl:translate-y-[-10%] 3xl:translate-y-[0%]">
                <img
                    src="src\assets\images\adobe23.jpeg"
                    className="mask-linear fixed-size opacity-50"
                />
            </div>
            <div className="absolute right-0 top-0 -z-50 h-full w-full translate-x-[0%] translate-y-[40%] lg:translate-x-[25%] lg:translate-y-[0]">
                <div className="relative flex h-full w-full items-center justify-center">
                    <img
                        src="src/assets/images/cta-bg.jpeg"
                        className="mask-circle max-h-full max-w-full object-contain"
                        alt="CTA Background"
                    />
                </div>
            </div>
            <Cta1
                heading={heading}
                button={button}
                tagline="seja nossos parceiro"
            />
        </section>
    )
}
