import "./app.css"
import Header from "../header/header";
import Preview from "../preview/preview";
import UsefulLinks from "../useful-links/useful-links";

function App() {
    return (
        <div className="app">
            <Header/>
            <Preview/>
            <UsefulLinks/>
        </div>
    );
}

export default App;