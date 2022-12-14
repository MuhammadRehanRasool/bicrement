import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import avatar_1 from "../Assets/avatars/avatar-5.svg";

const WelcomeLogin = () => {
  const [form, setform] = useState({
    name: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = () => {
    // login

    navigate("/Dashboard");
  };

  return (
    <div className=" flex justify-between items-center min-h-[calc(100vh-4rem)]">
      <div className="bg-gray-100 rounded-md shadow-lg p-6 md:p-12 w-full md:h-[32rem]">
        {/* Left  */}
        <div className=" h-12 relative">
          <span className="relative   left-32 text-transparent" >
            ..
            <h1
              className="text-4xl  text-greens-light absolute opacity-75 font-normal"
              style={{
                transform: "rotateY(180deg)",
                right: "-700%",
              }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-normal text-greens-light mb-4 absolute "
              style={{
                left: "100%",
              }}
            >
              Welcome
            </h1>
          </span>
        </div>
        <motion.div initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between">
          <div className="md:w-7/12">
            <div className="flex justify-center items-center h-full">
              {/* Singup Info */}

              <div className="px-6 py-8 w-96 space-y-3 text-center flex items-center justify-center">
                <div className="space-y-8">
                  <h1 className="text-5xl text-grays-light">
                    Hello,{" "}
                    <span className="text-yellows-dark mb-10">Simran</span>
                  </h1>

                  <img src={avatar_1} alt="" className="mx-auto " />
                </div>
              </div>
            </div>
          </div>

          {/* Right  */}

          <div className="w-full md:w-5/12 text-center md:border-l-4">
            <div className="p-6 md:p-16 ">
              {/* Account Info */}

              <div className="w-full md:w-96 -mt-6">
                <div className="md:px-6 py-8 md:w-72 mx-auto space-y-3 text-center  ">
                  <div className="space-y-3 ">
                    <h1 className="text-lg text-content">
                      Phone Number or Username
                    </h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 mx-auto">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none bg-transparent "
                        placeholder="Example: 8881212 or teentakle1212"
                        value={form.name}
                        onChange={(e) => {
                          setform({ ...form, name: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-lg text-content">Password</h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                      <input
                        type="password"
                        name=""
                        id=""
                        className="outline-none bg-transparent"
                        placeholder="Example *********"
                        value={form.password}
                        onChange={(e) => {
                          setform({ ...form, password: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm float-right"
            >
              Enter
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeLogin;
