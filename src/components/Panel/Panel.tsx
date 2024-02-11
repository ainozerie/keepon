import React from 'react';
import './panel.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import Icon from '../Common/Icon';
import { deleteTask, createTaskOperation } from '../../services/taskService';
import { setActiveTaskId } from '../../redux/TaskReducer';
import ConfirmationPanel from '../ConfirmationPanel/ConfirmationPanel';

function Panel() {
    const dispatch = useDispatch();
    const activeTask = useSelector((state: RootState) => state.task.activeTaskId);
    const newTask = useSelector((state: RootState) => state.task.newTask);

    const completeTaskHandler = (event: any) => {
        console.log('complete task');
    }
    const editTaskHandler = (event: any) => {
        console.log('edit task');
    }
    const deleteTaskHandler = (event: any) => {
        console.log('delete task');
        if (activeTask !== '') {
            deleteTask(activeTask).then(res => {
                if (res.status === 204) {
                    console.log('deleted');
                }
            })
        }
    }

    const cancelHandler = () => {
        dispatch(setActiveTaskId(''));
    }
    const createNewTask = () => {
        if (newTask.title.length > 6) {
            createTaskOperation(newTask);
            dispatch(setActiveTaskId(''));
        }
    }

    const createTask = (event: any) => {
        dispatch(setActiveTaskId('new'));
    }
    const selectTasks = (event: any) => {
        console.log('task selection');
    }
    
    return (
        <div className='panel'>
            {activeTask === 'new' && <ConfirmationPanel valid={newTask.title.length > 6} confirm={createNewTask} cancel={cancelHandler} />}
            {activeTask === '' && <Icon name='add_circle' active={activeTask === '' ? true : false} onClick={createTask} />}
            {activeTask !== '' && activeTask !== 'new' && <>
                <Icon name='check_circle' active={activeTask !== '' && activeTask !== 'new' ? true : false} onClick={completeTaskHandler} />
                <Icon name='edit_square' active={activeTask !== '' && activeTask !== 'new' ? true : false}  onClick={editTaskHandler} />
                <Icon name='delete' active={activeTask !== '' && activeTask !== 'new' ? true : false} onClick={deleteTaskHandler} />
            </>}
        </div>
    );
}

export default Panel;