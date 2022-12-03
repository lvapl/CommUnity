import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./routes/homepage/homepage";
import Historypage from "./routes/historypage/historypage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>} />
                <Route path="/history" element={<Historypage/>}/>
            </Route>
        </Routes>
    );
}

export default App;