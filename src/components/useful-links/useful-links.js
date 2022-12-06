import "./useful-links.css";
import Card from "../card/card";

function UsefulLinks () {
    return (
        <div className="useful-link">
            <div className="cards">
                <Card caption="Обучение" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Начать обучение"/>
                <Card caption="Сообщество" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посетить сообщество"/>
                <Card caption="Инструменты" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посмотреть инструменты"/>
            </div>
        </div>
    );
}

export default UsefulLinks;