// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/auth/types';
import { signupWorker } from './workers/signup';
import { loginWorker } from './workers/login';
import { logoutWorker } from './workers/logout';

export default Object.freeze({
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
    * loginWatcher () {
        yield takeEvery(types.LOGIN, loginWorker);
    },
    * logoutWatcher () {
        yield takeEvery(types.LOGOUT, logoutWorker);
    }
});
