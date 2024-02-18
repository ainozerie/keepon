import React from 'react';
import Task from './Task';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import './tasks.css'
import TaskView from './TaskView';
import Overlay from '../../lib/Overlay';
import { TaskInterface } from '../../interfaces/Task';

function Tasks() {
    const tasks = useSelector((state: RootState) => state.task.tasks);

    const tasksListing = tasks.map((task: TaskInterface) => {
        return <Task id={task.id} 
                     key={task.id} 
                     title={task.title} 
                     description={task.description}
                     deadline={task.deadline}
                     completed={task.completed}/>
    });

    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);
    const edit = useSelector((state: RootState) => state.task.edit);
    return (
        <div className='tasks'>
            {tasksListing.length > 0 ? tasksListing : <div className='no-data'>Nothing to show...</div>}
            {activeTaskId === 'new' && <TaskView />}
            {edit && <TaskView />}
            <Overlay condition={activeTaskId === 'new' || edit} onclick={() => console.log('hi')}/>
        </div>
    );
}

export default Tasks;