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
        <div className='task' onClick={toggleActivity}>
            <div className="info">
                <p className="title">
                    Finish backend part within two days...
                </p>
                <p className="timeout">
                    6 days left
                </p>

            </div>
        </div>
    );
}

export default Task;