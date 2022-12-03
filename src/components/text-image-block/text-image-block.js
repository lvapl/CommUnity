import "./text-image-block.css"

function TextImageBlock ({positionImage, text, link}) {
    const className = "text-image-block " + {positionImage};
    return(
        <div className={className}>
            <div className="text-image-block-text">{text}</div>
            <img src={link} alt=""/>
        </div>
    );
}

export default TextImageBlock;