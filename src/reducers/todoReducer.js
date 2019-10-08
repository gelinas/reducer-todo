export const initialState = {
    todo: [
        {
          task: 'Learn about reducers',
          id: 3892987589,
          completed: false
        },
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
        }]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newTodo = {
                name: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                todo: [...state.todo, newTodo ]
            };
        case 'TOGGLE_ITEM':
            return {
                ...state,
                todo: state.todo.map(item => {
                    let newItem = {...item};
                    if (newItem.id === action.payload) {
                        newItem.completed = !newItem.completed
                    }
                    return newItem;
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(item => item.completed === true)
            };
        
        default:
            return state;
    }
}