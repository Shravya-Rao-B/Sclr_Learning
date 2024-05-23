// rfce
import  { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    // Complete the function
    setTasks([...tasksArr,inputValue])
  };

  const handleDelete = (idx) => {
    // Complete the function
    let newArr = tasksArr.filter((item, cidx) => {return cidx != idx})
    setTasks(newArr)
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;
