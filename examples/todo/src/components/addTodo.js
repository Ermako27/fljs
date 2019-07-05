import React, {Component} from 'react';
import ActionCreator from '../../../../src/actionCreator';
import Actions from '../actions/actions';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        ActionCreator.create({
            action: Actions.ADD_TODO,
            actionData: {
                todoValue: event.target.elements[0].value
            }
        });
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
