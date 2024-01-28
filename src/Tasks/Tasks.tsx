import React from 'react';
import Task from './Task';
import './tasks.css'

function Tasks() {

    return (
        <div className='tasks'>
            <h1>Current tasks:</h1>
            <Task />
            <Task />
        </div>
    );
}

export default Tasks;