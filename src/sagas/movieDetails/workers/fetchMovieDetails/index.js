// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import movieDetailsActions from 'actions/movieDetails';
import { movieDetailsApi } from 'instruments/api';

export function* fetchMovieDetailsWorker ({ payload: movieId }) {
    try {
        const getMovieApi = movieDetailsApi(movieId);
        const response = yield call(fetch, getMovieApi, {
            method: 'GET'
        });

        const movieDetails = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200) {
            throw new Error();
        }
        yield put(movieDetailsActions.fetchMovieDetailsSuccess(movieDetails));
    } catch ({ message }) {
        yield put(movieDetailsActions.fetchMovieDetailsFail(message));
    }
}
