import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveTaskId } from '../redux/TaskReducer';
import TaskView from './TaskView';

interface TaskProps {
    id: string,
    title: string,
    description: string | undefined,
    category: string | undefined
}

function Task(props: TaskProps) {
    const dispatch = useDispatch();
    const isActive = useSelector((state: RootState) => state.task.activeTaskId === props.id);

    const toggleActivity = (): void => {
        if (isActive) {
            dispatch(setActiveTaskId(''));
        } else {
            dispatch(setActiveTaskId(props.id));
        }
    }
    return (
        <div className={isActive ? 'task active' : 'task'} onClick={toggleActivity}>
            <div className="info">
                <p className="title">
                    {props.title}
                </p>
                <p className="timeout">
                    22/10
                </p>
            </div>
        </div>
    );
}

export default Task;