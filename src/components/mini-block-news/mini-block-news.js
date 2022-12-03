import "./mini-block-news.css"
import NewsCard from "../news-card/news-card";
import imageNews1 from "../../images/NewsImage1.png"
import imageNews2 from "../../images/NewsImage2.png"

function MiniBlockNews () {
    return (
        <div className="mini-block-news">
            <div className="mini-block-news-title">
                <div className="mini-block-news-caption">Последнее про Unity</div>
                <button className="mini-block-news-all-news">Все новости</button>
            </div>
            <hr/>
            <div className="mini-block-news-cards">
                <NewsCard link={imageNews1} caption="News 1" description="dsa"/>
                <NewsCard link={imageNews2} caption="News 2" description="das"/>
            </div>
        </div>
    );
}

export default MiniBlockNews;