const NotFound = () => {
    return (
        <div className="page-section">
            <div className="container flex flex-col items-start lg:flex-row">
                <h1 className="pr-10 text-[100px] font-bold text-brand-blue lg:text-[150px]/none">
                    404
                </h1>
                <div className="mt-10 flex flex-col border-l border-brand-blue pl-10 lg:mt-0">
                    <h1>
                        Página não <br /> encontrada{' '}
                    </h1>
                    <p>Oops! A página que você está procurando não existe.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
