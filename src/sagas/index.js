// Core
import { all } from 'redux-saga/effects';

// Instruments
import movies from './movies';
import movieDetails from './movieDetails';

export function* saga () {
    yield all([
        movies.fetchTopMoviesWatcher(),
        movies.addFavoriteWatcher(),
        movies.getFavoritesWatcher(),
        movieDetails.fetchMovieDetailsWatcher()
    ]);
}
