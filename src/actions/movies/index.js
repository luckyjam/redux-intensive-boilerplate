// Types
import types from './types';

export default Object.freeze({
    fetchMovies: (filter) => ({
        type:    types.FETCH_MOVIES,
        payload: filter
    }),
    fetchMoviesSuccess: (movies) => ({
        type:    types.FETCH_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchMoviesFail: (message) => ({
        type:    types.FETCH_MOVIES_FAIL,
        payload: message
    }),
    addToFavorites: (movie) => ({
        type:    types.ADD_TO_FAVORITES,
        payload: movie
    }),

    addToFavoritesFail: (message) => ({
        type:    types.ADD_TO_FAVORITES_FAIL,
        payload: message
    }),
    getFavorites: () => ({
        type: types.GET_FAVORITES
    }),
    getFavoritesSuccess: (favorites) => ({
        type:    types.GET_FAVORITES_SUCCESS,
        payload: favorites
    }),

    deleteFavorite: (favoriteId) => ({
        type:    types.DELETE_FAVORITE,
        payload: favoriteId
    }),
    fetchGenres: () => ({
        type: types.FETCH_GENRES
    }),
    fetchGenresSuccess: (genres) => ({
        type:    types.FETCH_GENRES_SUCCESS,
        payload: genres
    }),
    fetchGenresFail: (message) => ({
        type:    types.FETCH_GENRES_FAIL,
        payload: message
    })

});
