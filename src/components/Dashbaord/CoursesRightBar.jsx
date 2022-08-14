import React from "react";
import Notification from "./Notification";
import TimeTable from "./TimeTable";
import playBtn from  '../../Assets/icons/video.png'
const CoursesRightBar = () => {
    return (
        <div className="w-full md:w-[30rem] space-y-10 mt-10 md:mt-0">
            <Notification />
           <div className="h-56">
           <TimeTable/>
           </div>
           
            <div className="md:w-40 rounded-3xl shadow-md flex flex-col justify-between items-center p-8 space-y-2 relative">
            <p className="absolute right-0 w-5 h-5 bg-red-500 rounded-full top-0">.</p>
                <p className="text-grays-light text-sm">Class is live !</p>
                <img src={playBtn} alt="" />
                <p className="text-content text-md">Enter</p>
            </div>
        </div>
    );
};

export default CoursesRightBar;
