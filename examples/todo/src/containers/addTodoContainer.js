import {
    connect,
    createAction,
} from '../../../../lib/fljs';

import Actions from '../actions/actions';
import AddTodo from '../components/addTodo';

const handlersToProps = {
    handleSubmit: event => {
        event.preventDefault();
        createAction({
            action: Actions.ADD_TODO,
            actionData: {
                todoValue: event.target.elements[0].value,
            },
        });
    },
};


const TodoListContainer = connect({
    handlersToProps,
})(AddTodo);


export default TodoListContainer;
