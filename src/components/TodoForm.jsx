//Used to add new items to our todo list
import { useState } from "react";

const TodoForm = (props) => {

    const {task, setTask} = props
    const [taskName, setTaskName] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTask([...task,{
            id: crypto.randomUUID(),
            task: taskName,
            isComplete: false
        }])
        setTaskName("")
    }

    return (
        <>
        <form onSubmit={ onFormSubmit }>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
            <button>Add</button>
        </form>
        </>
    )
}

export default TodoForm;