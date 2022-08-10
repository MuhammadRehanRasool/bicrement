import React, { useState } from "react";
import timeTable from "../../Assets/images/overview.png";
import { IoIosSearch } from "react-icons/io";

const TopBar = () => {
    const [isSearch, setisSearch] = useState(false);
    const handleSearch = () => {
        console.log("im clicked");
    };

    return (
        <div className="h-[14rem] flex  justify-between  space-x-4 ">
            <div className="w-3/6 space-y-2">
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
                    className="border border-grays-light rounded-full shadow bg-white text-xs  flex items-center space-x-2  h-1/5"
                    onClick={() => setisSearch(true)}
                >
                    <button
                        className="bg-yellows-light shadow-sm   text-content w-44 py-1 rounded-bl-full rounded-r-full text-sm h-full scale-105"
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

            <div className="w-2/6 bg-gray-50  h-full">
                <img src={timeTable} alt="" className="w-full h-full" />
            </div>
            <div className="w-2/6 bg-gray-100  h-ful rounded-3xl shadow-md p-3">
                <div className="textc-center">
                    {" "}
                    <span className="bg-gray-200 p-1 text-xs  text-center">
                        You have 9 new notification
                    </span>
                </div>
                <div className=" py-4 px-6 space-y-2">
                    <div className="flex text-xs w-full space-x-4 text-content">
                        <span>12:25</span>
                        <p className="pb-4 border-b border-b-gray-400 flex-grow">
                            Dr. Bulla's Class
                        </p>
                    </div>
                    <div className="flex text-xs w-full space-x-4 text-content">
                        <span>12:25</span>
                        <p className="pb-4 border-b border-b-gray-400 flex-grow">
                            Dr. Bulla's Class
                        </p>
                    </div>
                    <div className="flex text-xs w-full space-x-4 text-content">
                        <span>12:25</span>
                        <p className="pb-4 border-b border-b-gray-400 flex-grow">
                            Dr. Bulla's Class
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;