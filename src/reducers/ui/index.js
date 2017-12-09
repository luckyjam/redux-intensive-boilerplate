// Core
import { Map } from 'immutable';

// Instuments
import types from 'actions/ui/types';

const initialState = Map({
    initialized: false
});

export default (state = initialState, { type }) => {
    switch (type) {
        case types.INITIALIZE:
            return state.set('initialized', true);

        default:
            return state;
    }
};
