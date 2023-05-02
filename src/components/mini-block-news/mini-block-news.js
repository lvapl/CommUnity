import "./mini-block-news.css"
import NewsCard from "../news-card/news-card";
import {Link} from "react-router-dom";
import imageNews1 from "./images/NewsImage1.png"
import imageNews2 from "./images/NewsImage2.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MiniBlockNews () {
    return (
        <div className="mini-block-news">
            <div className="mini-block-news-title">
                <div className="mini-block-news-caption">Последнее про Unity</div>
                <Link to="/news" className="mini-block-news-all-news">Все новости</Link>
            </div>
            <hr/>
            <div className="mini-block-news-cards">
                <Carousel centerMode="true" centerSlidePercentage="150">
                    <NewsCard link={imageNews1} linkTo="https://blog.unity.com/games/create-spellbinding-visual-effects-with-advanced-vfx-guide" caption="Расширенное руководство по VFX" description="Создавайте завораживающие визуальные эффекты с помощью нашего расширенного руководства по VFX"/>
                    <NewsCard link={imageNews2} linkTo="https://blog.unity.com/technology/the-latest-on-cinematic-studio-and-live-capture" caption="Последние новости о Cinematic Studio и Live Capture" description="Узнайте о последних исправлениях ошибок, обновлениях и функциях Unity Art Tools для Recorder, Sequences, Python, Live Capture и многого другого."/>
                    <NewsCard link={imageNews1} linkTo="https://blog.unity.com/games/create-spellbinding-visual-effects-with-advanced-vfx-guide" caption="Расширенное руководство по VFX" description="Создавайте завораживающие визуальные эффекты с помощью нашего расширенного руководства по VFX"/>
                    <NewsCard link={imageNews2} linkTo="https://blog.unity.com/technology/the-latest-on-cinematic-studio-and-live-capture" caption="Последние новости о Cinematic Studio и Live Capture" description="Узнайте о последних исправлениях ошибок, обновлениях и функциях Unity Art Tools для Recorder, Sequences, Python, Live Capture и многого другого."/>
                </Carousel>
            </div>
        </div>
    );
}

export default MiniBlockNews;