

function NewsCard ({link, caption, description}) {
    return(
        <div className="news-card">
            <i ref={link}/>
            <div className="news-card-caption">{caption}</div>
            <div className="news-card-description">{description}</div>
        </div>
    );
}

export default NewsCard;