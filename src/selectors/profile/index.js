// Core
import { createSelector } from 'reselect';

export const getProfile = createSelector(
    (state) => state,
    (profile) => profile.toJS()
);
