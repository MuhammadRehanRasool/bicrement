import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

import icon_1 from "../Assets/icons/pencils-draw-svgrepo-com.png";
import icon_2 from "../Assets/icons/test-tube.png";
import icon_3 from "../Assets/icons/violin-svgrepo-com.png";
import icon_4 from "../Assets/icons/ballet-svgrepo-com.png";


const Search = () => {
    const handleSearch = () => {
        console.log("im clicked");
    };

  

    const [isSearch, setisSearch] = useState(false);
    return (
        <div className="flex flex-col items-start justify-between shadow-lg  rounded-b-2xl relative h-[33rem] xl:h-[calc(100vh-10rem)]">
            <div className="px-6 py-8 w-full h-44">
                <div className="space-y-3">
                    <div
                        className="border border-grays-light rounded-full w-6/12 shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2"
                        onClick={() => setisSearch(true)}
                    >
                        <input
                            type="text"
                            name=""
                            id=""
                            className="outline-none"
                            placeholder="What do you want to learn?"
                            onClick={handleSearch}
                        />
                        <IoIosSearch />
                    </div>
                </div>
            </div>

            <div className="flex justify-between flex-wrap gap-8 px-16 overflow-y-scroll py-8 searches">
                {contents.map((content) => {
                    return (
                        <div className="w-[32rem] flex justify-between space-x-10 content">
                            <img src={content.icon} alt="" className="h-10" />
                            <p className="w-2 h-full bg-grays-light"></p>
                            <div className="">
                                <p className="text-content sm">
                                    {content.text}
                                </p>
                                <p className="text-grays-light text-xs">
                                    {content.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button
                className="bg-blues-dark text-yellows-dark w-56 shadow-lg absolute  py-3 rounded-l-full rounded-br-full"
                style={{
                    top: "100%",
                    right: "0%",
                }}
            >
                Explore
            </button>
        </div>
    );
};

const contents = [
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
    {
        text: "Level2 Certificate : Driving Like Solmon",
        icon: icon_4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
    },
];


export default Search;
