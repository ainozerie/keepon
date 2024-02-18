import React from 'react';

function Overlay(props: {condition: boolean, onclick: () => void}) {
    return (
        <div className={props.condition ? 'task-view-overlay' : 'task-view-overlay hidden'} onClick={props.onclick}>
        </div>
    );
}

export default Overlay;