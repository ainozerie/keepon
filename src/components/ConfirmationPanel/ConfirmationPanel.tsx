import React from 'react';
import Icon from '../Common/Icon';

interface ConfirmationPanelProps {
    valid: boolean,
    confirm: () => void,
    cancel: () => void
}

function ConfirmationPanel(props: ConfirmationPanelProps) {
    return (
        <div className="confirmation">
            <Icon name='check_circle' active={props.valid}  onClick={props.confirm} />
            <Icon name='cancel' active={true}  onClick={props.cancel} />
        </div>
    );
}

export default ConfirmationPanel;