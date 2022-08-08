import React from "react";

const Card1 = ({ icon, title, desc }) => {
    return (
        <div className="py-2">
            <div className="flex items-start space-x-3 ">
                <div className="img">
                    <img src={icon} className="w-10 h-10" alt="" />
                </div>

                <div className="space-y-1">
                    <h1 className="text-sm text-content">{title}</h1>
                    <h1 className="text-xs text-blues-light">{desc}</h1>
                </div>
            </div>
            <div className="w-8/12 h-[0.5px] rounded-xl mx-auto mt-5  bg-gray-200 "></div>
        </div>
    );
};

export default Card1;
