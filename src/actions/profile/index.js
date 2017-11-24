// Types
import types from './types';

export default Object.freeze({
    fillUserProfile: (profile) => ({
        type:    types.FILL_USER_PROFILE,
        payload: profile
    })
});
