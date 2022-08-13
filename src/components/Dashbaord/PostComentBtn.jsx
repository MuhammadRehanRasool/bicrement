import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import backbtn from "../../Assets/icons/next-arrows-svgrepo-com.svg";
import post from "../../Assets/icons/conference-svgrepo-com.svg";

const PostComentBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
 

  const handleRoute = () => {
    navigate(-1);
  };

  if (location.pathname == "/comments") {
    return (
      <div className=" flex flex-col justify-center items-center w-1/5 cursor-pointer">
        <div onClick={() => handleRoute()} className="text-center">
          <img src={backbtn} className="w-8 mx-auto" alt="" />
          <p className="text-xs text-grays-light">Back</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col justify-center items-center w-1/5">
      <Link to="/comments" className="text-center">
        <img src={post} className="w-8 mx-auto" alt="" />
        <p className="text-xs text-grays-light">Post & Comments</p>
      </Link>
    </div>
  );
};

export default PostComentBtn;
