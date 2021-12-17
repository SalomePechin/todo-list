import './Task.css';
import React from "react";

function Task({ task }) {

    return (
        <div className="Task">
            <li>
                <div>{task.id}</div>
                <div>{task.name}</div>
                <div>{task.desc}</div>
                <div>{task.date}</div>
            </li>
        </div>
    );
}

export default Task;