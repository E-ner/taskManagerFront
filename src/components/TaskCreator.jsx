import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TaskCreator = ({ onSubmit ,handleToggle}) => {
  const [time, setTime] = useState();
  const [name, setNames] = useState("");
  const [toggle,setToggle] = useState(false);
  const transition = { type:"spring",duration:0.8};

  const submit = (e) => {
    e.preventDefault();

    if(name == "" || time== "") alert("Please provide the name and time");
    onSubmit({
      name: name,
      time: time,
      id: Math.floor(1000 * Math.random() + 1),
    });
    setTime("");
    setNames("");
  };

  return (
    <AnimatePresence>
      {toggle ? <motion.button
        className="self-end mr-36 mt-2 bg-red-500 text-white w-20 h-8 rounded-md"
        onClick={() => { 
          setToggle(!toggle)
          handleToggle(toggle);
        }}
      >
        Close
      </motion.button> : <motion.button
              initial={{
                x:-100,
                y:0,
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
        className="self-end mr-36 mt-2 bg-blue-500 text-white w-20 h-8 rounded-md"
        onClick={() => { 
          setToggle(!toggle) 
          handleToggle(toggle);
        }}
      >
        Create
      </motion.button>}
      {toggle&& (
              <motion.div 
                className="self-center w-[25rem] flex flex-col bg-black bg-opacity-20 rounded-lg pb-4 mt-4"
                initial={{
                  x:0,
                  y:-100,
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
                  y:-100,
                  transition: {...transition,delay:0}
                }}
              >
              <form
                className="self-center mt-11 w-120 flex flex-col"
                onSubmit={submit}
              >
                <div className="font-e flex">
                  <label
                    className="text-lg self-center text-gray-100"
                    htmlFor="taskName"
                  >
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="rounded-lg p-2 w-full ml-5 h-8"
                    placeholder="Task-Name"
                    id="taskName"
                    onChange={(e) => {
                      setNames(e.target.value);
                    }}
                  />
                </div>
                <div className="font-e flex mt-6">
                  <label className="text-lg self-center text-gray-100" htmlFor="time">
                    Time:{" "}
                  </label>
                  <input
                    value={time}
                    type="time"
                    className="rounded-lg p-2 w-full ml-5 h-8"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    id="time"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-950 text-white rounded-lg w-80 h-10 self-end mt-5"
                >
                  Save
                </button>
              </form>
            </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskCreator;
