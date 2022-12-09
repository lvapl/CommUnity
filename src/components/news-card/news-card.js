import "./news-card.css"

function NewsCard ({className, link, caption, description}) {
    className = className ? className : "news-card"
    return(
        <div className={className}>
            <div className={className + "-image-container"}>
                <img className="news-card-image" src={link} alt=""/>
            </div>
            <div className="news-card-caption">{caption}</div>
            <div className="news-card-description">{description}</div>
        </div>
    );
}

export default NewsCard;