import React, {useState} from 'react';
import InputBox from './InputBox';
import List from './List';

function HandleAllTodos() {
    const [todoArray, setTodoArray] = useState([]);
    const addTaskItem = (taskItem) => {
        setTodoArray([...todoArray, taskItem]);
    }
    const deleteItem = (taskItemIdx) => {
        let newArray = todoArray.filter((item, cidx) => {return cidx != taskItemIdx})
        setTodoArray(newArray);
    }
return <div>
    <InputBox addTaskItem={addTaskItem} />
    <List taskArray={todoArray}  deleteItem={deleteItem}/>
    </div>
}
export default HandleAllTodos;

