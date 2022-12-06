import "./preview.css"

function Preview({preview, caption, description}) {
    return (
        <div className="preview">
            <img src={preview} alt=""/>
            <div className="preview-title">
                <div className="preview-caption">{caption}</div>
                <div className="preview-description">{description}</div>
            </div>
        </div>
    );
}
//TODO: Сделать отображение текста!
export default Preview;