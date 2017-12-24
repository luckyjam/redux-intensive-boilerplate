// Core
import { Map, List, fromJS } from 'immutable';

// Instruments
import types from 'actions/movies/types';

const initialState = Map({
    topMovies: List(),
    genres:    List(),
    filter:    'top_rated'
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_TOP_MOVIES:
            return state.set('filter', payload);

        case types.FETCH_TOP_MOVIES_SUCCESS:
            return state.set('topMovies', fromJS(payload));

        case types.FETCH_GENRES_SUCCESS:

            return state.set('genres', fromJS(payload));

        default:
            return state;
    }
};
