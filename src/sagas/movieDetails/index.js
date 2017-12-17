// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/movieDetails/types';
import { fetchMovieDetailsWorker } from './workers/fetchMovieDetails';

export default Object.freeze({
    * fetchMovieDetailsWatcher () {
        yield takeEvery(types.FETCH_MOVIE_DETAILS, fetchMovieDetailsWorker);
    }
});
