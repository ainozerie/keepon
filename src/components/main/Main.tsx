import React, { useEffect } from 'react';
import Tasks from './tasks/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getTasks } from '../../services/taskService';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../redux/TaskReducer';

function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTasks(getTasks()));
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