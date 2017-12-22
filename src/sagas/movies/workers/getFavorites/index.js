
// Core
import { put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';


export function* getFavoritesWorker () {
    try {
        const favoritesInStorage = localStorage.getItem('favorites');
        const favorites = favoritesInStorage ? JSON.parse(favoritesInStorage) : [];

        yield put(moviesActions.getFavoritesSuccess(favorites));
    } catch (error) {
        yield console.log('error', error);
    }
}
