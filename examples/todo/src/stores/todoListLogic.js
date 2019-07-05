class TodoListLogic {
    addTodo({state, payload = {}} = {}) {
        state.todos.push({
            id: state.todos.length + 1,
            text: payload.todoValue,
            completeStatus: false
        });
    }

    completeTodo({state, payload = {}} = {}) {
        state.todos.find(todo => {
            if (todo.id === payload.id) {
                todo.completeStatus = !todo.completeStatus;
                return true;
            }
        });
    }

    setFilter({state, payload = {}} = {}) {
        state.currentFilter = payload.filter;
    }
}

export default new TodoListLogic();
