import { Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<h1>Checkout Page</h1>} />
            </Routes>
        </div>
    );
}

export default App;
