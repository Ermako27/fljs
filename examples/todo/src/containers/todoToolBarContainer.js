import {
    connect,
    createAction,
} from '../../../../lib/fljs';

import TodoToolBarStore from '../stores/todoToolbarStore';
import TodoToolBar from '../components/todoToolBar';
import Actions from '../actions/actions';

const handlersToProps = {
    onSetFilter: filter => {
        createAction({
            action: Actions.SET_FILTER,
            actionData: {
                filter,
            },
        });
    },
};


const TodoToolBarContainer = connect({
    store: TodoToolBarStore,
    handlersToProps,
})(TodoToolBar);


export default TodoToolBarContainer;
