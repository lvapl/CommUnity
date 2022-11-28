

function NewsCard ({link, caption, description}) {
    return(
        <div className="news-card">
            <i ref={link}/>
            <div className="caption">{caption}</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default NewsCard;