// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';
import { getMoviesApi } from 'instruments/api';

export function* fetchTopMoviesWorker ({ payload: filter }) {
    try {
        // yield console.log('start');
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
        yield put(moviesActions.getFavorites());
        yield put(moviesActions.fetchTopMoviesSuccess(movies));
    } catch (message) {
        yield put(moviesActions.fetchTopMoviesFail(message));
    } finally {
        // yield console.log('stop');
    }
}
