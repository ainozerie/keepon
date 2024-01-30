import React, { useState } from 'react';

interface TaskProps {
    onClickTask: (taskId: string) => void,
    active: boolean,
    id: string
}

function Task(props: TaskProps) {

    const toggleActivity = (): void => {
        if (props.active) {
            props.onClickTask('');
        } else {
            props.onClickTask(props.id);
        }
    }
    return (
        <div className={props.active ? 'task active' : 'task'} onClick={toggleActivity}>
            <div className="info">
                <p className="title">
                    Finish backend part
                </p>
                <p className={props.active ? 'description' : 'description hidden'}>
                    Some specific information that could be useful to describe the task more precise with all details
                </p>
                <p className="timeout">
                    6 days left
                </p>

            </div>
        </div>
    );
}

export default Task;