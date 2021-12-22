import './Task.css';
import React from "react";
import { useState } from 'react/cjs/react.development';

function Task({ task, handleRemove }) {

    const [isComplete, setIsComplete] = useState(false);

    return (
        <>
            <div id={task.id} key={task.id} name="task" value={task.id} className={isComplete ? "Task done" : "Task"}>
                <h1>{task.name}</h1>
                <p>{task.desc}</p>
                <p>{task.date}</p>
                <button id={task.id} onClick={() => setIsComplete(!isComplete)}>Complétée!</button>
                <button id={task.id} onClick={() => handleRemove(task.id)}>Supprimer</button>
            </div>
        </>
    );
}

export default Task;