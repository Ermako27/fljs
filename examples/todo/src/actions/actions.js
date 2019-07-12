import {
    addTodoActionBody,
    completeTodoActionBody,
    setFilterActionBody,
} from './actionsBody';

const Actions = {
    ADD_TODO: {
        name: 'ADD_TODO',
        body: addTodoActionBody,
    },

    COMPLETE_TODO: {
        name: 'COMPLETE_TODO',
        body: completeTodoActionBody,
    },

    SET_FILTER: {
        name: 'SET_FILTER',
        body: setFilterActionBody,
    },
};

export default Actions;
