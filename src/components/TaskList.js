import './List.css';
import React from "react";
import { useState } from 'react';
import Task from './Task';
import { filterItems } from '@babel/helper-compilation-targets';

function TaskList({ list }) {

    return (
        <div className="TaskList">
            <ul>
                {(list || []).map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;