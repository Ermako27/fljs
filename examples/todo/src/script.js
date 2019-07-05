import React from 'react';
import ReactDOM from 'react-dom';

import Bus from 'bus-graph';
import Fljs from '../../../src/fljs';

import Addtodo from './components/addTodo';
import TodoList from './components/todoList';
import TodoToolBar from './components/todoToolBar';

Fljs.setObserver(Bus);

const App = () => (
    <div>
        <Addtodo />
        <TodoList />
        <TodoToolBar />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
