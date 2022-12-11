import "./learnpage.css";
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import TextBlock from "../../components/text-block/text-block";
import Card from "../../components/card/card";

function Learnpage () {
    return(
        <div className="learnpage">
            <Preview preview={preview} caption="Обучение Unity" description="Изучите навыки, необходимые для достижения успеха в разработке игр, архитектуре, кино и телевидении, автомобилестроении и многом другом."/>
            <TextBlock caption="Обучение" description="Для эффективной и продуктивной работы над проектом необходимо знание и умение пользоваться инструментарием, который предоставляет Unity. Важной состовляющей разработки составляют скрипты, которые пишутся на языке C#, основы которого необходимо знать для написания скриптов."/>
            <div className="learn-unity">
                <div className="learn-caption">Обучение Unity</div>
                <div className="learn-cards">
                    <Card caption="Онлайн-обучение" description="Посетите Unity Learn бесплатно и воспользуйтесь обучающим контентом для разработчиков любого уровня."
                          buttonName="Учиться" className="a" link="https://learn.unity.com/"/>
                    <Card caption="Документация" description="Руководства по установке, определения терминов, списки функций и многое другое помогут вам изучить редактор Unity и связанные сервисы."
                          buttonName="Читать" className="a" link="https://docs.unity3d.com/Manual/"/>
                    <Card caption="Сертификация" description="Проверьте свои знания Unity и продемонстрируйте свои возможности будущим работодателям с помощью широкого спектра сертификационных экзаменов."
                          buttonName="Сертификация" className="a" link="https://unity.com/ru/products/unity-certifications"/>
                </div>
            </div>
            <div className="learn-csharp">
                <div className="learn-caption">Обучение основам C#</div>
                <div className="learn-cards">
                    <Card caption="Видео-уроки" description="Официальные уроки от Microsoft на их Youtube-канале."
                          buttonName="Смотреть" className="a" link="https://www.youtube.com/@dotnet"/>
                    <Card caption="Документация" description="Руководства, определения терминов, списки функций и многое другое помогут вам изучить основы C#."
                          buttonName="Читать" className="a" link="https://learn.microsoft.com/ru-ru/dotnet/csharp/"/>
                </div>
            </div>
        </div>
    );
}

export default Learnpage;