import React from 'react';
import './panel.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import Icon from '../Common/Icon';

function Panel() {
    const dispatch = useDispatch();
    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);

    const completeTaskHandler = (event: any) => {
        console.log('complete task');
    }
    const editTaskHandler = (event: any) => {
        console.log('edit task');
    }
    const deleteTaskHandler = (event: any) => {
        console.log('delete task');
    }
    const createTask = (event: any) => {
        console.log('create task');
    }
    const selectTasks = (event: any) => {
        console.log('task selection');
    }

    return (
        <div className="panel">
            <Icon name='thumb_up' disabled={false} onClick={completeTaskHandler} />
            <Icon name='edit_square' disabled={false}  onClick={editTaskHandler} />
            <Icon name='add_circle' disabled={false} onClick={completeTaskHandler} />
            <Icon name='bookmark' disabled={false}  onClick={createTask} />
            <Icon name='delete' disabled={false}  onClick={deleteTaskHandler} />
        </div>
    );
}

export default Panel;