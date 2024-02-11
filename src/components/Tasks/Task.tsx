import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setActiveTaskId } from '../../redux/TaskReducer';

interface TaskProps {
    id: string,
    title: string,
    description: string | null | undefined,
    deadline: string | null | undefined
}

function Task(props: TaskProps) {
    const dispatch = useDispatch();
    const isActive = useSelector((state: RootState) => state.task.activeTaskId === props.id);
    
    const toggleActivity = (): void => {
        if (isActive) {
            dispatch(setActiveTaskId(''));
        } else {
            console.log(props.id)
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
            {props.description && <p className={isActive ? 'description active' : 'description'}>{props.description}</p>}
            {!props.description && <p className={isActive ? 'description active other' : 'description other'}>No description</p>}
        </div>
    );
}

export default Task;