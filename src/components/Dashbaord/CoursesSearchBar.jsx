import React, { Children, useState } from "react";
import pencils from "../../Assets/icons/pencils-draw-svgrepo-com.png";


import { IoIosSearch } from "react-icons/io";

import PostComentBtn from "./PostComentBtn";

const CoursesSearchBar = ({children}) => {
    const [isSearch, setisSearch] = useState(false);
    const handleSearch = () => {
        console.log("im clicked");
    };

    return (
        <div className="">
            <div
                className="border border-grays-light rounded-full shadow bg-white text-xs  flex items-center space-x-2  h-10  w-full md:w-1/2 pr-3"
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

            <div className="w-full flex justify-between items-center flex-col md:flex-row mt-5">
                <div className=" md:h-32 rounded-t-lg rounded-r-lg bg-gray-100 flex flex-col md:flex-row space-y-7 md:space-y-0 items-center p-5 space-x-1">
                    {/* logo */}
                    <div className="logo md:w-1/5 flex justify-between items-center flex-col">
                        <img src={pencils} className="w-14" alt="" />
                    </div>
                    {/* Text */}
                    <div className=" md:w-3/5">
                        <h1 className="font-bold text-sm text-content">
                            Level 2 Certificate Driving like Solomon.
                        </h1>
                        <p className=" text-xs text-grays-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio est rem omnis alias voluptate ab nam
                            reprehenderit fugiat recusandae quis sapiente unde
                            dolorem cum deserunt libero, voluptatem consequuntur
                            consequatur aliquam.
                        </p>
                    </div>

                    {/* Post & Comment */}
                    <PostComentBtn/>
                </div>
            </div>


           {children}


            {/* <div className="flex justify-between items-center flex-col mt-5">
                <div className=" rounded-r-lg rounded-b-lg bg-gray-100 p-7">
                    <CourseOutline />
                </div>
            </div> */}
        </div>
    );
};

export default CoursesSearchBar;
