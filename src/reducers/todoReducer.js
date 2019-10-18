import * as moment from 'moment';

export const initialState = {
    todo: [
        {
          task: 'Learn about reducers',
          id: 1570575799223,
          due: moment(1570575799223).add(2, 'days'),
          completed: false
        },
        {
            task: 'Organize Garage',
            id: 1528817077286,
            due: moment(1528817077286).add(2, 'days'),
            completed: false
        },
        {
            task: 'Bake Cookies',
            id: 1528817084358,
            due: moment(1528817077286).add(2, 'days'),
            completed: false
        }]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newTodo = {
                task: action.payload,
                id: Date.now(),
                due: moment(Date.now()).add(2,'days'),
                completed: false
            };
            return {
                ...state,
                todo: [...state.todo, newTodo]
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
                todo: state.todo.filter(item => item.completed === false)
            };
        
        default:
            return state;
    }
}