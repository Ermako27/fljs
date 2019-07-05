import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({onClick, text, completeStatus}) => {
    const status = completeStatus ? ' | done' : ' | not done';
    return (
        <li onClick={onClick}>
            {text}
            {status}
        </li>
    );
};

export default TodoItem;

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completeStatus: PropTypes.bool.isRequired
};
