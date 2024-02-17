import React from 'react';
import { deleteTask, editTask } from '../../services/taskService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { TaskInterface } from '../interfaces/Task';
import Icon from '../lib/Icon';
import './panel.css';
import { setActiveTaskId, setEdit, setNewTask, setTasks, setToBeAdded, setToBeDeleted } from '../../redux/TaskReducer';

function Panel() {

    const dispatch = useDispatch();
    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);
    const tasks = useSelector((state: RootState) => state.task.tasks);

    const deleteSelectedTask = () => {
        dispatch(setToBeDeleted(activeTaskId));
        setTimeout(() => {
            deleteTask(activeTaskId);
            let updatedTasks:TaskInterface[] = [...tasks.filter(t => t.id !== activeTaskId)];
            dispatch(setTasks(updatedTasks));
            dispatch(setActiveTaskId(''));
            dispatch(setToBeDeleted(''));
        }, 250);
    }
    const completeSelectedTask = () => {
        dispatch(setToBeDeleted(activeTaskId));
        let active = activeTaskId;
        dispatch(setActiveTaskId(''));
        setTimeout(() => {
            dispatch(setToBeDeleted(''));
            let currentTask:TaskInterface | undefined = tasks.find(t => t.id === active);
            let updatedTasks = [...tasks.filter(t => t.id !== active)];
            if (currentTask) {
                currentTask = editTask({...currentTask, completed: true});
                updatedTasks.push(currentTask)
            }
            dispatch(setTasks(updatedTasks));
            dispatch(setToBeAdded(active));
            setTimeout(() => dispatch(setToBeAdded('')), 0);
        }, 250);
    }
    const editSelectedTask = () => {
        dispatch(setEdit(true));
        let currentTask:TaskInterface | undefined = tasks.find(t => t.id === activeTaskId);
        if (currentTask) {
            dispatch(setNewTask({title: currentTask.title, description: currentTask.description, deadline: currentTask.deadline}))
        }
    }

    return (
        <div className={activeTaskId !== '' && activeTaskId !== 'new' ? 'panel active' : 'panel'}>
            <Icon name='thumb_up' onClick={completeSelectedTask} active={true}/>
            <Icon name='edit_square' onClick={editSelectedTask} active={true}/>
            <Icon name='cancel' onClick={deleteSelectedTask} active={true}/>
        </div>
    );
}

export default Panel;