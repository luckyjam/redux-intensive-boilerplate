// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, object, bool } from 'prop-types';
import { bindActionCreators } from 'redux';

// Instruments
import moviesActions from 'actions/movies';
import movieDetailsActions from 'actions/movieDetails';
import { getTopMovies } from 'selectors/movies';

// Components
import MoviesList from 'components/MoviesList';
import Catcher from 'components/Catcher';
import Filter from 'components/Filter';
import Spinner from 'components/Spinner';

class Movies extends Component {
    static propTypes = {
        actions:        object.isRequired,
        favorites:      array.isRequired,
        genres:         array.isRequired,
        match:          object.isRequired,
        moviesFetching: bool.isRequired,
        topMovies:      array.isRequired
    }
    render () {
        const { topMovies, favorites, actions, genres, moviesFetching } = this.props;
        const { filter } = this.props.match.params;

        return [
            <Spinner key = '0' spin = { moviesFetching } />,
            <Filter actions = { actions } key = '1' />,
            <Catcher key = '2'>
                <MoviesList
                    actions = { actions }
                    favorites = { favorites }
                    filter = { filter }
                    genres = { genres }
                    topMovies = { topMovies }
                />
            </Catcher>
        ];
    }
}

const mapStateToProps = ({ movies, favorites, ui }) => ({
    topMovies:      getTopMovies(movies),
    favorites:      favorites.get('favorites').toJS(),
    genres:         movies.get('genres').toJS(),
    moviesFetching: ui.get('moviesFetching')
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...moviesActions, ...movieDetailsActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
