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
        filter:    string.isRequired,
        topMovies: array.isRequired
    }

    constructor () {
        super();
        this.getNowPlaying = ::this._getNowPlaying;
    }

    componentDidMount () {
        const { filter } = this.props;

        this.props.actions.fetchTopMovies(filter);
    }

    componentWillReceiveProps ({ filter: nextFilter }) {
        const { filter } = this.props;

        nextFilter !== filter ? this.props.actions.fetchTopMovies(nextFilter) : filter;
    }
    _getNowPlaying () {

    }
    render () {

        const { topMovies, actions, favorites } = this.props;
        const movies = topMovies.map((movie) => (

            <Movie
                actions = { actions }
                favorites = { favorites }
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
