import {useState} from "react";

function InputBox(props) {
const [ip, setIp] = useState(""); 
const {addTask} = props;
  const handleInput = (e) => {
        setIp(e.target.value)
  };
  const addTaskChild = () => {
    // Add code here
    addTask(ip);
    setIp("");
  };
  return (
    <div className="inputbox">
      <input type="text" value={ip} onChange={handleInput}/>
      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
