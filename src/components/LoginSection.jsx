import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

const LoginExplore = () => {

    const [form, setform] = useState({
        name:'',
        password:''
    })

    const navigate = useNavigate();
    const handleLogin = ( )=>{
        // login

        navigate('/dashboard')
    }
    return (
        <div className="flex flex-col items-center shadow-lg  rounded-b-2xl mt-10 md:mt-0 relative">
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
                            right: "-170%",
                        }}
                    >
                        Hello!
                    </h1>
                    <h1
                        className="text-4xl font-normal text-greens-light mb-4 absolute "
                        style={{
                            left: "100%",
                        }}
                    >
                        Hello!
                    </h1>
                </span>
            </div>
            <div className="px-6 py-8 w-full text-center md:text-left">
                <div className="space-y-3">
                    <h1 className="text-xl text-dark">
                        Phone Number or Username
                    </h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 md:w-9/12">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="outline-none bg-transparent"
                            placeholder="Example 8881414 or teentakle1212"
                            value = {form.name}
                            onChange={(e) => {setform({...form,name: e.target.value})}}
                        />
                    </div>
                </div>
                <div className="space-y-3 mt-5">
                    <h1 className="text-xl text-dark">Pasword</h1>
                    <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 md:w-9/12">
                        <input
                            type="password"
                            name=""
                            id=""
                            className="outline-none bg-transparent"
                            placeholder="Example ********"
                            value = {form.password}
                            onChange={(e) => {setform({...form,password: e.target.value})}}
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-8">
                    <button className="bg-yellows-light text-white w-24 py-1 rounded-full text-sm" onClick={()=>handleLogin()}>
                        Enter
                    </button>
                </div>
            </div>

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

export default LoginExplore;
