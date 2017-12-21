// Core
import { Map, fromJS } from 'immutable';

// Instruments
import types from 'actions/movieDetails/types';

const initialState = Map({
    movieDetails: Map()
});

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FETCH_MOVIE_DETAILS_SUCCESS:

            return state.set('movieDetails', fromJS(payload));

        case types.CLEAR_MOVIE_DETAILS:
            return state.set('movieDetails', Map());

        default:
            return state;
    }
};
