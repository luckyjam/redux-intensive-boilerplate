
// Core
import { put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';


export function* getFavoritesWorker () {
    try {

        const favorites = JSON.parse(localStorage.getItem('favorites'));

        yield put(moviesActions.getFavoritesSuccess(favorites));
    } catch (error) {
        yield put(moviesActions.getFavoritesFail(error));
    }
}
