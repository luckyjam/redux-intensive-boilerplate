// Core
import React, { Component } from 'react';
import { object, string } from 'prop-types';
import { Link } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

export default class MovieInfo extends Component {
    static propTypes = {
        actions:      object.isRequired,
        movieDetails: object.isRequired,
        movieId:      string.isRequired
    }

    constructor () {
        super();
        this.handleClickGoBack = ::this._handleClickGoBack;
    }
    componentDidMount () {
        const { actions, movieId } = this.props;

        actions.fetchMovieDetails(movieId);
    }
    componentWillUnmount () {
        const { actions } = this.props;

        actions.clearMovieDetails();
    }

    _handleClickGoBack () {
        this.props.history.goBack();
    }

    render () {
        const {
            budget,
            genres,
            homepage,
            title,
            poster_path: poster,
            overview,
            tagline,
            vote_average: voteScore
        } = this.props.movieDetails.movieDetails;
        const placeholderPoster = 'http://via.placeholder.com/300x420';
        // let poster = '';
        let genresAll = [];

        if (title) {
            genresAll = genres.map((genre) => genre.name);
        }

        const result = title ? (
            <section className = { Styles.movieInfo }>
                <div className = { Styles.card }>
                    <div className = { Styles.poster }>
                        <img src = { poster ? `http://image.tmdb.org/t/p/w500${poster}` : placeholderPoster } />
                    </div>
                    <div className = { Styles.content }>
                        <h1>{ title }</h1>
                        <h3>{ tagline }</h3>
                        <p><strong>Genres:</strong> {genresAll.join(', ')}</p>
                        <p><strong>Budget:</strong> {budget !== 0 ? `${budget.toLocaleString()}$` : 'unknown'}</p>
                        <p><strong>Homepage:</strong> <a href = { homepage } target = '_blank'>{homepage}</a></p>
                        <p><strong>User rating:</strong> { `${voteScore}` }</p>
                        <p><strong>Overview:</strong> { overview }</p>
                        <Link to = '/'><button>Back</button></Link>
                        <button onClick = { this.handleClickGoBack }>Router Back</button>
                    </div>
                </div>
            </section>
        ) : (
            <h1>Loading...</h1>
        );

        return result;
    }
}
