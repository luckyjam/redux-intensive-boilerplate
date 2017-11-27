// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import uiActions from 'actions/ui';
import feedActions from 'actions/feed';
import { api } from 'instruments/api';
import post from 'schema/feed';

export function* fetchPostsWorker () {
    try {
        yield put(uiActions.startFetchingFeed());

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed`, {
            method:  'GET',
            headers: {
                Authorization: token
            }
        });

        const { data: posts, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        const normalizedPosts = normalize(posts, [post]);

        yield put(feedActions.fetchPostsSuccess(normalizedPosts));
    } catch ({ message }) {
        yield put(feedActions.fetchPostsFail(message));
    } finally {
        yield put(uiActions.stopFetchingFeed());
    }
}
