// Core
import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router';

// Instruments
import uiActions from 'actions/ui';
import moviesActions from 'actions/movies';
// import pages from './pages';

// Routing
import Public from './Public';

// Components
import Loading from 'components/Loading';

class Routes extends Component {
    static propTypes = {
        fetchGenres: func.isRequired,
        history:     object.isRequired,
        initialize:  func.isRequired,
        initialized: bool.isRequired,
        location:    object.isRequired
    }

    componentDidMount () {
        const { fetchGenres } = this.props;

        fetchGenres();
    }

    render () {
        const { initialized } = this.props;

        return initialized ? (
            <Switch>
                <Public />
            </Switch>
        ) : (
            <Loading />
        );
    }
}

const mapStateToProps = ({ ui }) => ({
    initialized: ui.get('initialized')
});

const { initialize } = uiActions;
const { fetchGenres } = moviesActions;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ initialize, fetchGenres }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
