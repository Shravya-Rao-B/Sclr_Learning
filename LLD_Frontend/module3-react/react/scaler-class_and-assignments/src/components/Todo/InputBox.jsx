import React, {useState} from 'react';

function InputBox(props) {
    const [taskItem, setTaskItem] = useState('');
    const {addTaskItem} = props;

    const setInputValue = (event) => {
        setTaskItem(event.target.value);
    }

    const addItem = () => {
        addTaskItem(taskItem);
    }

    return <div>
        <input type="text" value={taskItem} onChange={setInputValue}/>
        <button onClick={addItem}>Add</button>
    </div>
}
export default InputBox;