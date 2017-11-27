// Core
import { put, call } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { loginWorker } from './';
import authTypes from 'actions/auth/types';
import uiTypes from 'actions/ui/types';
import profileTypes from 'actions/profile/types';
import { api } from 'instruments/api';

const loginAction = {
    type:    authTypes.LOGIN,
    payload: {
        email:    'test@email.com',
        password: 1111
    }
};

const saga = loginWorker(loginAction);

const profile = {
    firstName: 'Jack',
    lastName:  'White',
    token:     'secret'
};

const responseData = {
    data:    profile,
    message: 'successful response'
};

const fetchResponse = {
    status: 200,
    json:   () => Promise.resolve(responseData)
};

global.fetch = jest.fn(() => Promise.resolve(fetchResponse));
global.localStorage = (() => {
    const storage = {};

    return {
        setItem:    jest.fn((key, value) => storage[key] = value),
        getItem:    jest.fn((key) => storage[key]),
        removeItem: jest.fn((key) => delete storage[key])
    };
})();

describe('login saga success scenario:', () => {
    test(`should dispatch 'START_FETCHING_AUTH' action`, () => {
        expect(saga.next().value).toEqual(
            put({
                type: uiTypes.START_FETCHING_AUTH
            })
        );
    });

    test(`should call a 'fetch' request`, () => {
        expect(saga.next().value).toEqual(
            call(fetch, `${api}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginAction.payload)
            })
        );
    });

    test(`the 'fetch' request should return valid response`, () => {
        expect(saga.next(fetchResponse).value).toEqual(
            call([fetchResponse, fetchResponse.json])
        );
    });

    test(`should dispatch 'LOGIN_SUCCESS' action`, () => {
        expect(saga.next(responseData).value).toEqual(
            put({
                type: authTypes.LOGIN_SUCCESS
            })
        );
    });

    test(`should dispatch 'FILL_USER_PROFILE' action`, () => {
        expect(saga.next().value).toEqual(
            put({
                type:    profileTypes.FILL_USER_PROFILE,
                payload: profile
            })
        );
    });

    test(`should dispatch 'react-redux-form' 'CHANGE' action for firstName`, () => {
        expect(saga.next().value).toEqual(
            put(
                actions.change(
                    'forms.user.profile.firstName',
                    profile.firstName
                )
            )
        );
    });

    test(`should dispatch 'react-redux-form' 'CHANGE' action for lastName`, () => {
        expect(saga.next().value).toEqual(
            put({
                type:     'rrf/change',
                value:    profile.lastName,
                external: true,
                model:    'forms.user.profile.lastName',
                multi:    false,
                silent:   false
            })
        );
    });

    test(`should dispatch 'react-redux-form' 'RESET' action`, () => {
        expect(saga.next().value).toEqual(put(actions.reset('forms.login')));
    });

    test(`should dispatch 'STOP_FETCHING_AUTH' action`, () => {
        expect(saga.next().value).toEqual(
            put({
                type: uiTypes.STOP_FETCHING_AUTH
            })
        );
    });

    test('should be completed', () => {
        expect(saga.next().done).toBe(true);
    });
});
