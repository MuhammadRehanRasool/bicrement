import React from "react";
import SideBar from "../components/Dashbaord/SideBar";


const Dashboard = () => {
    return (
        <div className=" flex justify-between  min-h-[calc(100vh-4rem)] py-10">
          
          <SideBar/>
        </div>
    );
};

export default Dashboard;
