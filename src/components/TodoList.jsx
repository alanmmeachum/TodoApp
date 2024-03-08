//Maps over our tasks to render them to the page
import React, { useState } from "react";

const TodoList = (props) => {

    const {task, setTask} = props;

    const handleDelete = (item) => {
        setTask(task.filter((task) => task !== item))
    }

    const handleStrike = (e, item) => {
        item.isComplete = !item.isComplete; // Toggle the value of isComplete
        setTask([...task]); // Update the state to trigger re-render
    }
    

    return (
        <div className="form">
            {  
                task.map((item, index) => 
                {
                return (
                    <ul>
                        <li id={item.id} className={item.isComplete ? "strike": ""} key={item.id} >{ item.task }</li>
                        <input type="checkbox" id={item.id} className="checkbox" onClick={(e) => handleStrike(e, item)}/>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </ul>
                    )
                })
                
            }    
        </div>
    )
}

export default TodoList;