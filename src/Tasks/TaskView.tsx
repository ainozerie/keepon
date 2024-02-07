import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Common/Icon';

interface TaskViewProps {
    taskId: string,
    category: string | undefined,
    title: string,
    description: string | undefined
}

function TaskView(props: TaskViewProps) {
    return (
        <div className="task-view">
            {props.category && <p className='category'>{props.category}</p>}
            {!props.category && <p className='category'>GENERAL</p>}
            <p className='title'>{props.title}</p>
            {props.description && <p className='description'>{props.description}</p>}

        </div>
    );
}

export default TaskView;