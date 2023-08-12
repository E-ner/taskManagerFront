import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ taskList, handleClick, toggle }) => {
  const transition = { type:"spring",duration:0.8};

  return (
    <AnimatePresence>
      <motion.div 
        className="self-center mt-2 flex flex-col w-[26rem]"
        initial={{
          x:0,
          y:100,
          opacity:0,
          transition:{...transition,delay:0.5}
      }}
        animate={{
          x:0,
          y:0,
          opacity:1,
          transition:{...transition,delay:0,damping:5,stiffness:50}
        }}
        exit={{
          x:0,
          y:100,
          transition: {...transition,delay:0}
        }}
      >
      <h3 className="text-xl text-slate-200 text-center">Task List</h3>

      <div className={`overflow-scroll ${toggle ? "h-[23rem]" : "h-40"}`}>
        {taskList[0] == undefined ? (
          <p className=" text-gray-300 text-center">No Task Provided</p>
        ) : (
          taskList.map((tasks) => {
            return (
              <ul
                key={tasks.id}
                className="mt-4 rounded-md flex w-full bg-white p-2 bg-opacity-30 flex-row"
              >
                <div>
                  <li className="text-lg">{tasks.name}</li>
                  <li className="text-sm">{tasks.time}</li>
                </div>
                <button
                  className="self-center ml-auto mr-6 text-lg text-white rounded-3xl bg-red-600 p-1 text-center w-[2.3rem]"
                  onClick={() => {
                    handleClick(tasks.id);
                  }}
                >
                  <i className="bi-trash"></i>
                </button>
              </ul>
            );
          })
        )}
      </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskList;
