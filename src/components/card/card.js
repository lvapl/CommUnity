import "./card.css"

function Card ({caption, description, buttonName}) {
    return(
        <div className="card">
            <h1 className="card-caption">{caption}</h1>
            <div className="card-description">{description}</div>
            <button type="button" className="btn btn-primary card-button">{buttonName}</button>
        </div>
    );
}

export  default Card;