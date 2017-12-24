// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';
import uiActions from 'actions/ui';
import { getMoviesApi } from 'instruments/api';

export function* fetchMoviesWorker ({ payload: filter }) {
    try {
        yield put(uiActions.startFetchingMovies());
        const api = getMoviesApi(filter);
        const response = yield call(fetch, `${api}`, {
            method: 'GET'
        });

        const { results: movies, message } = yield call([
            response,
            response.json
        ]);


        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(moviesActions.fetchMoviesSuccess(movies));
    } catch (message) {
        yield put(moviesActions.fetchMoviesFail(message));
    } finally {
        yield put(uiActions.stopFetchingMovies());
    }
}
