import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={event => this.props.handleSubmit(event)}>
                <input type="text" />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

AddTodo.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
