import React from 'react';
import * as moment from 'moment';


const Todo = props => {
    return(
        <li 
            className={`${props.task.completed ? 'task completed' : 'task'} ${props.task.due < Date.now() ? 'overdue' : ''}`}
            onClick={() => props.toggleTask(props.task.id)}
        >
           {`${props.task.task}, created on ${moment(props.task.id).format("MMM Do YY")} is due on ${moment(props.task.due).format("MMM Do YY")}`}
        </li>
    )
};


export default Todo;