// Core
import React from 'react';
import { render } from 'react-dom';

// Instruments
import './theme/reset.css';

// Flux
import Book from './Flux/Book';

render(
    <Book />,
    document.getElementById('root')
);
