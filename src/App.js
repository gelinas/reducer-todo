import React, { useState, useReducer } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm'
// import SearchForm from './components/TodoComponents/SearchForm'

import './Todo.css'
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  const [{ todo }, dispatch] = useReducer(reducer, initialState);

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
      <TodoForm dispatch={dispatch} />
      <div>
          {/* <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={newTodo}
                  name="task"
                  onChange={handleChanges}
              />
              <button type="submit">Add Task</button>
          </form> */}
          {/* <button onClick={this.props.clearCompleted}>Clear Completed</button> */}
      </div>
    </div>
  )
}

export default App;
