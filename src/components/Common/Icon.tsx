import React from 'react';

interface IconProps {
    name: string,
    onClick: (event: any) => void ,
    active: boolean
}

function Icon(props: IconProps) {
    const iconClass = "material-symbols-outlined " + props.name;

    return (
        <span className={props.active ? iconClass + ' active' : iconClass} onClick={props.onClick} key={props.name}>{props.name}</span>
    );
}

export default Icon;