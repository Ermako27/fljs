import {
    connect,
    createAction,
} from '../../../../lib/fljs';

import TodoListStore from '../stores/todoListStore';
import TodoList from '../components/todoList';
import Actions from '../actions/actions';

const handlersToProps = {
    onCompleteTodo: id => {
        createAction({
            action: Actions.COMPLETE_TODO,
            actionData: {
                id,
            },
        });
    },
};


const TodoListContainer = connect({
    store: TodoListStore,
    handlersToProps,
})(TodoList);


export default TodoListContainer;
