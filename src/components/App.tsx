import React from 'react';
import { Provider } from "react-redux";
import { store } from '../redux';
import Nav from './Nav/Nav';
import Main from './main/Main';
import Display from './Display/Display';
import Panel from './Panel/Panel';

function App() {
    // fix for safari on Iphone moving fields
    document.addEventListener('focusout', function(e) { window.scrollTo(0, 0) });
    
    return (
        <Provider store={store}>
            <Nav/>
            <Display/>
            <Main/>
            <Panel />
        </Provider>
    );
}

export default App;