// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/movies/types';

const initialState = Map({
    topMovies: Map()
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_TOP_MOVIES_SUCCESS:
            console.log('payload', payload);

            return state.set('topMovies', payload);

        default:
            return state;
    }
};
