// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/movies/types';
import { fetchTopMoviesWorker } from './workers/fetchTopMovies';

export default Object.freeze({
    * fetchTopMoviesWatcher () {
        yield takeEvery(types.FETCH_TOP_MOVIES, fetchTopMoviesWorker);
    }
});
