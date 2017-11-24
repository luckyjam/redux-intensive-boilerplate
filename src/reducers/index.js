// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import forms from './forms';
import ui from './ui';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    router,
    forms,
    ui,
    auth,
    profile
});
