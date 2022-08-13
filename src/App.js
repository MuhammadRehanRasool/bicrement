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
import WelcomeLogin from "./views/WelcomeLogin";
import Dashboard from "./views/Dashboard";
import Search from "./views/Search";
import Courses from "./views/Courses";
import CourseOutlineWrapper from "./components/Dashbaord/CourseOutlineWrapper";
import PostCommentWrapper from "./components/Dashbaord/PostCommentWrapper";

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
                    <Route
                        path="/welcome-login"
                        element={
                            <Layout logo="true">
                                <WelcomeLogin/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/Dashboard"
                        element={
                            <Layout logo="true">
                                <Dashboard/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/Search"
                        element={
                            <Layout >
                                <Search/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/Courses"
                        element={
                            <Layout >
                                <Courses>
                                    <CourseOutlineWrapper/>
                                </Courses>
                            </Layout>
                        }
                    />
                    <Route
                        path="/comments"
                        element={
                            <Layout >
                                <Courses>
                                    <PostCommentWrapper/>
                                </Courses>
                            </Layout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
