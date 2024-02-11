import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setActiveTaskId } from '../../redux/TaskReducer';
import './tasks.css'
import TaskView from './TaskView';
import Overlay from '../Common/Overlay';
import { getTasks } from '../../services/taskService';
import { TaskInterface } from '../interfaces/Task';

interface TaskProps {
    id: string
}

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.task.tasks);

    const tasksListing = tasks.map((task: TaskInterface) => {
        return <Task id={task._id} 
                     key={task._id} 
                     title={task.title} 
                     description={task.description}
                     deadline={task.deadline}/>
    });

    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);
    return (
        <div className='tasks'>
            {tasksListing.length > 0 ? tasksListing : <div className='no-data'>Nothing to show..</div>}
            {activeTaskId === 'new' && <TaskView />}
            <Overlay condition={activeTaskId === 'new'} onclick={() => console.log('hi')}/>
        </div>
    );
}

export default Tasks;