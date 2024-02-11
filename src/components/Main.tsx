import React, { useEffect } from 'react';
import Tasks from './Tasks/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskView from './Tasks/TaskView';
import { getTasks } from '../services/taskService';
import { useDispatch } from 'react-redux';
import { setTasks } from '../redux/TaskReducer';
import { TaskInterface } from './interfaces/Task';

function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTasks().then(res => {
            if (res.status === 200) {
                const tasks: TaskInterface[] = res.data.data
                dispatch(setTasks(tasks));
            }
        });
    }, []);

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Tasks />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default Main;