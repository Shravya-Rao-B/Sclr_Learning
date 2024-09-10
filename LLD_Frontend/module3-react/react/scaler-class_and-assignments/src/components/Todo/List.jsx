function List(props){
    const {taskArray, deleteItem} = props;

    const deleteTask = (task) => {
        deleteItem(task);
    }

    return <div> 
        <ul>
            {
            taskArray.map((task ,idx) => {
                return <li key={idx} onClick={() => deleteTask(idx)}>{task}</li>
            }
            )
        }
        </ul>
    </div>
}

export default List;