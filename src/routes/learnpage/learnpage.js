import "./learnpage.css";
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import TextBlock from "../../components/text-block/text-block";
import Card from "../../components/card/card";

function Learnpage () {
    return(
        <div className="learnpage">
            <Preview preview={preview} caption="" description=""/>
            <TextBlock caption="Обучение" description="Для эффективной и продуктивной работы над проектом необходимо знание и умение пользоваться инструментарием, который предоставляет Unity. Важной состовляющей разработки составляют скрипты, которые пишутся на языке C#, основы которого необходимо знать для написания скриптов."/>
            <div className="learn-unity">
                <div className="learn-caption">Обучение Unity</div>
                <div className="learn-cards">
                    <Card caption="Онлайн-обучение" description="Посетите Unity Learn бесплатно и воспользуйтесь обучающим контентом для разработчиков любого уровня." buttonName="Учиться"/>
                </div>
            </div>
            <div className="learn-csharp">
                <div className="learn-caption"></div>
            </div>
        </div>
    );
}

export default Learnpage;