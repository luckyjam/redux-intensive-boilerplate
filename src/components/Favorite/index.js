// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import moment from 'moment';

export default class Favorite extends Component {

    static propTypes = {
        favoriteData: object.isRequired
    }

    render () {
        const {
            id: movieId,
            poster_path: poster,
            title,
            release_date: releaseDate,
            vote_average: voteAverage
        } = this.props.favoriteData;

        return (
            <div className = { Styles.favorite } key = { movieId }>
                <div>
                    <Link to = { `/movies/details/${movieId}` }>
                        <img alt = { title } src = { `https://image.tmdb.org/t/p/w500${poster}` } />
                    </Link>
                </div>
                <div className = { Styles.favoriteCont }>
                    <h3><Link to = { `/movies/details/${movieId}` }>{ title }</Link></h3>
                    <p><strong>Year:</strong> { moment(releaseDate).format('Y') }</p>
                    <p><strong>Rating:</strong> { voteAverage !== 0 ? voteAverage : 'no rating' }</p>
                    {/* <span className = { Styles.deleteCross } onClick = { this.deleteFromFavorites } /> */}
                </div>
            </div>
        );
    }
}
