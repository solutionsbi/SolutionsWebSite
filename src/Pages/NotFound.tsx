import { Link } from 'react-router-dom'
import PrimaryButton from '../components/custom/PrimaryButton'

const NotFound = () => {
    return (
        <div className="page-section">
            <div className="container flex items-start">
                <h1 className="pr-10 text-[150px]/none font-bold text-brand-blue">
                    404
                </h1>
                <div className="flex flex-col border-l border-brand-blue pl-10">
                    <h1>
                        Página não <br /> encontrada{' '}
                    </h1>
                    <p>Oops! A página que você está procurando não existe.</p>
                    <PrimaryButton
                        text="Voltar para a página inicial"
                        href="/"
                        linkType="internal"
                        className="mt-10 w-max"
                    />
                </div>
            </div>
        </div>
    )
}

export default NotFound
