// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Instruments
import { object } from 'prop-types';
import Styles from './styles.scss';
import moment from 'moment';

export default class Movie extends Component {

    static propTypes = {
        actions:   object.isRequired,
        movieData: object.isRequired
    }

    constructor () {
        super();
        this.addToFavorites = ::this._addToFavorites;
    }

    _addToFavorites () {
        const { actions, movieData } = this.props;

        actions.addToFavorites(movieData);
        actions.getFavorites();
    }

    render () {
        const {
            id: movieId,
            poster_path: poster,
            title,
            vote_average: voteAverage,
            release_date: releaseDate,
            overview
        } = this.props.movieData;
        const { favorites } = this.props;
        const isInFavorites = favorites.some(({ id }) => id === movieId);
        const addToFavoritesButton = isInFavorites ? 'X': (<button onClick = { this.addToFavorites }>Favorite</button>);

        return (
            <div className = { Styles.movie }>
                <div className = { Styles.poster }>
                    <img alt = { `poster: ${title}` } src = { `https://image.tmdb.org/t/p/w500${poster}` } />
                </div>

                <div className = { Styles.content } >
                    <Link to = { `/movies/details/${movieId}` }><h1>{ title }</h1></Link>
                    <p className = { Styles.star }>{ voteAverage !== 0? voteAverage : 'No rating'} <i className = 'material-icons'>star</i></p>
                    <p>{ moment(releaseDate).format('ll') }</p>
                    <p>{ overview }</p>
                    <p>
                        { addToFavoritesButton }
                    </p>
                </div>
            </div>
        );
    }
}
