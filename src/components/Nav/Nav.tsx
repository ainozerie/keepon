import React from 'react';
import './nav.css';
import Icon from '../lib/Icon';
import { useDispatch } from 'react-redux';
import { setActiveTaskId } from '../../redux/TaskReducer';

function Nav() {
    const dispatch = useDispatch();

    const createNewTask = () => {
        dispatch(setActiveTaskId('new'));
    }

    return (
        <nav>
            <div className="logo">
                keepon
            </div>
            <Icon active={true} name='add_circle' onClick={createNewTask}/>
        </nav>
    );
}

export default Nav;