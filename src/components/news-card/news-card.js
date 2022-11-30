import "./news-card.css"

function NewsCard ({link, caption, description}) {
    return(
        <div className="news-card">
            <img src={link} alt=""/>
            <div className="news-card-caption">{caption}</div>
            <div className="news-card-description">{description}</div>
        </div>
    );
}

export default NewsCard;