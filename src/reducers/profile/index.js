// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/profile/types';

const initialState = Map({
    id:        '',
    groupId:   '',
    token:     '',
    created:   0,
    avatar:    '',
    firstName: '',
    lastName:  '',
    email:     ''
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_USER_PROFILE:
            return state.merge(payload);

        default:
            return state;
    }
};
