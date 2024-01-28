import React, { useState } from 'react';

function Task() {
    const [isActive, setIsActive] = useState<Boolean>(false);

    const toggleActivity = ():void => {
        
        setIsActive(!isActive);
    }
    return (
        <div className={isActive ? 'task active' : 'task'} onClick={toggleActivity}>
            <p className="title">
                Finish backend part
            </p>
            {isActive && <p className="description">Some specific information that could be useful to describe the task more precise with all details</p>}
            <p className="timeout">
                6 days left
            </p>
        </div>
    );
}

export default Task;