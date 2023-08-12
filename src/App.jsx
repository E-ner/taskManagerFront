import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";
import "./assets/bootstrap-icons-1.10.5/font/bootstrap-icons.css";

const App = () => {
  const [task, setTask] = useState([]);
  const [toggle,setToggle] = useState(false);

  useEffect(() => {
    var datas = localStorage.tasks;
    if (datas == undefined) return;
    setTask(JSON.parse(datas));
  }, []);
  const deleteTask = (id) => {
    setTask(
      task.filter((taskers) => {
        const data = JSON.parse(localStorage.tasks).filter((data) => {
          return data.id !== id;
        });
        localStorage.tasks = JSON.stringify(data);
        return taskers.id !== id;
      })
    );
  };

  const toggLing = (toToggle) => {
    setToggle(toToggle);
  }

  const saveTask = (tasks) => {
    if(tasks.name == "" || tasks.time == "") return;
    const newTask = { ...tasks };
    setTask([...task, newTask]);
    localStorage.tasks = JSON.stringify([...task, newTask]);
  };
  return (
    <div className="app flex flex-col bg-gray-500 transition-all ease-in">
      <Header />
      <TaskCreator onSubmit={saveTask} handleToggle={ toggLing}/>
      <TaskList taskList={task} handleClick={deleteTask} toggle = {toggle}/>
    </div>
  );
};

export default App;
