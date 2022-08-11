import React from "react";
import playBtn from '../../Assets/icons/play-button-svgrepo-com.svg'
import assignments from '../../Assets/icons/class-notes-svgrepo-com.svg'
import notebook from '../../Assets/icons/notes-note-svgrepo-com.svg'
import tasks from '../../Assets/icons/notes-push-pin-svgrepo-com (1).svg'


const CourseOutline = () => {
  const ColoredLine = ({ color }) => (
    <hr
    className="bg-yellows-light text-yellows-light"
      style={{
        height: 3,
        width: '80%',
      }}
    />
  );

  return (
    <div className="mt-1">
      <div className="flex items-center justify-between">
        <h1 className="text-xs w-auto text-content">Section 1: Introduction </h1>{" "}
        <ColoredLine />
      </div>
      {/* Three */}
      <div className="flex items-center justify-around py-2 space-x-5">
        <div className="border  w-[20%] rounded-[2.5rem]  shadow-inner flex flex-col justify-evenly items-center  p-3">
          <img
            src={playBtn}
            className="w-6"
            alt=""
          />
          <p className="text-xs text-blues-light mt-2">Introduction</p>
        </div>
        <div className="border  w-2/6  rounded-[2.5rem]  shadow-inner flex flex-col justify-evenly items-center  p-3">
          <img
             src={playBtn}
            className="w-6"
            alt=""
          />
          <p className="text-xs text-blues-light mt-2">Find a good driver</p>
        </div>
        <div className="border  w-3/6  rounded-[2.5rem]  shadow-inner flex flex-row justify-evenly items-center  p-3">
          <div className='flex flex-col items-center'>
            <img
              src={assignments}
              className="w-6"
              alt=""
            />
            <p className="text-xs text-blues-light mt-2">Assignment</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={notebook}
              className="w-6"
              alt=""
            />
            <p className="text-xs text-blues-light mt-2">Notebook</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src={tasks}
              className="w-6"
              alt=""
            />
            <p className="text-xs text-blues-light mt-2">Task</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;