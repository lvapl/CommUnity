import "./historypage.css"
import Preview from "../../components/preview/preview";
import preview from "./images/Preview.png";

function Historypage () {
    return(
        <div className="historypage">
            <Preview preview={preview} caption="" description=""/>

        </div>
    );
}

export default Historypage;