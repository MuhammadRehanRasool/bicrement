import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import testTube from "../Assets/icons/test-tube.png";
import Card1 from "./utils/Card1";
import { motion } from "framer-motion";
const ExploreSearch = () => {
    const navigate = useNavigate();

    const handleRoute = () => {
      navigate(-1);
    };
  


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="shadow-md rounded-xl flex flex-col items-center justify-start p-5 md:w-72 space-y-5 h-full"
    >
    <div
          onClick={() => handleRoute()}
          className="cursor-pointer flex justify-end w-[99%]"
        >
          <AiOutlineClose className="text-md text-grays-light" />
        </div>


      <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 w-full">
        <input
          type="text"
          name=""
          id=""
          className="outline-none"
          placeholder="Starts Typing"
        />
      </div>

      {/* Searches Cards */}

      {/* All Cards */}
      {cardsData.map((card) => {
        return (
          <Card1
            key={uuidv4()}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            descFont="small"
            descColor="dark"
            iconSize="smallIcon"
          />
        );
      })}
    </motion.div>
  );
};

const cardsData = [
  {
    id: uuidv4(),
    icon: testTube,
    desc: "Training the Schrodinger's cat to stay alive.",
  },
  {
    id: uuidv4(),
    icon: testTube,
    desc: "Training the Schrodinger's cat to stay alive.",
  },
  {
    id: uuidv4(),
    icon: testTube,
    desc: "Training the Schrodinger's cat to stay alive.",
  },
  {
    id: uuidv4(),
    icon: testTube,
    desc: "Training the Schrodinger's cat to stay alive.",
  },
  {
    id: uuidv4(),
    icon: testTube,
    desc: "Training the Schrodinger's cat to stay alive.",
  },
];

export default ExploreSearch;
