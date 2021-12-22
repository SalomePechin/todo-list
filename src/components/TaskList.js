import './List.css';
import React from "react";
import Task from './Task';

function TaskList({ list, handleRemove  }) {

    return (
        <div className="TaskList">
            {(list || []).map(task => {
                return (
                    <Task key={task.id} task={task} handleRemove={handleRemove} />
                )
            })}
        </div>
    );
}

export default TaskList;