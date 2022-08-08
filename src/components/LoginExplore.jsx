import React from "react";
import { Link } from "react-router-dom";
// Importing knowledge TreeImage
import knowledgeTree from "../Assets/images/knowledge-tree.png";

const LoginExplore = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="img">
                <img
                    src={knowledgeTree}
                    alt="knowledge tree"
                    className="h-[30rem]"
                />
            </div>
            <div className="flex">
                <button className="bg-blues-button text-yellows-dark w-44 py-3 rounded-l-full rounded-tr-full ">
                    <Link to="/login"> Log In</Link>
                </button>
                <button className="bg-blues-dark text-yellows-dark w-44 py-3 rounded-r-full rounded-tl-full">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default LoginExplore;
