import "./news-card-preview.css";
import {Link} from "react-router-dom";

function NewsCardPreview ({image, caption, description, link}) {
    return(
        <Link className="news-card-preview" to={link}>
            <img src={image} alt="" className="news-card-preview-image"/>
            <div className="news-card-preview-text">
                <div className="news-card-preview-text-container">
                    <div className="news-card-preview-caption">{caption}</div>
                    <div className="news-card-preview-description">{description}</div>
                </div>
            </div>
        </Link>
    );
}

export default NewsCardPreview;