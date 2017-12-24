// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

export default class Filter extends Component {

    render () {

        return (
            <section className = { Styles.filter }>
                <div>
                    <NavLink activeClassName = { Styles.active } to = '/movies/top_rated'>Top Rated </NavLink>
                    <NavLink activeClassName = { Styles.active } to = '/movies/upcoming'>Upcoming</NavLink>
                    <NavLink activeClassName = { Styles.active } to = '/movies/popular'>Popular</NavLink>
                    <NavLink activeClassName = { Styles.favoritesActive } className = { Styles.favoritesButton } to = '/favorites'>Favorites</NavLink>
                </div>
            </section>
        );
    }
}
