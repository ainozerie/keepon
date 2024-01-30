import React, { useState } from 'react';
import Task from './Task';
import './tasks.css'

interface TaskProps {
    onClickTask: (taskId: string) => void,
    active: boolean,
    id: string
}

function Tasks() {
    const [activeTask, setActiveTask] = useState<String>('');

    const onClickTask = (taskId: string):void => {
        setActiveTask(taskId);
    }

    const tasks: any = ['123', '124', '456', '567', '678', '789', '11', '22', '33', '44', '55', '66', '77', '88'];

    return (
        <div className='tasks'>
            <h1>Current tasks:</h1>
            {tasks.map((task: string) => {
                return <Task id={task} onClickTask={onClickTask} active={activeTask === task} />
            })}
        </div>
    );
}

export default Tasks;