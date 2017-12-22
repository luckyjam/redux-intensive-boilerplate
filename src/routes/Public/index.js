// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Instruments
import pages from 'routes/pages';

// Components
import Movies from 'containers/Movies';
import MovieDetails from 'containers/MovieDetails';
import Favorites from 'containers/Favorites';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Movies } path = { `${pages.movies}/:filter` } />
                <Route exact component = { Favorites } path = '/favorites' />
                <Route exact component = { MovieDetails } path = '/movies/details/:movieId' />
                <Redirect to = { `${pages.movies}/top_rated` } />
            </Switch>
        );
    }
}
