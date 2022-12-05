import "./text-image-block.css"

function TextImageBlock ({positionImage, caption, description, link}) {
    const classPosition = `text-image-block ${positionImage}`,
          textPosition = `text-image-block-text image-${positionImage}`;
    return(
        <div className={classPosition}>
            <div className={textPosition}>
                <div className="text-image-block-caption">{caption}</div>
                <div className="text-image-block-description">{description}</div>
            </div>
            <img className="text-image-block-image" src={link} alt=""/>
        </div>
    );
}

export default TextImageBlock;