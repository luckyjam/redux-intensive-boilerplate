// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import Wall from 'components/Wall';

class Feed extends Component {
    render () {
        return [
            <Spinner spin key = '0' />,
            <Navigation key = '1' />,
            <Catcher key = '2'>
                <Wall posts = { [] } />
            </Catcher>
        ];
    }
}

const mapStateToProps = ({ profile }) => ({
    profile: profile.toJS()
});

export default connect(mapStateToProps)(Feed);
