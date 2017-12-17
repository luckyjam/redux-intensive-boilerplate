// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import movies from './movies';
import ui from './ui';
import movieDetails from './movieDetails';
import favorites from './favorites';

export default combineReducers({
    router,
    movies,
    movieDetails,
    favorites,
    ui
});
