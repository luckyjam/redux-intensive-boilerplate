// Core
import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router';

// Instruments
import uiActions from 'actions/ui';
// import pages from './pages';

// Routing
import Public from './Public';

// Components
// import Loading from 'components/Loading';

class Routes extends Component {
    static propTypes = {
        history:     object.isRequired,
        initialize:  func.isRequired,
        initialized: bool.isRequired,
        location:    object.isRequired
    }

    // componentDidMount () {
    //     const { initialized, initialize } = this.props;
    //     console.log('initialized', initialized);
    //     initialize();
    // }

    // componentWillReceiveProps ({ initialized, history }) {
    //     console.log('initialized', initialized);
    //     if (!initialized) {
    //         this.props.initialize();
    //         history.replace(pages.movies);
    //     }
    // }

    render () {

        return (
            <Switch>
                <Public />
            </Switch>
        );
    }
}

const mapStateToProps = ({ ui }) => ({
    initialized: ui.get('initialized')
});

const { initialize } = uiActions;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ initialize }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
