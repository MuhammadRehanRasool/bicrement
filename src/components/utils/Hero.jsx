import React, { useState } from "react";

// import NavbarPrimary from "./NavbarPrimary";

import ExploreCard from "../ExploreCard";
import FacilitiesCard from "../FacilitiesCard";

import ExploreSearch from "../ExploreSearchs";

const Hero = ({ rightSection }) => {
    const [isSearch, setisSearch] = useState(false);

    return (
        <>
           

            <div className="flex justify-evenly items-center flex-wrap min-h-[calc(100vh-4rem)] ">
                {/* Left Content Section  */}
                <div className="md:w-7/12 ">
                    <div className="space-y-2 w-full">
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

                    <div className="flex justify-center flex-wrap items-start mt-5 space-x-10 min-h-[25rem] space-y-8 md:space-y-0">
                        <FacilitiesCard />

                        {isSearch ? (
                            <ExploreSearch />
                        ) : (
                            <ExploreCard
                                setisSearch={setisSearch}
                                isSearch={isSearch}
                            />
                        )}
                    </div>
                </div>

                {/* RIght Content Section  */}

                {rightSection}
            </div>
        </>
    );
};

export default Hero;
