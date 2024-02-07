import React, { useState } from 'react';
import Task from './Task';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveTaskId } from '../redux/TaskReducer';
import './tasks.css'
import TaskView from './TaskView';
import Overlay from '../Common/Overlay';

interface TaskProps {
    id: string
}

function Tasks() {
    const tasks: any[] = [{
        id: '123',
        title: 'Buy milk',
        description: 'K Market or Alepa, laktositon',
        category: 'HOME'
    },
    {
        id: '234',
        title: 'Call Nastya',
        description: '',
        category: 'FAMILY'
    },
    {
        id: '345',
        title: 'Finish keepon app',
        description: 'Frontend and backend part, deploying and testing mandatory',
        category: 'EXTRA'
    }];
    const dispatch = useDispatch();
    const isActive = useSelector((state: RootState) => state.task.activeTaskId !== '');
    const activeTask = useSelector((state: RootState) => tasks.find(t => t.id === state.task.activeTaskId));

    const closeTaskViewMode = () => {
        dispatch(setActiveTaskId(''));
    }

    return (
        <div className='tasks'>
            {tasks.map((task: any) => {
                return <Task id={task.id} key={task.is} title={task.title} description={task.description} category={task.category} />
            })}
            <Overlay condition={isActive} onclick={closeTaskViewMode} /> 
            {isActive && <TaskView taskId={activeTask.id} title={activeTask.title} description={activeTask.description} category={activeTask.category} />}
        </div>
    );
}

export default Tasks;