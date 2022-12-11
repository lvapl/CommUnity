import "./card.css"
import {Link} from "react-router-dom";

function Card ({className, caption, description, buttonName, link}) {
    if (className == null) {
        return(
            <Link className="card" to={link}>
                <h1 className="card-caption">{caption}</h1>
                <div className="card-description">{description}</div>
                <button type="button" className="btn btn-primary card-button">{buttonName}</button>
            </Link>
        );
    }
    else {
        return(
            <a className="card" href={link}>
                <h1 className="card-caption">{caption}</h1>
                <div className="card-description">{description}</div>
                <button type="button" className="btn btn-primary card-button">{buttonName}</button>
            </a>
        );
    }
}

export  default Card;