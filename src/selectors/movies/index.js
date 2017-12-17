// Core
import { createSelector } from 'reselect';

const topMoviesList = (state) => state.get('topMovies');

export const getTopMovies = createSelector(
    topMoviesList,
    (topMovies) => topMovies.toJS()
);
