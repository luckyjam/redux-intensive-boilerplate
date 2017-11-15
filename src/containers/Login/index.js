// Core
import React, { Component } from 'react';
import { bool, func } from 'prop-types';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import LoginForm from 'components/Forms/Login';

export default class Login extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        login:        func.isRequired
    };

    static defaultProps = {
        authFetching: false,
        login:        () => {}
    };

    render () {
        const { authFetching, login } = this.props;

        return [
            <Spinner key = '0' spin = { authFetching } />,
            <Navigation key = '1' />,
            <Catcher key = '2'>
                <LoginForm authFetching = { authFetching } login = { login } />
            </Catcher>
        ];
    }
}
