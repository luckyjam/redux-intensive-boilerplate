// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';
import { api, apiKey } from 'instruments/api';

export function* fetchTopMoviesWorker () {
    try {
        yield console.log('start');
        const response = yield call(fetch, `${api}${apiKey}`, {
            method: 'GET'
        });

        const { results: movies, message } = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(moviesActions.fetchTopMoviesSuccess(movies));
    } catch (message) {
        yield put(moviesActions.fetchTopMoviesFail(message));
    } finally {
        yield console.log('stop');
    }
}
