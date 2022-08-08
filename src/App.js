import React from "react";
import "./App.scss";
import "./scss/custom.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./layout/Layout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Otp from "./views/Otp";
import Profile from "./views/Profile";

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
                    <Route
                        path="/signup"
                        element={
                            <Layout>
                                <Signup />
                            </Layout>
                        }
                    />
                    <Route
                        path="/otp-verify"
                        element={
                            <Layout>
                                <Otp/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/set-profile"
                        element={
                            <Layout logo="true">
                                <Profile/>
                            </Layout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
