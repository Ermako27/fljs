import React, {Component} from 'react';
import ActionCreator from '../../../../src/actionCreator';

import Actions from '../actions/actions';
import TodoListStore from '../stores/todoListStore';
import TodoItem from './todoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = TodoListStore.getState();
        TodoListStore.subscribeToRecieveState(this);
    }

    onCompleteTodo(id) {
        ActionCreator.create({
            action: Actions.COMPLETE_TODO,
            actionData: {
                id
            }
        });
    }

    getVisibleTodos(filter) {
        switch (filter) {
            case 'SHOW_ALL':
                return this.state.todos;
            case 'SHOW_COMPLETE':
                return this.state.todos.filter(t => t.completeStatus);
            case 'SHOW_ACTIVE':
                return this.state.todos.filter(t => !t.completeStatus);
        }
    }

    render() {
        return (
            <ul>
                {this.getVisibleTodos(this.state.currentFilter).map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => this.onCompleteTodo(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}
