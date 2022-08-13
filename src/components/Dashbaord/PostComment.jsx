import React from "react";

import commentBox from "../../Assets/images/messagbox.png";
import like from "../../Assets/icons/like-thumb-up-outlined-symbol-svgrepo-com.svg";
import unlike from "../../Assets/icons/like-thumb-down-outlined-symbol-svgrepo-com.svg";
import tickbox from "../../Assets/icons/tick-box-svgrepo-com.svg";


const PostComment = () => {
  return (
   


      <div className=" rounded-t-lg rounded-r-lg  flex items-center p-4 justify-between">
        {/* Image  */}
        <div className="w-24 flex items-center justify-center">
          <img src={commentBox} className=" " alt="" />
        </div>

        {/* Messages  */}
        <div className="w-7/12 px-5">
          <p className="">
            {" "}
            <span className="text-content text-xs font-semibold">
              @mehshiyar:
            </span>{" "}
            <span className="text-grays-light text-xs">
              Post dalela hain maine
            </span>{" "}
          </p>
          <p className="border-l-[0.1rem] border-l-slate-400">
            <span className="inline-block w-8 h-[0.1rem] bg-slate-400"></span>
            <span className="text-content text-[0.65rem] font-semibold">
              @menhihoshiyar:
            </span>{" "}
            <span className="text-grays-light text-[0.65rem]">
              Post dalela hain maine
            </span>{" "}
          </p>

          <p className="border-l-[0.1rem] border-l-slate-400 ml-10">
            <span className="inline-block w-8 h-[0.1rem] bg-slate-400"></span>
            <span className="text-content text-[0.65rem] font-semibold">
              @mehshiyar:
            </span>{" "}
            <span className="text-grays-light text-[0.65rem]">
              Post dalela hain maine
            </span>{" "}
          </p>

          <p className="border-l-[0.1rem] border-l-slate-400">
            <span className="inline-block w-8 h-[0.1rem] bg-slate-400"></span>
            <span className="text-content text-[0.65rem] font-semibold">
              @mehshiyar:
            </span>{" "}
            <span className="text-grays-light text-[0.65rem]">
              Post dalela hain maine
            </span>{" "}
          </p>
        </div>

        {/* Like / Dislike  */}
        <div className="border-l-2 border-l-yellows-light px-5 flex justify-evenly items-center space-x-4">
          <div className="text-center space-y-2">
            <img src={tickbox} alt="" className="w-5  mx-auto" />
            <p className="text-[0.65rem] text-grays-light">
              Verified <br /> Post
            </p>
          </div>
          <div className="flex flex-col justify-around space-y-5 ">
            <img src={like} alt="" className="w-5" />
            <img src={unlike} alt="" className="w-5" />
          </div>
        </div>
      </div>

  

  );
};

export default PostComment;
