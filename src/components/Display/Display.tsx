import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import './display.css';

function Display() {
    return (
        <div className='display'>
            <p>Your current tasks</p>
        </div>
    );
}

export default Display;