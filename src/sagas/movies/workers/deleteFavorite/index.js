// Core
import { put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';


export function* deleteFavoriteWorker ({ payload: favoriteId }) {
    try {
        const currentFavorites = JSON.parse(localStorage.getItem('favorites'));
        const favoritesAfterDelete = currentFavorites.filter(({ id }) => id !== favoriteId);

        localStorage.removeItem('favorites');
        localStorage.setItem('favorites', JSON.stringify(favoritesAfterDelete));

        yield put(moviesActions.getFavorites());
    } catch (error) {
        console.log('error:', error);
    }
}
