import {BaseStore} from '../../../../src/index';
import TodoToolbarLogic from './todoToolbarLogic';

const initialState = {
    links: {
        SHOW_ALL: {
            filterName: 'SHOW_ALL',
            active: true
        },
        SHOW_ACTIVE: {
            filterName: 'SHOW_ACTIVE',
            active: false
        },
        SHOW_COMPLETE: {
            filterName: 'SHOW_COMPLETE',
            active: false
        }
    },
    currentFilter: 'SHOW_ALL'
};

class TodoToolbarStore extends BaseStore {
    constructor() {
        super(initialState);
    }

    getHandledActions() {
        return {
            SET_FILTER: {
                callback: args => {
                    TodoToolbarLogic.setFilter(args);
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state
                }
            }
        };
    }
}

export default new TodoToolbarStore();
