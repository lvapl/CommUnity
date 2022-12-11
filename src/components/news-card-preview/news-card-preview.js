import "./news-card-preview.css";

function NewsCardPreview ({image, caption, description, link}) {
    return(
        <a className="news-card-preview" href={link}>
            <div className="news-card-preview-image-container">
                <img src={image} alt="" className="news-card-preview-image"/>
            </div>
            <div className="news-card-preview-text">
                <div className="news-card-preview-text-container">
                    <div className="news-card-preview-caption">{caption}</div>
                    <div className="news-card-preview-description">{description}</div>
                </div>
            </div>
        </a>
    );
}

export default NewsCardPreview;