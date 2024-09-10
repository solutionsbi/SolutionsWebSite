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
            <div className="absolute right-0 top-0 -z-50 h-full w-full translate-x-[25%] translate-y-[-25%]">
                <img
                    src="src\assets\images/cta-bg.jpeg"
                    className="mask-circle fixed-size"
                />
            </div>
            <Cta1
                heading={heading}
                button={button}
                tagline="seja nossos parceiro"
            />
        </section>
    )
}
