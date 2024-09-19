import { UserPlus } from 'lucide-react'
import { Database } from 'lucide-react'

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
                    <span className="text-sm lg:text-base">Clientes:</span>
                    <span className="text-sm lg:text-base">{clients}</span>
                </div>
                <div className="shadow-medium relative flex w-max items-center gap-3 rounded-[5px] border border-white/10 px-4 py-3">
                    <Database className="h-auto w-6" />
                    <span className="text-sm lg:text-base">Projetos:</span>
                    <span className="text-sm lg:text-base">{projects}</span>
                </div>
            </div>
        </div>
    )
}

const timeLineData: TimeLineCardProps[] = [
    {
        date: '2019',
        title: 'Do Início à Escalabilidade',
        description:
            'Tudo começou em 2019 com a impressão de alguns cartões de apresentação e o primeiro projeto com um cliente do RJ. Esse mesmo voltaria a ser nosso cliente em 2023. Nosso primeiro parceiro se juntou ao time trazendo outros projetos para darmos continuidade no crescimento.',
        clients: 17,
        projects: 5,
    },
    {
        date: '2020',
        title: 'Da Diversificação à uma Nova Empresa',
        description:
            'Nós diversificamos nossos serviços atuando em setores como TI, Medicina, Industrias e Logística. A SolutionsBI tem sua firma aberta perante a lei, consolida seus clientes e contrata seu primeiro colaborador.',
        clients: 15,
        projects: 5,
    },
    {
        date: '2021',
        title: 'Globalização',
        description:
            'Estamos agora presentes em projetos em 4 continentes diferentes aumentando nosso time e parcerias.',
        clients: 28,
        projects: 8,
    },
    {
        date: '2022',
        title: 'Crescimento',
        description:
            'A SolutionsBI está agora presente em grandes projetos Nacionais e Internacionais. Temos um time consolidado e engajado. Nesse ponto já atuamos em projetos no Brasil, Inglaterra, Alemanha, Portugal, USA, Uruguai e Barbados.',
        clients: 50,
        projects: 12,
    },
    {
        date: '2023',
        title: 'Amadurecimento',
        description:
            'Nessa fase criamos processos internos para gestão financeira, contratação, pessoas, crescimento profissional e marketing. Participamos ativamente de projetos da cidade e fechamos uma parceria internacional exclusiva.',
        clients: 64,
        projects: 12,
    },
    {
        date: '2024',
        title: 'Tração',
        description:
            'Buscando um crescimento exponencial, diversificamos nossos serviços, criamos nossos produtos e investimos em recursos para aumentar ainda mais a qualidade de nosso atendimento perante nossos clientes.',
        clients: 150,
        projects: 12,
    },
]

export default function Timeline() {
    return (
        <section className="page-section">
            <div className="container">
                <div className="grid gap-16 md:grid-cols-2 lg:gap-[10%]">
                    <div className="flex w-full flex-col">
                        <h2 className="mb-5">
                            De uma{' '}
                            <span className="text-brand-blue">
                                Visão <br className="" /> Inovadora
                            </span>{' '}
                            ao <br /> Impacto Global
                        </h2>
                        <p className="leading-normal drop-shadow-custom xl:text-md">
                            Fundada em 2019, a Solutions BI nasceu com a missão
                            de transformar dados em insights valiosos para
                            empresas de diversos setores. Desde o início, nosso
                            foco tem sido capacitar nossos clientes com soluções
                            tecnológicas de ponta, permitindo que tomem decisões
                            mais informadas e estratégicas. Com o passar dos
                            anos, crescemos e expandimos nossa atuação
                            globalmente, entregando mais de 150 projetos em 9
                            países diferentes, sempre mantendo um compromisso
                            com a excelência e a inovação.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10">
                        {timeLineData.map((timeLine, index) => (
                            <TimeLineCard
                                key={index}
                                date={timeLine.date}
                                title={timeLine.title}
                                description={timeLine.description}
                                clients={timeLine.clients}
                                projects={timeLine.projects}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
