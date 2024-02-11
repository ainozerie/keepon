import React from 'react';
import { Provider } from "react-redux";
import { store } from '../redux';
import Nav from './Nav/Nav';
import Main from './Main';
import Panel from './Panel/Panel';
import Display from './Display/Display';

function App() {
    // fix for safari on Iphone moving fields
    document.addEventListener('focusout', function(e) { window.scrollTo(0, 0) });
    return (
        <Provider store={store}>
            <Nav/>
            <Display/>
            <Main/>
            <Panel/>
        </Provider>
    );
}

export default App;