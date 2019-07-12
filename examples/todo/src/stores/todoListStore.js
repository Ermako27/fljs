import {BaseStore} from '../../../../lib/fljs';
import TodoListLogic from './todoListLogic';

const initialState = {
    todos: [
        {
            id: '1',
            text: 'js rules',
            completeStatus: false,
        },
    ],
    currentFilter: 'SHOW_ALL',
};

class TodoListStore extends BaseStore {
    constructor() {
        super(initialState);
    }

    getHandledActions() {
        return {
            ADD_TODO: {
                callback: args => {
                    TodoListLogic.addTodo(args);
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            COMPLETE_TODO: {
                callback: args => {
                    TodoListLogic.completeTodo(args);
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },
            SET_FILTER: {
                callback: args => {
                    TodoListLogic.setFilter(args);
                    this.deliverState(args);
                },
                arguments: {
                    state: this.state,
                },
            },
        };
    }
}

export default new TodoListStore();
