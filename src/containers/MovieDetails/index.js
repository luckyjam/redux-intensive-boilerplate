// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { bindActionCreators } from 'redux';

// Instruments
import movieDetailsActions from 'actions/movieDetails';

// Components
import MovieInfo from 'components/MovieInfo';

class MovieDetails extends Component {
    static propTypes = {
        actions:      object.isRequired,
        history:      object.isRequired,
        match:        object.isRequired,
        movieDetails: object.isRequired
    };

    render () {
        const { movieDetails, actions, history } = this.props;
        const { movieId } = this.props.match.params;

        return (
            <MovieInfo
                actions = { actions }
                history = { history }
                movieDetails = { movieDetails }
                movieId = { movieId }
            />
        );
    }
}

const mapStateToProps = ({ movieDetails }) => ({
    movieDetails: movieDetails.toJS()
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(movieDetailsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
