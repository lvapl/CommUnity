import "./homepage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import UsefulLinks from "../../components/useful-links/useful-links";
import MiniBlockNews from "../../components/mini-block-news/mini-block-news";
import TextBlock from "../../components/text-block/text-block";


function Homepage () {
    return (
        <div className="homepage">
            <Preview preview={preview} caption="" description=""/>
            <TextBlock caption="Начни создавать сейчас" description="Unity — это гораздо больше, чем лучшая в мире платформа разработки в реальном времени; это еще и надежная экосистема, созданная для достижения вашего успеха."/>
            <UsefulLinks/>
            <MiniBlockNews/>
        </div>
    );
}

export default Homepage;