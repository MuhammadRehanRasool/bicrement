import React from "react";
import CoursesSection from "../components/Dashbaord/CoursesSection";
import SideBar from "../components/Dashbaord/SideBar";
import TopBar from "../components/Dashbaord/TopBar";
import {motion} from 'framer-motion'
const Dashboard = () => {
    return (
        <motion.div  initial={{ opacity: 0 ,scale:0.8}}
        animate={{ opacity: 1 ,scale:1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6}} className=" flex  justify-between   max-h-fit py-10">
            <SideBar />
            <div className=" w-full px-6">
              <TopBar/>
              <CoursesSection/>
            </div>
        </motion.div>
    );
};

export default Dashboard;
