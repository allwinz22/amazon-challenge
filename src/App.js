import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
    return (
        <div className="app">
            <Routes>
                {/* Login */}
                <Route path="/login" element={<Login />} />
                {/* Home */}
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }
                />
                {/* Checkout */}
                <Route
                    path="/checkout"
                    element={
                        <>
                            <Header />
                            <Checkout />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
