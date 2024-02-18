import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { setActiveTaskId, setTasks } from '../../../redux/TaskReducer';
import Icon from '../../lib/Icon';
import { deleteTask } from '../../../services/taskService';
import { TaskInterface } from '../../interfaces/Task';

interface TaskProps {
    id: string,
    title: string,
    description: string | null | undefined,
    deadline: string | null | undefined,
    completed: boolean
}

function Task(props: TaskProps) {
    const dispatch = useDispatch();
    const isActive = useSelector((state: RootState) => state.task.activeTaskId === props.id);
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const toBeDeleted = useSelector((state: RootState) => state.task.toBeDeleted);
    const toBeAdded = useSelector((state: RootState) => state.task.toBeAdded);
    
    const toggleActivity = (): void => {
        if (!props.completed) {
            if (isActive) {
                dispatch(setActiveTaskId(''));
            } else {
                dispatch(setActiveTaskId(props.id));
            }
        } else {
        }
    }
    
    const deleteCompleted = () => {
        deleteTask(props.id);
        let updatedTasks:TaskInterface[] = [...tasks.filter(t => t.id !== props.id)];
        dispatch(setTasks(updatedTasks));
        dispatch(setActiveTaskId(''));
    }

    const retriveDate = (date:string) => {
        let dataArr:string[] = date.split('-');
        return dataArr[2] + '/' + dataArr[1];
    }

    return (
        <div className={`${isActive && toBeAdded !== props.id && toBeDeleted !== props.id ? 'task active' : 'task'}${props.completed ? ' completed' : ''}${toBeDeleted === props.id ? ' to-be-deleted': ''} ${toBeAdded === props.id ? 'to-be-added': ''}`} onClick={toggleActivity}>
            <div className="info">
                <p className="title">
                    {props.title}
                </p>
                {!props.completed && <p className="timeout">
                    {props.deadline ? retriveDate(props.deadline) : ''}
                </p>}
                {props.completed && <Icon name='block' onClick={deleteCompleted} active={true}/>}
            </div>
            {props.description && <p className={isActive ? 'description active' : 'description'}>{props.description}</p>}
            {!props.description && <p className={isActive ? 'description active other' : 'description other'}>No description</p>}
        </div>
    );
}

export default Task;