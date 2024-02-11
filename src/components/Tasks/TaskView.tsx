import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Common/Icon';
import './taskView.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setNewTask } from '../../redux/TaskReducer';

interface TaskViewProps {
    taskId: string,
    title: string,
    description: string | undefined
}

function TaskView() {
    const newTask = useSelector((state: RootState) => state.task.newTask);
    const dispatch = useDispatch();

    const onChangeHandler = (event: any) => {
        const property = event.target.name;
        switch (property) {
            case 'title' :
                dispatch(setNewTask({...newTask, title: event.target.value}));
                break;
            case 'description' :
                dispatch(setNewTask({...newTask, description: event.target.value}));
                break;
            case 'deadline' :
                dispatch(setNewTask({...newTask, deadline: event.target.value}));
                break;
        }
    };

    return (
        <div className="task-view">
            <p className='header'>Creating a task</p>
            <div className="title">
                <label>
                    Title
                    <input name='title' type='text' placeholder='Required' value={newTask.title} onChange={onChangeHandler}/>
                </label>
            </div>
            <div className="description">
                <label>
                    Description
                    <textarea name='description' placeholder='Optional' rows={4} value={newTask.description} onChange={onChangeHandler}/>
                </label>
            </div>
            <div className="deadline">
                <label>
                    Optional deadline
                </label>
                <input name='deadline' type='date' min={new Date().toISOString().split("T")[0]} value={newTask.deadline} onChange={onChangeHandler}/>
            </div>
        </div>
    );
}

export default TaskView;