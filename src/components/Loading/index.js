// Core
import React, { Component } from 'react';

// Instruments
import styles from './styles';

export default class Loading extends Component {
    render () {
        return (
            <section className = { styles.loading }>
                <div>
                    <h1>Loading...</h1>
                </div>
            </section>
        );
    }
}
