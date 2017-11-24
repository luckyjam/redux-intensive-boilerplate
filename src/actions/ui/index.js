// Types
import types from './types';

export default Object.freeze({
    initialize: () => ({
        type: types.INITIALIZE
    }),
    startFetchingAuth: () => ({
        type: types.START_FETCHING_AUTH
    }),
    stopFetchingAuth: () => ({
        type: types.STOP_FETCHING_AUTH
    })
});
