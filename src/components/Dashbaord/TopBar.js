import React, { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import Notification from "./Notification";
import TimeTable from "./TimeTable";

const TopBar = () => {
    const [isSearch, setisSearch] = useState(false);
    const handleSearch = () => {
        console.log("im clicked");
    };

    return (
        <div className="md:h-[14rem] flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-4 ">
            <div className="md:w-3/6 space-y-2">
                <div className="bg-gradient-to-br from-[#102f3ebd] to-[#2a566ec7] rounded-r-[3.5rem] rounded-tl-[3.5rem] p-8 flex flex-col items-center justify-between text-white h-4/5">
                    <p className="text-right text-xs w-full">
                        December 16 ,2022
                    </p>

                    <div className="text-center">
                        <h1 className="text-lg">Welcome! Ibu Hatela</h1>    
                        <p className="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium, magni.
                        </p>
                    </div>

                    <p className="text-right text-xs w-full">
                        You have no new notifications
                    </p>
                </div>

                <div
                    className="border border-grays-light rounded-full shadow bg-white text-xs  flex items-center space-x-2  h-1/5 pr-3"
                    onClick={() => setisSearch(true)}
                >
                    <button
                        className="bg-yellows-light shadow-sm   text-content w-44 py-2 md:py-1 rounded-full md:rounded-none md:rounded-bl-full md:rounded-r-full text-sm h-full scale-110 md:scale-105"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                    <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none px-3 py-2"
                        placeholder="What do you want to learn?"
                        onClick={handleSearch}
                    />
                    <IoIosSearch className="w-6 h-6 text-grays-light" />
                </div>
            </div>

            <div className="md:w-2/6 bg-gray-50  h-full overflow-hidden">
               <TimeTable/>
            </div>
            <div className="md:w-2/6">
                <Notification />
            </div>
        </div>
    );
};

export default TopBar;
