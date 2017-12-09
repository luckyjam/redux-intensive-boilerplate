// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, object } from 'prop-types';
import { bindActionCreators } from 'redux';

// Instruments
import moviesActions from 'actions/movies';
// import { getTopMovies } from 'selectors/movies';

// Components
import MoviesList from 'components/MoviesList';
import Catcher from 'components/Catcher';

class Movies extends Component {
    static propTypes = {
        actions:   object.isRequired,
        topMovies: array.isRequired
    }
    render () {
        const { topMovies, actions } = this.props;

        return (
            <Catcher>
                <MoviesList
                    actions = { actions }
                    topMovies = { topMovies }
                />
            </Catcher>
        );
    }
}

const mapStateToProps = ({ movies }) => ({
    topMovies: movies.get('topMovies')
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(moviesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
