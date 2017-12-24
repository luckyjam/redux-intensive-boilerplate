// Types
import types from './types';

export default Object.freeze({
    fetchTopMovies: (filter) => ({
        type:    types.FETCH_TOP_MOVIES,
        payload: filter
    }),
    fetchTopMoviesSuccess: (movies) => ({
        type:    types.FETCH_TOP_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchTopMoviesFail: (message) => ({
        type:    types.FETCH_TOP_MOVIES_FAIL,
        payload: message
    }),
    addToFavorites: (movie) => ({
        type:    types.ADD_TO_FAVORITES,
        payload: movie
    }),
    // addToFavoritesSuccess: (favorites) => ({
    //     type:    types.ADD_TO_FAVORITES_SUCCESS,
    //     payload: favorites
    // }),
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
    // getFavoritesFail: (message) => ({
    //     type:    types.GET_FAVORITES_FAIL,
    //     payload: message
    // })
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
        type: types.FETCH_GENRES_FAIL,
        payload: message
    })

});
