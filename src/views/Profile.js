import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
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
  const [form, setform] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    number: "",
    dateOfBirth: "",
    education: "",
  });
  let navigate = useNavigate();

  const handleSubmit = () => {
    // Logic

    // setisOtpSend(true);
    navigate("/welcome-login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className=" flex justify-between items-center min-h-[calc(100vh-4rem)]"
    >
      <div className="bg-gray-100 rounded-md shadow-lg flex flex-col md:flex-row justify-between p-5 md:p-12 ">
        {/* Left  */}
        <div className="md:w-7/12 ">
          <div className=" h-12 relative ">
            <span className="relative   left-32 text-transparent">
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

          <div className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0">
            {/* Singup Info */}
            <motion.div  initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }} className="w-full md:w-96 ">
              <div className="px-6 py-8 w-full space-y-3 text-center">
                <div className="space-y-3 ">
                  <h1 className="text-lg text-content">What is your name?</h1>
                  <div className="border  border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 mx-auto ">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none bg-transparent"
                      placeholder=""
                      value={form.name}
                      onChange={(e) => {
                        setform({ ...form, name: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="text-lg text-content">What is your email?</h1>
                  <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none bg-transparent"
                      placeholder=""
                      value={form.email}
                      onChange={(e) => {
                        setform({ ...form, email: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-3 mt-5">
                  <h1 className="text-lg text-content ">Select a Username</h1>
                  <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none bg-transparent"
                      placeholder=""
                      value={form.username}
                      onChange={(e) => {
                        setform({ ...form, username: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-1 mt-7">
                  <h1 className="text-lg text-content ">Password</h1>
                  <p className="text-xs text-content  mx-auto">
                    Your welcome password will be sent to your email. <br /> Use
                    that to login for the first time and then change it.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Account Info */}

            <motion.div initial={{ opacity: 0, x:100 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} className="md:w-96 -mt-6">
              <div className="px-6 py-8 w-full space-y-3 text-center">
                <div className="space-y-3 ">
                  <h1 className="text-lg text-content">
                    Select a profiile type:
                  </h1>
                  <div className="md:space-x-4">
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
                      value={form.number}
                      onChange={(e) => {
                        setform({ ...form, number: e.target.value });
                      }}
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
                      value={form.dateOfBirth}
                      onChange={(e) => {
                        setform({ ...form, dateOfBirth: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-3 mt-5">
                  <h1 className="text-lg text-content ">Education:</h1>
                  <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none bg-transparent"
                      placeholder=""
                      value={form.education}
                      onChange={(e) => {
                        setform({ ...form, education: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right  */}

        <div className="md:w-4/12 text-center md:border-l-4">
          <div className="md:p-16 ">
            <h1 className="text-lg text-content mb-5">Select your avatar:</h1>
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
          <button
            onClick={() => handleSubmit()}
            className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm float-right mt-10 md:mt-0"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
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
