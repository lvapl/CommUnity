import "./useful-links.css"

function UsefulLinks () {
    return (
        <div className="useful-link">
            <div className="caption">
                <h1>Начни создавать сейчас</h1>
                <div className="caption-description">Unity — это гораздо больше,
                    чем лучшая в мире платформа разработки в реальном времени;
                    это еще и надежная экосистема, созданная для достижения вашего успеха.
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <h1 className="card-caption">Обучение</h1>
                    <div className="card-description">Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании.</div>
                    <button type="button" className="btn btn-primary card-button">Начать обучение</button>
                </div>
                <i/>
                <div className="card">
                    <h1 className="card-caption">Сообщество</h1>
                    <div className="card-description">Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании.</div>
                    <button type="button" className="btn btn-primary card-button">Посетить сообщество</button>
                </div>
                <i/>
                <div className="card">
                    <h1 className="card-caption">Доп. инструменты</h1>
                    <div className="card-description">Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании.</div>
                    <button type="button" className="btn btn-primary card-button">Посмотреть инструменты</button>
                </div>
            </div>
        </div>
    );
}

export default UsefulLinks;