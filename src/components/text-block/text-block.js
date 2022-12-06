import "./text-block.css"

function TextBlock ({caption, description}) {
    return(
        <div className="caption">
            <h1>{caption}</h1>
            <div className="caption-description">{description}</div>
        </div>
    );
}

export default TextBlock;