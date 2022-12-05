import "./gamepage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import TextImageBlock from "../../components/text-image-block/text-image-block";
import image1 from "./images/FirstImage.png"

function Gamepage () {
    return(
        <div className="gamepage">
            <Preview preview={preview} caption="" description=""/>
            <TextImageBlock positionImage="left" caption="От идеи до реализации" description="Благодаря простому инструментарию и удобному тестированию Unity помогает развиваться проекту от ранних коцептов до релиза."
                            link={image1}/>
        </div>
    );
}

export default Gamepage;