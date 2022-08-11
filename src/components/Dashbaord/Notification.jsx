import React from "react";

const Notification = () => {
    return (
        <div className="w-full bg-gray-100  h-ful rounded-3xl shadow-md p-3 relative">
            <span className="bg-gradient-to-br from-blues-button to-blues-dark rounded-full p-3 w-10 h-10 flex items-center justify-center text-white absolute right-0 top-10">
                10
            </span>

            <div className="text-center">
                {" "}
                <span className="bg-gray-200 px-3 py-1 -mt-4 text-xs  text-center rounded-full ">
                    You have 9 new notification
                </span>
            </div>
            <div
                className=" py-8 px-6 space-y-2 flex flex-col justify-between h-full
     "
            >
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
    );
};

export default Notification;
