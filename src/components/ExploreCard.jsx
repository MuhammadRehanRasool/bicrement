import React from "react";
import { IoIosSearch } from "react-icons/io";

// Importing Image
import laptopPerson from "../Assets/images/laptop-working.png";

const ExploreCard = () => {
    return (
        <div className="shadow-md rounded-xl flex flex-col items-center justify-center p-5 w-72 space-y-5 h-full">
            <div className="img">
                <img src={laptopPerson} alt="" className="h-52" />
            </div>

            <h1 className="text-content text-center text-xl font-medium">
                Explore <br /> courses from{" "}
                <span className="text-greens-light">$5.99</span>
            </h1>

            <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2">
                <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none"
                    placeholder="What do you want to learn?"
                />
                <IoIosSearch />
            </div>
        </div>
    );
};

export default ExploreCard;
