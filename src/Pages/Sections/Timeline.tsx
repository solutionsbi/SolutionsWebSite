import { UserPlus, Database } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

type TimeLineCardProps = {
    date: string
    title: string
    description: string
    clients: number
    projects: number
}

export const TimeLineCard: React.FC<TimeLineCardProps> = ({
    date,
    title,
    description,
    clients,
    projects,
}) => {
    const { t } = useTranslation()

    return (
        <div className="relative flex flex-col border-b border-white/10 pb-10">
            <div className="absolute left-[-12%] top-0 flex h-full flex-col items-center justify-center gap-4">
                <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                >
                    <circle cx="8" cy="7.5" r="7.5" fill="white" />
                </svg>
                <div className="h-full w-[2px] bg-white"></div>
            </div>
            <h3 className="mb-2 text-6xl text-brand-blue">{date}</h3>
            <h4 className="mb-4 font-inter text-4xl font-semibold normal-case">
                {title}
            </h4>
            <p className="mb-8 drop-shadow-custom">{description}</p>
            <div className="flex gap-2">
                <div className="shadow-medium relative flex w-max items-center gap-3 rounded-[5px] border border-white/10 px-4 py-3">
                    <UserPlus className="h-auto w-6" />
                    <span className="text-sm lg:text-base">
                        {t('pages.about.sections.timeline.clients')}
                    </span>
                    <span className="text-sm lg:text-base">{clients}</span>
                </div>
                <div className="shadow-medium relative flex w-max items-center gap-3 rounded-[5px] border border-white/10 px-4 py-3">
                    <Database className="h-auto w-6" />
                    <span className="text-sm lg:text-base">
                        {t('pages.about.sections.timeline.projects')}
                    </span>
                    <span className="text-sm lg:text-base">{projects}</span>
                </div>
            </div>
        </div>
    )
}

const stats = [
    {
        date: '2019',
        clients: 17,
        projects: 5,
    },
    {
        date: '2020',
        clients: 15,
        projects: 5,
    },
    {
        date: '2021',
        clients: 28,
        projects: 8,
    },
    {
        date: '2022',
        clients: 50,
        projects: 12,
    },
    {
        date: '2023',
        clients: 64,
        projects: 12,
    },
    {
        date: '2024',
        clients: 150,
        projects: 12,
    },
]

export default function Timeline() {
    const { t } = useTranslation()

    const translatedTimeLineData = t('pages.about.sections.timeline', {
        returnObjects: true,
    }) as Record<string, any>

    return (
        <section className="page-section">
            <div className="container">
                <div className="grid gap-16 md:grid-cols-2 lg:gap-[10%]">
                    <div className="flex w-full flex-col">
                        <h2 className="mb-5">
                            <Trans
                                i18nKey={t(
                                    'pages.about.sections.timeline.title'
                                )}
                                components={{
                                    span: <span className="text-brand-blue" />,
                                    br: <br />,
                                }}
                            ></Trans>
                        </h2>
                        <p className="leading-normal drop-shadow-custom xl:text-md">
                            {translatedTimeLineData.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-10">
                        {translatedTimeLineData.events.map(
                            (year: any, index: number) => (
                                <TimeLineCard
                                    key={index}
                                    title={year.title}
                                    description={year.description}
                                    date={stats[index].date}
                                    clients={stats[index].clients}
                                    projects={stats[index].projects}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
