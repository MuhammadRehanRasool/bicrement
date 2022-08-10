import React from "react";
import { Link } from "react-router-dom";

import avatar_1 from "../Assets/avatars/avatar-1.svg";
import avatar_2 from "../Assets/avatars/avatar-2.svg";
import avatar_3 from "../Assets/avatars/avatar-3.svg";
import avatar_4 from "../Assets/avatars/avatar-4.svg";
import avatar_5 from "../Assets/avatars/avatar-5.svg";
import avatar_6 from "../Assets/avatars/avatar-6.svg";
import avatar_7 from "../Assets/avatars/avatar-7.svg";
import avatar_8 from "../Assets/avatars/avatar-8.svg";
import avatar_9 from "../Assets/avatars/avatar-9.svg";

const Profile = () => {
    return (
        <div className=" flex justify-between items-center min-h-[calc(100vh-4rem)]">
            <div className="bg-gray-100 rounded-md shadow-lg flex justify-between p-12 ">
                {/* Left  */}
                <div className="w-7/12 ">
                    <div className=" h-12 relative">
                        <span className="relative   left-32">
                            ..
                            <h1
                                className="text-4xl  text-greens-light mb-4 absolute opacity-75 font-normal"
                                style={{
                                    transform: "rotateY(180deg)",
                                    right: "-200%",
                                }}
                            >
                                Profile
                            </h1>
                            <h1
                                className="text-4xl font-normal text-greens-light mb-4 absolute "
                                style={{
                                    left: "100%",
                                }}
                            >
                                Profile
                            </h1>
                        </span>
                    </div>

                    <div className="flex justify-around">
                        {/* Singup Info */}
                        <div className="w-96">
                            <div className="px-6 py-8 w-full space-y-3 text-center">
                                <div className="space-y-3 ">
                                    <h1 className="text-lg text-content">
                                        What is your name?
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h1 className="text-lg text-content">
                                        What is your email?
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3 mt-5">
                                    <h1 className="text-lg text-content ">
                                        Select a Username
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1 mt-7">
                                    <h1 className="text-lg text-content ">
                                        Password
                                    </h1>
                                    <p className="text-xs text-content  mx-auto">
                                        Your welcome password will be sent to
                                        your email. <br /> Use that to login for
                                        the first time and then change it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Account Info */}

                        <div className="w-96 -mt-6">
                            <div className="px-6 py-8 w-full space-y-3 text-center">
                                <div className="space-y-3 ">
                                    <h1 className="text-lg text-content">
                                        Select a profiile type:
                                    </h1>
                                    <div className="space-x-4">
                                        <button className="border border-grays-light w-24 bg-gradient-to-r from-yellows-light to-yellows-dark rounded-full shadow bg-transparent  px-3 py-3 text-content space-x-2 mx-auto text-center text-sm">
                                            Student
                                        </button>
                                        <button className="border border-grays-light w-24  rounded-full shadow bg-transparent  px-3 py-3 text-content space-x-2 mx-auto text-center text-sm">
                                            Instructor
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-3 ">
                                    <h1 className="text-lg text-content">
                                        What is your mobile number?
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent "
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h1 className="text-lg text-content">
                                        What is your date of birth?
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3 mt-5">
                                    <h1 className="text-lg text-content ">
                                        Education:
                                    </h1>
                                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="outline-none bg-transparent"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right  */}

                <div className="w-4/12 text-center border-l-4">
                    <div className="p-16 ">
                        <h1 className="text-lg text-content mb-5">
                            Select your avatar:
                        </h1>
                        <div className=" flex flex-wrap gap-5 justify-center items-center">
                            {avatars.map((avatar) => {
                                return (
                                    <div className="w-16 hover:animate-pulse cursor-pointer transition ease-in-out delay-150">
                                        <img src={avatar} alt="" className="" />{" "}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <button className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm float-right">
                        <Link to="/welcome-login">Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

const avatars = [
    avatar_1,
    avatar_2,
    avatar_3,
    avatar_4,
    avatar_5,
    avatar_6,
    avatar_7,
    avatar_8,
    avatar_9,
];
export default Profile;
