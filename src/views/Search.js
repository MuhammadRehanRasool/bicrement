import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import icon_1 from "../Assets/icons/pencils-draw-svgrepo-com.png";
import icon_2 from "../Assets/icons/test-tube.png";
import icon_3 from "../Assets/icons/violin-svgrepo-com.png";
import icon_4 from "../Assets/icons/ballet-svgrepo-com.png";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
const Search = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = () => {
    setData(contents); // remove this later // *contents* is a demo data
    // axios
    //   .get("")
    //   .then((data) => {
    //     setData([]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start justify-between shadow-lg  rounded-b-2xl relative md:h-[33rem] xl:h-[calc(100vh-10rem)]"
    >
      <div className="px-6 py-8 w-full md:h-44 flex justify-between items-center">
        <div className="space-y-3 w-11/12">
          <div className="border border-grays-light rounded-full w-full md:w-6/12 shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2">
            <input
              type="text"
              name="search"
              value={search}
              className="outline-none"
              placeholder="What do you want to learn?"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <IoIosSearch className="cursor-pointer" />
          </div>
        </div>

        <div
          onClick={() => handleRoute()}
          className="text-center cursor-pointer"
        >
          <AiOutlineClose className="text-2xl text-grays-light" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:flex-wrap gap-8 px-5 md:px-16 md:overflow-y-scroll py-8 searches">
        {data
          .filter((content) => {
            return (
              content.text.toLowerCase().includes(search.toLowerCase()) ||
              content.desc.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((content, index) => {
            return (
              <div className="w-full md:w-[32rem] flex md:justify-between space-x-10 content" key={index}>
                <img
                  src={content.icon}
                  alt=""
                  className=" w-8 md:w-auto h-8 md:h-10"
                />
                <p className="w-2 h-full bg-grays-light hidden md:block"></p>
                <div className="">
                  <p className="text-content sm">{content.text}</p>
                  <p className="text-grays-light text-xs">{content.desc}</p>
                </div>
              </div>
            );
          })}
      </div>

      <button
        className="bg-blues-dark text-yellows-dark w-56 shadow-lg absolute  py-3 rounded-l-full rounded-br-full"
        style={{
          top: "100%",
          right: "0%",
        }}
      >
        Explore
      </button>
    </motion.div>
  );
};

// Demo data start
const contents = [
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
  {
    text: "Level2 Certificate : Driving Like Solmon",
    icon: icon_4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius labore odit rerum quasi consectetur tenetur dolor suscipit nesciunt ipsam praesentium numquam architecto vero cupiditate dolorem, voluptatum facere itaque sunt!",
  },
];
// Demo data end

export default Search;
