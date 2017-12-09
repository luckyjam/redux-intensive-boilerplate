// Types
import types from './types';

export default Object.freeze({
    fetchTopMovies: () => ({
        type: types.FETCH_TOP_MOVIES
    }),
    fetchTopMoviesSuccess: (movies) => ({
        type:    types.FETCH_TOP_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchTopMoviesFail: (message) => ({
        type:    types.FETCH_TOP_MOVIES_FAIL,
        payload: message
    })

});
