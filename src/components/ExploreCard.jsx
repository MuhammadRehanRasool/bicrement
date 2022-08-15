import React from "react";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
// Importing Image
import laptopPerson from "../Assets/images/laptop-working.png";

const ExploreCard = ({ setisSearch, isSearch }) => {
  const handleSearch = () => {
    console.log("im clicked");
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="shadow-md rounded-xl flex flex-col items-center justify-center p-5 w-full md:w-72 space-y-5 h-full"
    >
      <div className="img">
        <img src={laptopPerson} alt="" className="h-52" />
      </div>

      <h1 className="text-content text-center text-xl font-medium">
        Explore <br /> courses from{" "}
        <span className="text-greens-light">$5.99</span>
      </h1>

      <div
        className="border border-grays-light rounded-full w-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2"
        onClick={() => setisSearch(true)}
      >
        <input
          type="text"
          name=""
          id=""
          className="outline-none cursor-pointer"
          placeholder="What do you want to learn?"
          onClick={handleSearch}
        />
        <IoIosSearch className="cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default ExploreCard;
