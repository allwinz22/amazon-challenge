import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function App() {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, [dispatch]);

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
