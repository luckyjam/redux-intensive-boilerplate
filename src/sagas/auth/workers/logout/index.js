// Core
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

// Instruments
import pages from 'routes/pages';
import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import { api } from 'instruments/api';

export function* logoutWorker () {
    try {
        yield put(uiActions.startFetchingAuth());

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/user/logout`, {
            method:  'GET',
            headers: {
                Authorization: token
            }
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(authActions.logoutSuccess());
    } catch ({ message }) {
        yield put(authActions.logoutFail(message));
    } finally {
        localStorage.removeItem('token');
        yield put(profileActions.clearProfile());
        yield put(uiActions.stopFetchingAuth());
        yield put(push(pages.login));
    }
}
