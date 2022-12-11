import "./useful-links.css";
import Card from "../card/card";

function UsefulLinks () {
    return (
        <div className="useful-link">
            <div className="cards">
                <Card caption="Обучение" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Начать обучение" link="/learn"/>
                <Card caption="Сообщество" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посетить сообщество" className="a" link="https://unity.com/community"/>
                <Card caption="Инструменты" description="Обучение работы с  Unity  при помощи оффициальных онлайн вебинаров созданных в самой компании." buttonName="Посмотреть инструменты" link="/add-tools"/>
            </div>
        </div>
    );
}

export default UsefulLinks;