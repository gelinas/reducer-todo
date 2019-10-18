import React, { useState } from 'react';
import Todo from './Todo';


function TodoForm({ dispatch }) {
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: "ADD_ITEM", payload: newTodo })
      setNewTodo('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    name="task"
                    onChange={handleChanges}
                />
                <button type="submit">Add Task</button>
            </form>
            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>
                Clear Completed
            </button>
        </div>
    )
}


export default TodoForm;