// Core
import { Map, List, fromJS } from 'immutable';

// Instruments
import types from 'actions/movies/types';

const initialState = Map({
    favorites: List()
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ADD_TO_FAVORITES_SUCCESS:

            return state.set('favorites', fromJS(payload));
        case types.GET_FAVORITES_SUCCESS:

            return state.set('favorites', fromJS(payload));

        default:
            return state;
    }
};
