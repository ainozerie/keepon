import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './taskView.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux'
import { setActiveTaskId, setEdit, setNewTask, setTasks, setToBeAdded } from '../../../redux/TaskReducer';
import Icon from '../../lib/Icon';
import { createTask, editTask } from '../../../services/taskService';

interface TaskViewProps {
    taskId: string,
    title: string,
    description: string | undefined
}

function TaskView() {
    const newTask = useSelector((state: RootState) => state.task.newTask);
    const edit = useSelector((state: RootState) => state.task.edit);
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);
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

    const cancel = () => {
        dispatch(setActiveTaskId(''));
        dispatch(setNewTask({title: '', description: '', deadline: ''}));
        dispatch(setEdit(false));
    }

    const submitNewTask = () => {
        if (newTask.title) {
            let createdTask = createTask(newTask);
            let updatedTasks = [...tasks, createdTask];
            dispatch(setToBeAdded(createdTask.id));
            setTimeout(() => dispatch(setToBeAdded('')), 500);
            dispatch(setTasks(updatedTasks));
            cancel();
        }
    }

    const editSelectedTask = () => {
        if (newTask.title) {
            let updatedTask = editTask({...newTask, completed: false, id: activeTaskId});
            let updatedTasks = [...tasks.map(t => {
                if (t.id === activeTaskId) {
                    return updatedTask;
                }
                return t;
            })];
            dispatch(setTasks(updatedTasks));
            dispatch(setNewTask({title: '', description: '', deadline: ''}));
            dispatch(setEdit(false));
        }
    }

    return (
        <div className="task-view">
            <p className='header'>Creating a task</p>
            <div className="title">
                <label>
                    Title
                    <input name='title' autoFocus type='text' placeholder='Required' value={newTask.title} onChange={onChangeHandler}/>
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
            <div className="buttons">
                <Icon name='check' onClick={edit ? editSelectedTask : submitNewTask} active={true}/>
                <Icon name='close' onClick={cancel} active={true}/>
            </div>
        </div>
    );
}

export default TaskView;