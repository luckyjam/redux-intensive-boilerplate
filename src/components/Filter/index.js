// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Filter extends Component {

    static propTypes = {
        actions: object.isRequired
    }

    constructor () {
        super();
        this.topRatedFilter = ::this._topRatedFilter;
        this.upcomingFilter = ::this._upcomingFilter;
    }

    _topRatedFilter () {
        const { fetchTopMovies } = this.props.actions;

        fetchTopMovies('top_rated');
    }

    _upcomingFilter () {
        const { fetchTopMovies } = this.props.actions;

        fetchTopMovies('upcoming');
    }
    render () {

        return (
            <section className = { Styles.filter }>
                <NavLink to = '/movies/top_rated'>Top Rated </NavLink>
                <NavLink to = '/movies/upcoming'>Upcoming</NavLink>
                <NavLink to = '/movies/popular'>Popular</NavLink>
                <NavLink to = '/favorites'>Favorites</NavLink>
                <p>
                    <button onClick = { this.topRatedFilter }>Top Rated</button>
                    <button onClick = { this.upcomingFilter }>Upcoming</button>
                </p>
            </section>
        );
    }
}
