import React from 'react';

interface ButtonProps {
    title: string,
    class: string
}

function Button(props: ButtonProps) {
    return (
        <button>
            {props.title}
        </button>
    );
}

export default Button;