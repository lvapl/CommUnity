import "./homepage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";
import UsefulLinks from "../../components/useful-links/useful-links";
import MiniBlockNews from "../../components/mini-block-news/mini-block-news";


function Homepage () {
    return (
        <div className="homepage">
            <Preview preview={preview} caption="" description=""/>
            <UsefulLinks/>
            <MiniBlockNews/>
        </div>
    );
}

export default Homepage;