import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/Books";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Books />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>
    );
}

export default App;