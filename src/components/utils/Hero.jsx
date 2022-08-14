import React, { useState } from "react";
import { motion } from "framer-motion";
// import NavbarPrimary from "./NavbarPrimary";

import ExploreCard from "../ExploreCard";
import FacilitiesCard from "../FacilitiesCard";

import ExploreSearch from "../ExploreSearchs";

const Hero = ({ rightSection }) => {
  const [isSearch, setisSearch] = useState(false);

  return (
    <>
      <motion.div
        className="flex justify-evenly items-center flex-wrap min-h-[calc(100vh-4rem)] "
        initial={{ opacity: 0 ,scale:0.8}}
        animate={{ opacity: 1 ,scale:1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6}}
      >
        {/* Left Content Section  */}
        <div className="md:w-7/12 ">
          <div className="space-y-2 w-full">
            <h1 className="text-7xl text-logo">
              myfort.<span className="text-yellows-dark">io</span>
            </h1>
            <p className="text-2xl">
              {" "}
              <span className="text-yellows-light">India's </span>{" "}
              <span className="text-logo">fastest growing </span>{" "}
              <span className="text-yellows-dark">and</span>
              <span className="text-logo"> most advanced</span>{" "}
              <span className="text-yellows-dark">
                skill learning platform.
              </span>{" "}
            </p>
          </div>

          <div className="flex justify-center flex-wrap items-start mt-5 md:space-x-10 min-h-[25rem] space-y-8 md:space-y-0">
            <FacilitiesCard />

            {isSearch ? (
              <ExploreSearch />
            ) : (
              <ExploreCard setisSearch={setisSearch} isSearch={isSearch} />
            )}
          </div>
        </div>

        {/* RIght Content Section  */}

        {rightSection}
      </motion.div>
    </>
  );
};

export default Hero;
