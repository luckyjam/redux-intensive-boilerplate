// Core
import React, { Component } from 'react';
import { object, array } from 'prop-types';

// Instruments
import Styles from './styles';

// Components

export default class MoviesList extends Component {

    static propTypes = {
        actions:   object.isRequired,
        topMovies: array.isRequired
    }

    componentDidMount () {
        this.props.actions.fetchTopMovies();
    }
    render () {
        console.log('props: ', this.props);

        const { topMovies } = this.props;

        console.log('data: ', topMovies);


        // const movies = topMovies.map((movie) => (
        //     <p key = { movie.id }> Movie: { movie.id }</p>
        // ));

        return (
            <section className = { Styles.movieslist }>
                <h1>Movies</h1>
            </section>
        );
    }
}
