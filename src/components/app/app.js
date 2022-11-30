import "./app.css"
import Header from "../header/header";
import Preview from "../preview/preview";
import UsefulLinks from "../useful-links/useful-links";
import MiniBlockNews from "../mini-block-news/mini-block-news";

function App() {
    return (
        <div className="app">
            <Header/>
            <Preview/>
            <UsefulLinks/>
            <MiniBlockNews/>
        </div>
    );
}

export default App;