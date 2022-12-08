import "./addtoolspage.css";
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import Card from "../../components/card/card";

function Addtoolspage () {
    return(
        <div className="add-tools-page">
            <Preview preview={preview} caption="Дополнительные инструменты" description="Различные дополнительные инструменты будут помогать с различными аспектами пректа, такими как реклама, левел дизайн и т.д."/>
            <div className="useful-links">
                <div className="useful-links-caption first">Сервисы</div>
                <div className="useful-links-cards">
                    <Card caption="Unity Ads" description="Решения по монетизации и привлечению пользователей для повышения доходности и развития вашего бизнеса."
                          buttonName="Подробнее"/>
                    <Card caption="Unity Analytics" description="Собирайте ценные данные и статистику, чтобы анализировать и улучшать игру."
                          buttonName="Подробнее"/>
                    <Card caption="Cloud Diagnostics" description="Выявляйте и устраняйте ошибки, влияющие на стабильность игры."
                          buttonName="Подробнее"/>
                </div>
            </div>
            <div className="useful-links">
                <div className="useful-links-caption">Полезные ссылки</div>
                <div className="useful-links-cards">
                    <Card caption="Asset Store" description="Платформа для торговли готовыми частями контента для Unity"
                          buttonName="Подробнее"/>
                    <Card caption="Unity Learn" description="Посетите Unity Learn бесплатно и воспользуйтесь обучающим контентом для разработчиков любого уровня."
                          buttonName="Подробнее"/>
                    <Card caption="Visual Studio" description="Мощный инструмент для создания скриптов"
                          buttonName="Подробнее"/>
                </div>
            </div>
        </div>
    );
}

export default Addtoolspage;