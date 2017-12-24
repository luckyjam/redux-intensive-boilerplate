// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Instruments
import { object, array } from 'prop-types';
import Styles from './styles.scss';
import moment from 'moment';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

export default class Movie extends Component {

    static propTypes = {
        actions:   object.isRequired,
        favorites: array.isRequired,
        genres:    array.isRequired,
        movieData: object.isRequired
    }

    constructor () {
        super();
        this.addToFavorites = ::this._addToFavorites;
        this.deleteFavorite = ::this._deleteFavorite;
        this.handleMovieAppear = ::this._handleMovieAppear;

    }

    _handleMovieAppear (movie) {
        fromTo(movie, 1, { opacity: 0 }, { opacity: 1 });
    }

    _addToFavorites () {
        const { actions, movieData } = this.props;

        actions.addToFavorites(movieData);
        actions.getFavorites();
    }

    _deleteFavorite () {
        const { id: movieId } = this.props.movieData;

        this.props.actions.deleteFavorite(movieId);
    }

    render () {
        const {
            id: movieId,
            poster_path: poster,
            title,
            vote_average: voteAverage,
            release_date: releaseDate,
            overview,
            genre_ids: genreIds
        } = this.props.movieData;
        const { genres } = this.props;

        // Compose current movie genre names array filtering all genres array by current movie genres array 
        const genreNames = genres
            .filter(({ id }) => genreIds.includes(id))
            .map(({ name }) => name);

        const { favorites } = this.props;
        const isInFavorites = favorites.some(({ id }) => id === movieId);
        const addToFavoritesButton = isInFavorites ?
            (<span className = { Styles.favoriteDel } onClick = { this.deleteFavorite } />) :
            (<span className = { Styles.favoriteAdd } onClick = { this.addToFavorites } />);

        return (
            <Transition
                appear
                in
                timeout = { 1000 }
                onEnter = { this.handleMovieAppear }>
                <div className = { Styles.movie }>
                    <div className = { Styles.poster }>
                        <Link to = { `/movies/details/${movieId}` }>
                            <img alt = { `poster: ${title}` } src = { `https://image.tmdb.org/t/p/w500${poster}` } />
                        </Link>
                    </div>

                    <div className = { Styles.content } >
                        <Link to = { `/movies/details/${movieId}` }><h1>{ title }</h1></Link>
                        <p className = { Styles.star }>{ voteAverage !== 0? voteAverage : 'No rating'} <i className = 'material-icons'>star</i></p>
                        <p>{ moment(releaseDate).format('ll') }</p>
                        <p>{ genreNames.join(', ') }</p>
                        <p>{ overview }</p>
                        <p>
                            { addToFavoritesButton }
                        </p>
                    </div>
                </div>
            </Transition>
        );
    }
}
