import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import './display.css';

function Display() {
    const activeTaskId = useSelector((state: RootState) => state.task.activeTaskId);

    return (
        <div className='display'>
            <p>Your current tasks</p>
        </div>
    );
}

export default Display;