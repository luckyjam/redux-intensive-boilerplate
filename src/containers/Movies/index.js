// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, object } from 'prop-types';
import { bindActionCreators } from 'redux';

// Instruments
import moviesActions from 'actions/movies';
import movieDetailsActions from 'actions/movieDetails';
import { getTopMovies } from 'selectors/movies';

// Components
import MoviesList from 'components/MoviesList';
import Catcher from 'components/Catcher';
import Filter from 'components/Filter';

class Movies extends Component {
    static propTypes = {
        actions:   object.isRequired,
        favorites: array.isRequired,
        match:     object.isRequired,
        topMovies: array.isRequired
    }
    render () {
        const { topMovies, favorites, actions } = this.props;
        const { filter } = this.props.match.params;

        return [
            <Filter actions = { actions } key = '0' />,
            <Catcher key = '1'>
                <MoviesList
                    actions = { actions }
                    favorites = { favorites }
                    filter = { filter }
                    topMovies = { topMovies }
                />
            </Catcher>
        ];
    }
}

const mapStateToProps = ({ movies, favorites }) => ({
    topMovies: getTopMovies(movies),
    favorites: favorites.get('favorites').toJS()
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...moviesActions, ...movieDetailsActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
