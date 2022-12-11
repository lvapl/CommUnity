import "./newspage.css";
import NewsCardPreview from "../../components/news-card-preview/news-card-preview";
import preview from "./images/Preview.png";
import NewsCard from "../../components/news-card/news-card";
import image1 from "./images/FirstImage.jpg";
import image2 from "./images/SecondImage.jpg";

function Newspage () {
    return(
        <div className="news">
            <div className="last-new">
                <div className="news-caption">Последнее</div>
                <hr/>
                <NewsCardPreview image={preview} caption="Расширенное руководство по VFX" description="Создавайте завораживающие визуальные эффекты с помощью нашего расширенного руководства по VFX"
                                 link="https://blog.unity.com/games/create-spellbinding-visual-effects-with-advanced-vfx-guide"/>
            </div>
            <div className="news-block">
                <NewsCard className="news-card-micro" caption="Освещение, камера, обновление: последние новости о Cinematic Studio и Live Capture" description="Узнайте о последних исправлениях ошибок, обновлениях и функциях Unity Art Tools для Recorder, Sequences, Python, Live Capture и многого другого."
                          link={image1} linkTo="https://blog.unity.com/technology/the-latest-on-cinematic-studio-and-live-capture"/>
                <NewsCard className="news-card-micro" caption="Делаем VR-образование доступным для следующего поколения создателей" description="Узнайте, как Unity и Meta преодолевают барьеры и отстаивают справедливость, сотрудничая, чтобы помочь педагогам и учебным заведениям преодолеть барьеры на пути к виртуальной реальности."
                          link={image2} linkTo="https://blog.unity.com/news/making-vr-education-accessible-with-meta"/>
            </div>
        </div>
    );
}

export default Newspage;