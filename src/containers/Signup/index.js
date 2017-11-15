// Core
import React, { Component } from 'react';
import { bool, func } from 'prop-types';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import SignupForm from 'components/Forms/Signup';

export default class Signup extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        signup:       func.isRequired
    };

    static defaultPops = {
        authFetching: false,
        signup:       () => {}
    };

    render () {
        const { authFetching, signup } = this.props;

        return [
            <Spinner key = '0' spin = { authFetching } />,
            <Navigation key = '1' />,
            <Catcher key = '2'>
                <SignupForm authFetching = { authFetching } signup = { signup } />
            </Catcher>
        ];
    }
}
