import React from "react";

import NavbarPrimary from "./NavbarPrimary";

import ExploreCard from "../ExploreCard";
import FacilitiesCard from "../FacilitiesCard";

// Importing knowledge TreeImage
import knowledgeTree from "../../Assets/images/knowledge-tree.png";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto h-screen ">
            {/*==========  Navbar ========== */}
            <NavbarPrimary />

            <div className="flex justify-between items-center">
                {/* Left Content Section  */}
                <div className="w-7/12 ">
                    <div className="space-y-2">
                        <h1 className="text-7xl text-logo">
                            myfort.<span className="text-yellows-dark">io</span>
                        </h1>
                        <p className="text-2xl">
                            {" "}
                            <span className="text-yellows-light">
                                India's{" "}
                            </span>{" "}
                            <span className="text-logo">fastest growing </span>{" "}
                            <span className="text-yellows-dark">and</span>
                            <span className="text-logo">
                                {" "}
                                most advanced
                            </span>{" "}
                            <span className="text-yellows-dark">
                                skill learning platform.
                            </span>{" "}
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-5 space-x-10 h-[25rem] ">
                        <FacilitiesCard />
                        <ExploreCard />
                    </div>
                </div>

                {/* RIght Content Section  */}

                <div className="flex flex-col items-center">
                    <div className="img">
                        <img
                            src={knowledgeTree}
                            alt="knowledge tree"
                            className="h-[30rem]"
                        />
                    </div>
                    <div className="flex">
                        <button className="bg-blues-button text-yellows-dark w-44 py-3 rounded-l-full rounded-tr-full">
                            Log In
                        </button>
                        <button className="bg-blues-dark text-yellows-dark w-44 py-3 rounded-r-full rounded-tl-full">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
