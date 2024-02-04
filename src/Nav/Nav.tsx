import React from 'react';
import './nav.css';
import Icon from '../Common/Icon';

function Nav() {
    const openMenu = () => {
        console.log('opens menu')
    }

    return (
        <nav>
            <div className="logo">
                keepon
            </div>
            <Icon disabled={false} name='menu' onClick={openMenu}/>
        </nav>
    );
}

export default Nav;