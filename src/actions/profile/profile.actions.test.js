// Core
import actions from './';
import types from './types';

const user = {
    id:        '',
    groupId:   '',
    token:     '',
    created:   0,
    avatar:    '',
    firstName: '',
    lastName:  '',
    email:     ''
};
const message = 'error';
const avatar = [];
const url = 'https://url.io';

describe('profile actions:', () => {
    test(`'fillUserProfile' actions creator should produce a correspinding actions`, () => {
        expect(actions.fillUserProfile(user)).toEqual({
            type:    types.FILL_USER_PROFILE,
            payload: user
        });
    });
    test(`'clearUserPfoile' actions creator should produce a correspinding actions`, () => {
        expect(actions.clearUserProfile()).toEqual({
            type: types.CLEAR_USER_PROFILE
        });
    });
    test(`'updateProfile' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateProfile(user)).toEqual({
            type:    types.UPDATE_PROFILE,
            payload: user
        });
    });
    test(`'updateProfileSuccess' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateProfileSuccess(user)).toEqual({
            type:    types.UPDATE_PROFILE_SUCCESS,
            payload: user
        });
    });
    test(`'updateProfileFail' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateProfileFail(message)).toEqual({
            type:    types.UPDATE_PROFILE_FAIL,
            payload: message
        });
    });
    test(`'updateAvatar' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateAvatar(avatar)).toEqual({
            type:    types.UPDATE_AVATAR,
            payload: avatar
        });
    });
    test(`'updateAvatarSuccess' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateAvatarSuccess(url)).toEqual({
            type:    types.UPDATE_AVATAR_SUCCESS,
            payload: url
        });
    });
    test(`'updateAvatarFail' actions creator should produce a correspinding actions`, () => {
        expect(actions.updateAvatarFail(message)).toEqual({
            type:    types.UPDATE_AVATAR_FAIL,
            payload: message
        });
    });
});
