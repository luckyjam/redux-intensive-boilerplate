// Types
import types from './types';

export default {
    fillProfile: (user) => ({
        type:    types.FILL_PROFILE,
        payload: user
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE
    }),
    updateProfile: (user) => ({
        type:    types.UPDATE_PROFILE,
        payload: user
    }),
    updateProfileSuccess: (user) => ({
        type:    types.UPDATE_PROFILE_SUCCESS,
        payload: user
    }),
    updateProfileFail: (error) => ({
        type:    types.UPDATE_PROFILE_FAIL,
        payload: error,
        error:   true
    }),
    updateAvatar: (avatar) => ({
        type:    types.UPDATE_AVATAR,
        payload: avatar
    }),
    updateAvatarSuccess: (url) => ({
        type:    types.UPDATE_AVATAR_SUCCESS,
        payload: url
    }),
    updateAvatarFail: (error) => ({
        type:    types.UPDATE_AVATAR_FAIL,
        payload: error,
        error:   true
    })
};
