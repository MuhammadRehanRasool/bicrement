import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";


const ContactUs = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(-1);
  };

  return (
    <div className=" flex    justify-between items-center min-h-[calc(100vh-4rem)]">
      <div className="bg-gray-100 rounded-md shadow-lg p-6 md:p-12 w-full md:h-[32rem]">
        {/* Left  */}

        <div
          onClick={() => handleRoute()}
          className="text-center cursor-pointer float-right "
        >
          <AiOutlineClose className="text-2xl text-grays-light" />
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-5/12 text-center ">
            <div className="p-2 md:p-16 ">
              {/* Account Info */}

              <div className="md:w-96 -mt-6">
                <div className="px-6 py-8 w-80 mx-auto space-y-3 text-center">
                  <div className="space-y-3 ">
                    <h1 className="text-lg text-content">What is your name?</h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 mx-auto">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none bg-transparent  w-80"
                        placeholder="Example: John Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-lg text-content">
                      What is your email id?
                    </h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="outline-none bg-transparent  w-80"
                        placeholder="Example lorem23221@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-lg text-content">
                      What is your mobile number?
                    </h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                      <input
                        type="number"
                        name=""
                        id=""
                        className="outline-none bg-transparent  w-80"
                        placeholder="Example  8881212"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-7/12">
            <div className="flex justify-center items-center h-full space-y-8">
              {/* Singup Info */}

              <div className="px-6 py-8  space-y-8 text-center flex flex-col items-center justify-center ">
                <div className="space-y-2">
                  <h1 className="text-lg text-content">Subject:</h1>
                  <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2  mx-auto">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none bg-transparent w-80"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg text-content">Message:</h1>
                  <div className="border border-grays-light rounded-[4rem] shadow bg-transparent text-xs p-6 flex items-center  mx-auto">
                    <textarea
                      type="Message"
                      name=""
                      id=""
                      className="outline-none bg-transparent  w-80"
                      placeholder=""
                      rows="8"
                      style={{
                        resize: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="space-x-8">
                  <button className="bg-white text-content  py-3 border shadow p-8 text-sm font-semibold">
                    <Link to="#">I am not a robot</Link>
                  </button>
                  <button className="bg-yellows-light text-white w-32 py-3 rounded-full text-sm ">
                    <Link to="/">Submit</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right  */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
