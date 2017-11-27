// Core
import { createSelector } from 'reselect';

export const getAuthenticated = createSelector(
    (state) => state,
    (auth) => auth.get('authenticated')
);
