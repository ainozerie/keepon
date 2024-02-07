import React from 'react';
import Tasks from './Tasks/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskView from './Tasks/TaskView';

function Main() {
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