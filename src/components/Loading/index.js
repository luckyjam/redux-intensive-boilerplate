// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles';

export default class Loading extends Component {
    render () {
        return (
            <section className = { Styles.loading }>
                <div className = { Styles.spinner }>
                    <div className = { Styles.bounce1 } />
                    <div className = { Styles.bounce2 } />
                    <div className = { Styles.bounce3 } />
                </div>
            </section>
        );
    }
}
