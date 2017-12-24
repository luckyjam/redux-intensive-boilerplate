// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/movies/types';
import { fetchTopMoviesWorker } from './workers/fetchTopMovies';
import { fetchGenresWorker } from './workers/fetchGenres';
import { addFavoriteWorker } from './workers/addFavorite';
import { getFavoritesWorker } from './workers/getFavorites';
import { deleteFavoriteWorker } from './workers/deleteFavorite/index';

export default Object.freeze({
    * fetchTopMoviesWatcher () {
        yield takeEvery(types.FETCH_TOP_MOVIES, fetchTopMoviesWorker);
    },
    * addFavoriteWatcher () {
        yield takeEvery(types.ADD_TO_FAVORITES, addFavoriteWorker);
    },
    * getFavoritesWatcher () {
        yield takeEvery(types.GET_FAVORITES, getFavoritesWorker);
    },
    * deleteFavoriteWatcher () {
        yield takeEvery(types.DELETE_FAVORITE, deleteFavoriteWorker);
    },
    * fetchGenresWatcher () {
        yield takeEvery(types.FETCH_GENRES, fetchGenresWorker);
    }
});
