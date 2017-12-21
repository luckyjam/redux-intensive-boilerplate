// Types
import types from './types';

export default Object.freeze({
    fetchMovieDetails: (movieId) => ({
        type:    types.FETCH_MOVIE_DETAILS,
        payload: movieId
    }),
    fetchMovieDetailsSuccess: (movie) => ({
        type:    types.FETCH_MOVIE_DETAILS_SUCCESS,
        payload: movie
    }),
    fetchMovieDetailsFail: (message) => ({
        type:    types.FETCH_MOVIE_DETAILS_FAIL,
        payload: message
    }),
    clearMovieDetails: () => ({
        type: types.CLEAR_MOVIE_DETAILS
    })
});
