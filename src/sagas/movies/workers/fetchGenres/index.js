// Core
import { put, call } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';
import uiActions from 'actions/ui';
import { getGenres } from 'instruments/api';

export function* fetchGenresWorker () {
    try {

        const response = yield call(fetch, getGenres, {
            method: 'GET'
        });

        const { genres, message } = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(moviesActions.fetchGenresSuccess(genres));

        // Load favorites from Local Storage
        yield put(moviesActions.getFavorites());
        yield put(moviesActions.fetchTopMovies('top_rated'));
        yield put(uiActions.initialize());
    } catch ({ message }) {
        yield put(moviesActions.fetchGenresFail(message));
    }
}
