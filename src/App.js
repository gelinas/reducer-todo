import React, { useState, useReducer } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoComponents/TodoForm'
import SearchForm from './components/TodoComponents/SearchForm'

import './Todo.css'
import { clear } from 'sisteransi';
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  const [{ todo }, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState({});

  const toggleTask = id => {
    dispatch({ type: "TOGGLE_ITEM", payload: id })
  }

  return(
    <div>
      <h2>Welcome to your Todo App!</h2>
      <div className="toDo-list">
        <ul>
            {todo.map(task => (
                <Todo key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </ul>
      </div>
      {/* <TodoForm 
        addTask={this.addTask} 
        clearCompleted={this.clearCompleted} /> */}
    </div>
  )
}

export default App;
