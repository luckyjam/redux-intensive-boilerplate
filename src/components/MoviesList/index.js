// Core
import React, { Component } from 'react';
import { object, array, string } from 'prop-types';

// Instruments
import Styles from './styles';

// Components
import Movie from 'components/Movie';

export default class MoviesList extends Component {

    static propTypes = {
        actions:   object.isRequired,
        favorites: array.isRequired,
        filter:    string.isRequired,
        genres:    array.isRequired,
        topMovies: array.isRequired
    }

    constructor () {
        super();
        this.getNowPlaying = ::this._getNowPlaying;
    }


    componentWillReceiveProps ({ filter: nextFilter }) {
        const { filter } = this.props;

        nextFilter !== filter ? this.props.actions.fetchMovies(nextFilter) : filter;
    }
    _getNowPlaying () {

    }
    render () {

        const { topMovies, actions, favorites, genres } = this.props;
        const movies = topMovies.map((movie) => (

            <Movie
                actions = { actions }
                favorites = { favorites }
                genres = { genres }
                key = { movie.id }
                movieData = { movie }
            />
        ));

        return (
            <section className = { Styles.moviesList }>
                {movies}
            </section>
        );
    }
}
