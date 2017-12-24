// Core
import { all } from 'redux-saga/effects';

// Instruments
import movies from './movies';
import movieDetails from './movieDetails';

export function* saga () {
    yield all([
        movies.fetchMoviesWatcher(),
        movies.addFavoriteWatcher(),
        movies.getFavoritesWatcher(),
        movies.deleteFavoriteWatcher(),
        movies.fetchGenresWatcher(),
        movieDetails.fetchMovieDetailsWatcher()
    ]);
}
