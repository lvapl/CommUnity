import "./gamepage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import TextImageBlock from "../../components/text-image-block/text-image-block";
import image1 from "./images/FirstImage.png"
import image2 from "./images/SecondImage.png"
import NewsCard from "../../components/news-card/news-card";
import tarkov from "./images/EscapeFromTarkov.jpeg";
import subnautica from "./images/Subnautica.jpg";
import ori from "./images/Ori.jpg";
import vrising from "./images/VRising.jpg";

function Gamepage () {
    return(
        <div className="gamepage">
            <Preview preview={preview} caption="Unity для игр" description="Бесплатный движок Unity обладает всем необходимым для создания игр на все платформы."/>
            <TextImageBlock positionImage="left" caption="От идеи до реализации" description="Благодаря простому инструментарию и удобному тестированию Unity помогает развиваться проекту от ранних коцептов до релиза."
                            link={image1}/>
            <TextImageBlock positionImage="right" caption="Огромный потенциал для творчества" description="Благодаря мощным инструментам работы с 2D и 3D графикой возможно делать игры под любые платформы, любых жанров и стилей."
                            link={image2}/>
            <div className="games">
                <div className="games-caption">Игры сделанные на Unity</div>
                <div className="games-cards">
                    <NewsCard className="game-card" link={tarkov} caption="Escape from Tarkov" description=""/>
                    <NewsCard className="game-card" link={subnautica} caption="Subnautica" description=""/>
                    <NewsCard className="game-card" link={ori} caption="Ori and The Blind Forest" description=""/>
                    <NewsCard className="game-card" link={vrising} caption="V Rising" description=""/>
                </div>
            </div>
        </div>
    );
}

export default Gamepage;