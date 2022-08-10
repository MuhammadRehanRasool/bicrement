import arrow from "../../Assets/icons/next-arrows-svgrepo-com.svg";

import pencils from "../../Assets/icons/pencils-draw-svgrepo-com.png";
import soprana from "../../Assets/images/soprano-svgrepo-com.png";
import pen from "../../Assets/images/pen-svgrepo-com.png";
const CoursesSection = () => {
    return (
        <div className="space-y-4  mt-8 overflow-hidden ">
            <div className="p-5 px-10 bg-gray-100 flex items-center rounded-r-full rounded-tl-full shadow justify-between">
                <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
                    <p className="text-content text-sm">Enrolled Courses</p>{" "}
                    <img src={arrow} alt="" className="h-5" />
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pencils} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="  border-r  text-center px-5 h-24">
                    <img src={soprana} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pen} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="px-5 ">
                    <img src={arrow} alt="" className="h-5 rotate-180" />
                </div>
            </div>

            <div className="p-5 px-10 bg-gray-100 flex items-center rounded-r-full rounded-tl-full shadow justify-between">
                <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
                    <p className="text-content text-sm">Suggested Courses</p>{" "}
                    <img src={arrow} alt="" className="h-5" />
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pencils} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="  border-r  text-center px-5 h-24">
                    <img src={soprana} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pen} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="px-5 ">
                    <img src={arrow} alt="" className="h-5 rotate-180" />
                </div>
            </div>



            <div className="p-5 px-10 bg-gray-100 flex items-center rounded-r-full rounded-tl-full shadow justify-between">
                <div className="  flex items-center space-x-3 border-r border-l-grays-light h-24 px-5 ">
                    <p className="text-content text-sm">Pinned Courses</p>{" "}
                    <img src={arrow} alt="" className="h-5" />
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pencils} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="  border-r  text-center px-5 h-24">
                    <img src={soprana} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className=" border-r  text-center px-5 h-24">
                    <img src={pen} alt="" className="h-10 mx-auto" />
                    <p className="text-center text-xs text-content">
                        Turning the Schrondingers's cat to stay alive
                    </p>
                </div>

                <div className="px-5 ">
                    <img src={arrow} alt="" className="h-5 rotate-180" />
                </div>
            </div>



        </div>
    );
};

export default CoursesSection;
