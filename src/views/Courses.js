import React from "react";
import CourseOutlineWrapper from "../components/Dashbaord/CourseOutlineWrapper";
import CoursesRightBar from "../components/Dashbaord/CoursesRightBar";
import CoursesSearchBar from "../components/Dashbaord/CoursesSearchBar";

import SideBar from "../components/Dashbaord/SideBar";

const Courses = ({children}) => {
  return (
    <div className=" flex justify-between   max-h-fit py-10">
      <SideBar />
      <div className=" w-full px-6 flex space-x-5">
        <CoursesSearchBar>
         {children}
        </CoursesSearchBar>
        <CoursesRightBar />
      </div>
    </div>
  );
};

export default Courses;
