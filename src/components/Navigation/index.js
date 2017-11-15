// Coret
import React, { Component } from 'react';
import { bool, object, func } from 'prop-types';
// import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles';

export default class Navigation extends Component {
    static propTypes = {
        authenticated: bool.isRequired,
        logout:        func.isRequired,
        profile:       object.isRequired
    };

    static defaultProps = {
        authenticated: false,
        logout:        () => {},
        profile:       {
            firstName: 'guest',
            avatar:    ''
        }
    };

    constructor () {
        super();

        this.getNavigation = ::this._getNavigation;
        this.logout = ::this._logout;
    }

    _getNavigation () {
        const { authenticated, profile: { firstName, avatar }} = this.props;

        return authenticated
            ? [
                <a className = { Styles.active } key = '0' to = '/redux/profile'>
                    <img src = { avatar } />
                    {firstName}
                </a>,
                <a className = { Styles.active } key = '1' to = '/redux/feed'>
                      Feed
                </a>,
                <a key = '2' onClick = { this.logout }>
                      Log Out
                </a>
            ]
            : [
                <a className = { Styles.active } key = '0' to = '/redux/login'>
                      Log In
                </a>,
                <a className = { Styles.active } key = '1' to = '/redux/sign-up'>
                      Sign Up
                </a>
            ];
    }

    _logout () {
        this.props.logout();
    }

    render () {
        const navigation = this.getNavigation();

        return <section className = { Styles.navigation }>{navigation}</section>;
    }
}
