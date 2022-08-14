import React from "react";
import avatar from "../../Assets/avatars/avatar-6.svg";
import icon_1 from "../../Assets/icons/home-svgrepo-com.svg";
import icon_2 from "../../Assets/icons/folders-svgrepo-com.svg";
import icon_3 from "../../Assets/icons/new-file-svgrepo-com.svg";
import icon_4 from "../../Assets/icons/smartphone-message-svgrepo-com.svg";
import icon_5 from "../../Assets/icons/connections-svgrepo-com.svg";
const SideBar = () => {
    return (
        <>
            <div className="hidden md:block md:w-3/12 shadow-xl rounded-3xl p-4 ">
                <div className="h-5/12 flex items-center">
                    <div className="md:w-5/12 space-y-2">
                        <button className="border border-grays-light w-full  bg-gradient-to-r from-yellows-light to-yellows-dark rounded-full shadow bg-transparent  px-3 py-2 text-content space-x-2 mx-auto text-center text-sm">
                            Student
                        </button>
                        <button className="border border-grays-light w-full   rounded-full shadow bg-transparent  px-3 py-2 text-content space-x-2 mx-auto text-center text-sm">
                            Gunda
                        </button>
                        <button className="border border-grays-light w-full   rounded-full shadow bg-transparent  px-3 py-2 text-content space-x-2 mx-auto text-center text-sm">
                            Mithun
                        </button>
                    </div>
                    <div className="md:w-6/12">
                        <div className="text-center">
                            <div className="w-24 hover:animate-pulse cursor-pointer transition ease-in-out delay-150 mx-auto">
                                <img src={avatar} alt="" className="mx-ato" />{" "}
                            </div>
                            <p className="text-xl text-content">Ibn Hatela</p>
                            <p className="text-sm  text-grays-light">
                                Edit Profile
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-7/12 space-y-6 py-10 px-6">
                    {navlinks.map((nav) => {
                        return (
                            <div className=" hover:animate-pulse cursor-pointer transition ease-in-out delay-150 flex items-center justify-end space-x-3  border-b border-b-gray-300 pb-3">
                                <img src={nav.icon} alt="" className="" />
                                    <p className="text-grays-light">{nav.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

const navlinks = [{
    text: 'Home',
    icon : icon_1
},{
    text: 'Assignments',
    icon : icon_2
}, {
    text: 'Courses',
    icon : icon_3
}, {
    text: 'Messages',
    icon : icon_4
}, {
    text: 'Progress',
    icon : icon_5
}, ];


export default SideBar;
