// Core
import { EventEmitter } from 'events';

// Instruments
import dispatcher from 'flux/dispatcher';

export default new class MagicBookStore extends EventEmitter {
    constructor () {
        super();

        this.state = {
            title:       'Magic and Enchantment',
            totalPages:  898,
            currentPage: '1'
        };

        dispatcher.register((action) => {
            switch (action.type) {
                case 'CHANGE_PAGE':
        this.on('change', callback);
    }

    unsubscribe (callback) {
        this.removeListener('change', callback);
    }

    update () {
        this.emit('change');
    }

    getInitialState () {
        return this.state;
    }

    getCurrentPage () {
        return this.state.currentPage;
    }

    changePage (newPage) {
        this.state.currentPage = newPage;
        this.update();
    }
}();
