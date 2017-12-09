// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import './theme/reset.css';

// Components
import Routes from './routes';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
