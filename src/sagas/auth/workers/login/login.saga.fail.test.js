// Core
import { put, call } from 'redux-saga/effects';

// Instruments
import { loginWorker } from './';
import authTypes from 'actions/auth/types';
import uiTypes from 'actions/ui/types';
import { api } from 'instruments/api';

const token = 'secret';
const loginAction = {
    type:    authTypes.LOGIN,
    payload: { token }
};
const responseData = {
    message: 'error!'
};
const fetchResponse = {
    status: 401,
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

const saga = loginWorker(loginAction);

describe('login saga fail scenario:', () => {
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

    test(`should dispatch 'INITIALIZE' action`, () => {
        expect(saga.next(responseData).value).toEqual(
            put({
                type: uiTypes.INITIALIZE
            })
        );
    });

    test(`should dispatch 'LOGIN_FAIL' action`, () => {
        expect(saga.next(responseData).value).toEqual(
            put({
                type:    authTypes.LOGIN_FAIL,
                payload: responseData.message
            })
        );
    });

    test(`should dispatch 'STOP_FETCHING_AUTH' action`, () => {
        expect(saga.next().value).toEqual(
            put({ type: uiTypes.STOP_FETCHING_AUTH })
        );
    });

    test('should be completed', () => {
        expect(saga.next().done).toBe(true);
    });
});
