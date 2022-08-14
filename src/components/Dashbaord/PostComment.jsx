import React from "react";
import {motion } from 'framer-motion'
import commentBox from "../../Assets/images/messagbox.png";
import like from "../../Assets/icons/like-thumb-up-outlined-symbol-svgrepo-com.svg";
import unlike from "../../Assets/icons/like-thumb-down-outlined-symbol-svgrepo-com.svg";
import tickbox from "../../Assets/icons/tick-box-svgrepo-com.svg";


const PostComment = () => {
  return (
   


      <motion.div initial={{ opacity: 0 ,y:100}}
      animate={{ opacity: 1 ,y:0}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6}}  className=" rounded-t-lg rounded-r-lg  flex flex-col md:flex-row items-center p-4 justify-between">
        {/* Image  */}
        <div className="md:w-24 flex items-center justify-center">
          <img src={commentBox} className=" " alt="" />
        </div>

        {/* Messages  */}
        <div className="md:w-7/12 px-5">
          <p className="">
            {" "}
            <span className="text-content text-xs font-semibold">
              @mehshiyar:
            </span>{" "}
            <span className="text-grays-light text-xs">
              Post dalela hain maine
            </span>{" "}
          </p>
          <p className="md:border-l-[0.1rem] md:border-l-slate-400">
            <span className="inline-block w-8 h-[0.1rem] bg-slate-400"></span>
            <span className="text-content text-[0.65rem] font-semibold">
              @menhihoshiyar:
            </span>{" "}
            <span className="text-grays-light text-[0.65rem]">
              Post dalela hain maine
            </span>{" "}
          </p>

          <p className="md:border-l-[0.1rem] md:border-l-slate-400 ml-10">
            <span className="inline-block w-8 h-[0.1rem] bg-slate-400"></span>
            <span className="text-content text-[0.65rem] font-semibold">
              @mehshiyar:
            </span>{" "}
            <span className="text-grays-light text-[0.65rem]">
              Post dalela hain maine
            </span>{" "}
          </p>

          <p className="md:border-l-[0.1rem] md:border-l-slate-400">
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
        <div className="md:border-l-2 md:border-l-yellows-light px-5 flex justify-evenly items-center space-x-4">
          <div className="text-center md:space-y-2">
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
      </motion.div>

  

  );
};

export default PostComment;
