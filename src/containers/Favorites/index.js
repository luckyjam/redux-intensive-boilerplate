// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { array, object } from 'prop-types';


// Instruments
import moviesActions from 'actions/movies';

// Components
import FavoritesList from 'components/FavoritesList';

class Favorites extends Component {

    static propTypes = {
        actions:   object.isRequired,
        favorites: array.isRequired
    }
    render () {
        const { favorites, actions } = this.props;

        return (
            <FavoritesList
                actions = { actions }
                favorites = { favorites }
            />
        );
    }
}

const mapStateToProps = ({ favorites }) => ({
    favorites: favorites.get('favorites').toJS()
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(moviesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
