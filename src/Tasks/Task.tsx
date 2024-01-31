import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setActiveTaskId } from '../redux/TaskReducer';

interface TaskProps {
    id: string
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
                    Finish backend part
                </p>
                <p className={isActive ? 'description' : 'description hidden'}>
                    Some specific information that could be useful to describe the task more precise with all details
                </p>
                <p className="timeout">
                    6 days left
                </p>

            </div>
        </div>
    );
}

export default Task;