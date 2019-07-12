import React from 'react';
import ReactDOM from 'react-dom';

import Bus from 'bus-graph';
import Fljs from '../../../src/fljs';

import AddTodoContainer from './containers/addTodoContainer';
import TodoListContainer from './containers/todoListContainer';
import TodoToolBarContainer from './containers/todoToolBarContainer';


Fljs.setObserver(Bus);

const App = () => (
    <div>
        <AddTodoContainer />
        <TodoListContainer />
        <TodoToolBarContainer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
