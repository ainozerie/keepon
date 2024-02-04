import React from 'react';

interface IconProps {
    name: string,
    onClick: (event: any) => void,
    disabled: boolean
}

function Icon(props: IconProps) {
    const iconClass = "material-symbols-outlined";

    return (
        <span className={props.disabled ? iconClass + ' disabled' : iconClass} onClick={props.onClick} key={props.name}>{props.name}</span>
    );
}

export default Icon;