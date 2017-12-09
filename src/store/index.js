// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleware = [];
const composeEnchancers = devtools && dev ? devtools : compose;

// Instruments
import reducer from 'reducers';
import { saga } from 'sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
middleware.push(routerMiddleware(history));

export { history };
export default createStore(reducer, composeEnchancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);
