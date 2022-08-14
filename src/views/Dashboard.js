import React from "react";
import CoursesSection from "../components/Dashbaord/CoursesSection";
import SideBar from "../components/Dashbaord/SideBar";
import TopBar from "../components/Dashbaord/TopBar";

const Dashboard = () => {
    return (
        <div className=" flex  justify-between   max-h-fit py-10">
            <SideBar />
            <div className=" w-full px-6">
              <TopBar/>
              <CoursesSection/>
            </div>
        </div>
    );
};

export default Dashboard;
