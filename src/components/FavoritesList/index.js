// Core
import React, { Component } from 'react';
import { object, array } from 'prop-types';

// Instruments
import Styles from './styles.scss';

// Components
import Favorite from 'components/Favorite';
import Filter from 'components/Filter';

export default class FavoritesList extends Component {

    static propTypes = {
        actions:   object.isRequired,
        favorites: array.isRequired
    }

    componentDidMount () {
        this.props.actions.getFavorites();
    }

    render () {
        const { actions, favorites: favoritesList } = this.props;

        const favorites = favoritesList.map((favorite) => (
            <Favorite
                actions = { actions }
                favoriteData = { favorite }
                key = { favorite.id }
            />
        ));

        return [
            <Filter key = '0' />,
            <section className = { Styles.favoritesList } key = '1' >
                { favorites }
            </section>
        ];
    }
}
