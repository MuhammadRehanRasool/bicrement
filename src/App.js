import React from "react";
import "./App.scss";
import "./scss/custom.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./layout/Layout";
import Login from "./views/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Layout>
                                <Login />
                            </Layout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
