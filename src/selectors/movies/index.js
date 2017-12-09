// Core
import { createSelector } from 'reselect';

const topMoviesMap = (state) => state.get('topMovies');

export const getTopMovies = createSelector(
    topMoviesMap,
    (topMovies) => topMovies.toJS()
);
