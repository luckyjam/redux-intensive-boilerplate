// Core
import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        login: {
            email:    '',
            password: ''
        },
        signup: {
            firstName: '',
            lastName:  '',
            email:     '',
            password:  '',
            invite:    ''
        }
    },
    'forms'
);
