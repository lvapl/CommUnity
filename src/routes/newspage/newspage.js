import "./newspage.css";
import NewsCardPreview from "../../components/news-card-preview/news-card-preview";
import preview from "./images/Preview.png";

function Newspage () {
    return(
        <div className="news">
            <div className="last-new">
                <div className="cpation">Последнее</div>
                <NewsCardPreview image={preview} caption="Расширенное руководство по VFX" description="Создавайте завораживающие визуальные эффекты с помощью нашего расширенного руководства по VFX"
                                 link=""/>
            </div>
        </div>
    );
}

export default Newspage;