import "./mini-block-news.css"
import NewsCard from "../news-card/news-card";

function MiniBlockNews () {
    return (
        <div className="mini-block-news">
            <NewsCard link="/src/images/NewsImage1.png" caption="News 1" description="dsa"/>
            <NewsCard link="/src/images/NewsImage2.png" caption="News 2" description="das"/>
        </div>
    );
}

export default MiniBlockNews;