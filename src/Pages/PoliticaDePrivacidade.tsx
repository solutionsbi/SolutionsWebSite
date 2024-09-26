import { useTranslation } from 'react-i18next'

export default function PoliticaDePrivacidade() {
    const { t } = useTranslation()

    const translations = t('pages.privacyPolicy', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <div>
            <div className="container flex flex-col px-[5%]">
                <header className="flex flex-col items-center gap-6 py-16 md:py-24 lg:py-28">
                    <h1 className="whitespace-pre-line text-center">
                        {translations.title}
                    </h1>
                    <p className="">{translations.description}</p>
                </header>
                <div className="mx-auto flex max-w-lg flex-col gap-12 pb-16 md:pb-24 lg:pb-28">
                    {translations.sections.map(
                        (section: any, index: number) => (
                            <section
                                key={index}
                                className="flex flex-col gap-6"
                            >
                                <h2 className="normal-case">{section.title}</h2>
                                <p className="">{section.description}</p>
                            </section>
                        )
                    )}
                    <section className="flex flex-col gap-6">
                        <h2 className="normal-case">
                            {translations.contact.title}
                        </h2>
                        <p className="">
                            {translations.contact.description.part1}
                        </p>
                        <ul className="ml-4 list-disc py-2 pl-4">
                            <li>
                                <a
                                    href="mailto:contato@solutionsbi.com.br"
                                    className="text-brand-blue underline"
                                >
                                    contato@solutionsbi.com.br
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5519983085819"
                                    className="text-brand-blue underline"
                                >
                                    +55 (19) 98308-5819
                                </a>
                            </li>
                        </ul>
                        <p>{translations.contact.description.part2}</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
