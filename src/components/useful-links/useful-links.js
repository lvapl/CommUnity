import "./useful-links.css";
import Card from "../card/card";

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
                <Card caption="Обучение" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Начать обучение"/>
                <Card caption="Сообщество" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посетить сообщество"/>
                <Card caption="Инструменты" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посмотреть инструменты"/>
            </div>
        </div>
    );
}

export default UsefulLinks;