import React from "react";
import Notification from "./Notification";
import TimeTable from "./TimeTable";

const CoursesRightBar = () => {
    return (
        <div className="w-[30rem] space-y-5">
            <Notification />
           <div className="h-48">
           <TimeTable/>
           </div>
        </div>
    );
};

export default CoursesRightBar;
