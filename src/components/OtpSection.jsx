import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OtpSection = () => {
  const [isOtpSend, setisOtpSend] = useState(false);
  const [otp, setOtp] = useState("");

  let navigate = useNavigate();

  const handleEmailSend = () => {
    // Logic

    setisOtpSend(true);
  };
  const handleSmsSend = () => {
    // Logic

    setisOtpSend(true);
  };
  const verifyOtp = () => {
    // Logic

    // setisOtpSend(true);
    navigate("/set-profile");
  };

  return (
    <div className="flex flex-col items-center shadow-lg  rounded-b-2xl relative  mt-10 md:mt-0">
      <div className="flex">
        <Link
          to="/login"
          className="bg-blues-button text-yellows-dark w-44 py-3 rounded-r-full rounded-tl-full text-center"
        >
          Log In
        </Link>

        <Link
          to="/signup"
          className="bg-blues-button text-yellows-dark w-44 py-3 rounded-l-full rounded-tr-full text-center"
        >
          Sign up
        </Link>
      </div>

      <div className="bg-gray-50 h-12 relative">
        <span className="relative   ">
          ..
          <h1
            className="text-4xl  text-greens-light mb-4 absolute opacity-75 font-normal"
            style={{
              transform: "rotateY(180deg)",
              right: "-440%",
            }}
          >
            Verify
          </h1>
          <h1
            className="text-4xl font-normal text-greens-light mb-4 absolute "
            style={{
              left: "100%",
            }}
          >
            Verify
          </h1>
        </span>
      </div>
      {/* Opt Send Screen and Enter Otp Screen both on Same Page */}
      {isOtpSend ? (
        <div className="px-6 py-10 w-full text-center ">
          <div className="space-y-3">
            <h1 className="text-lg text-dark">Enter OTP</h1>
            <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 md:w-9/12 mx-auto">
              <input
                type="text"
                name=""
                id=""
                className="outline-none bg-transparent"
                placeholder="6 digits one time password(OTP)"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm"
              onClick={() => verifyOtp()}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="px-6 py-10 w-full text-center ">
            <div className="space-y-3">
              <h1 className="text-lg text-dark">Email Verification (OTP)</h1>
              <button
                className="bg-blues-button text-white px-3 py-1 text-xs rounded-full text-center"
                onClick={() => handleEmailSend()}
              >
                Send Email
              </button>
            </div>

            <p className="text-yellows-light text-2xl py-3">Or</p>

            <div className="space-y-3">
              <h1 className="text-lg text-dark">Phone Verification (OTP)</h1>
              <button
                className="bg-blues-button text-white px-3 py-1 text-xs rounded-full text-center"
                onClick={() => handleSmsSend()}
              >
                Send SMS
              </button>
            </div>

            <div className="flex justify-end mt-8">
              <button
                className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm"
                onClick={() => setisOtpSend(true)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      <Link
        to="/search"
        className="bg-blues-dark text-yellows-dark w-56 shadow-lg absolute  py-3 rounded-r-full rounded-bl-full text-center"
        style={{
          top: "100%",
          left: "40%",
        }}
      >
        Explore
      </Link>
    </div>
  );
};

export default OtpSection;
