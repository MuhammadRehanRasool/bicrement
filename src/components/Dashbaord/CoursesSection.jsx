import arrow from "../../Assets/icons/next-arrows-svgrepo-com.svg";

import pencils from "../../Assets/icons/pencils-draw-svgrepo-com.png";
import soprana from "../../Assets/images/soprano-svgrepo-com.png";
import pen from "../../Assets/images/pen-svgrepo-com.png";
import { Link } from "react-router-dom";
const CoursesSection = () => {
  return (
    <div className="space-y-4  mt-8 overflow-hidden ">
      <div className="p-5 px-5 md:px-10 bg-gray-100 flex flex-col md:flex-row items-center md:rounded-r-full md:rounded-tl-full shadow justify-between space-y-4 md:space-y-0">
        <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
          <p className="text-content text-sm">Enrolled Courses</p>{" "}
          <img src={arrow} alt="" className="h-5 hidden md:block" />
        </div>

        <div className=" md:marker:border-r  text-center px-5 md:h-24 cursor-pointer ">
          <Link to="/Courses">
            {" "}
            <img src={pencils} alt="" className="h-10 mx-auto mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="  md:border-r  text-center px-5 md:h-24">
          <Link to="/Courses">
            {" "}
            <img src={soprana} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className=" md:border-r  text-center px-5 md:h-24">
          <Link to="/Courses">
            {" "}
            <img src={pen} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="px-5 ">
          <img src={arrow} alt="" className="h-5 rotate-180 hidden md:block" />
        </div>
      </div>

      <div className="p-5 md:px-10 bg-gray-100 flex  flex-col md:flex-row items-center md:rounded-r-full md:rounded-tl-full shadow justify-between space-y-4 md:space-y-0">
        <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
          <p className="text-content text-sm ">Suggested Courses</p>{" "}
          <img src={arrow} alt="" className="h-5 hidden md:block" />
        </div>

        <div className=" md:border-r  text-center px-5 h-24">
          <Link to="/Courses">
            {" "}
            <img src={soprana} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="  md:border-r  text-center px-5 h-24">
          <Link to="/Courses">
            {" "}
            <img src={pen} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className=" md:border-r  text-center px-5 h-24">
          <Link to="/Courses">
            {" "}
            <img src={pencils} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="px-5 hidden md:block">
          <img src={arrow} alt="" className="h-5 rotate-180" />
        </div>
      </div>

      <div className="p-5 px-10 bg-gray-100 flex  flex-col md:flex-row items-center md:rounded-r-full md:rounded-tl-full shadow justify-between space-y-4 md:space-y-0">
        <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
          <p className="text-content text-sm">Pinned Courses</p>{" "}
          <img src={arrow} alt="" className="h-5 hidden md:block" />
        </div>

        <div className=" md:border-r  text-center px-5 h-24 ">
          <Link to="/Courses">
            {" "}
            <img src={pencils} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="  md:border-r  text-center px-5 h-24">
          <Link to="/Courses">
            {" "}
            <img src={soprana} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className=" md:border-r  text-center px-5 h-24">
          <Link to="/Courses">
            {" "}
            <img src={pen} alt="" className="h-10 mx-auto  mb-3" />
            <p className="text-center text-xs text-content">
              Turning the Schrondingers's cat to stay alive
            </p>
          </Link>
        </div>

        <div className="px-5 hidden md:block">
          <img src={arrow} alt="" className="h-5 rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
