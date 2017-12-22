
// Core
import { put } from 'redux-saga/effects';

// Instruments
import moviesActions from 'actions/movies';


export function* addFavoriteWorker ({ payload: movie }) {
    try {

        let favorites = [];
        const favoritesCurrent = JSON.parse(localStorage.getItem('favorites'));

        favoritesCurrent ? favorites = favoritesCurrent : favorites;
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        favorites = JSON.parse(localStorage.getItem('favorites'));

    } catch (error) {
        yield put(moviesActions.addToFavoritesFail(error));
    }
}
