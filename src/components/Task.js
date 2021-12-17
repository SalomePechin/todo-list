import './Task.css';
import React from "react";

function Task({ task }) {

    return (
        <div className="Task">
            <li>
                <div>{task.id}</div>
                <h1>{task.name}</h1>
                <p>{task.desc}</p>
                <div>{task.date}</div>
            </li>
        </div>
    );
}

export default Task;