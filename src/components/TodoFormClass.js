import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submitTask}>
                    <input
                        type="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Add Task</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        );
    }
}


export default TodoForm;