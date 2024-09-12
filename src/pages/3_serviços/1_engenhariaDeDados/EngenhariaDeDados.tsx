import Hero from '../0_Seções/Hero'
import ComoFunciona from '../0_Seções/ComoFunciona'

export default function EngenhariaDeDados() {
    return (
        <div className="grid">
            <Hero
                title="Engenharia de Dados"
                description="Ajudamos a sua empresa a coletar, armazenar e processar dados de forma eficiente e segura, garantindo que você tenha informações precisas e confiáveis para tomar decisões estratégicas."
                cta1="Saiba mais"
                img="/src/assets/images/Background/19.jpeg"
            />
            <ComoFunciona
                title="Como Funciona"
                description="Nossa equipe de especialistas em engenharia de dados trabalha para garantir que você tenha acesso a informações precisas e confiáveis para tomar decisões estratégicas."
                steps={[
                    {
                        title: 'Coleta de Dados',
                        description:
                            'Utilizamos ferramentas e tecnologias avançadas para coletar dados de diversas fontes, garantindo que você tenha acesso a informações precisas e atualizadas.',
                    },
                    {
                        title: 'Armazenamento de Dados',
                        description:
                            'Armazenamos os dados coletados de forma segura e eficiente, garantindo que você tenha acesso rápido e fácil às informações que precisa.',
                    },
                    {
                        title: 'Processamento de Dados',
                        description:
                            'Processamos os dados armazenados para transformá-los em insights valiosos, permitindo que você tome decisões estratégicas com base em informações confiáveis.',
                    },
                ]}
            />
        </div>
    )
}
