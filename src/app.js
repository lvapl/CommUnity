import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./routes/homepage/homepage";
import Historypage from "./routes/historypage/historypage";
import Filmpage from "./routes/filmpage/filmpage";
import Gamepage from "./routes/gamepage/gamepage";
import Architecturepage from "./routes/architecturepage/architecturepage";
import Learnpage from "./routes/learnpage/learnpage";
import Addtoolspage from "./routes/addtoolspage/addtoolspage";
import Error404page from "./routes/error404page/error404page";
import Newspage from "./routes/newspage/newspage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>} />
                <Route path="/history" element={<Historypage/>}/>
                <Route path="/films" element={<Filmpage/>}/>
                <Route path="/games" element={<Gamepage/>}/>
                <Route path="/architecture" element={<Architecturepage/>}/>
                <Route path="/learn" element={<Learnpage/>}/>
                <Route path="/add-tools" element={<Addtoolspage/>}/>
                <Route path="/news" element={<Newspage/>}/>
                <Route path="*" element={<Error404page/>}/>
            </Route>
        </Routes>
    );
}

export default App;