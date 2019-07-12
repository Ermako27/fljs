import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    getVisibleTodos(filter) {
        switch (filter) {
        case 'SHOW_ALL':
            return this.props.todos;
        case 'SHOW_COMPLETE':
            return this.props.todos.filter(t => t.completeStatus);
        case 'SHOW_ACTIVE':
            return this.props.todos.filter(t => !t.completeStatus);
        }
    }

    render() {
        return (
            <ul>
                {this.getVisibleTodos(this.props.currentFilter).map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onCompleteTodo(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired,
};
