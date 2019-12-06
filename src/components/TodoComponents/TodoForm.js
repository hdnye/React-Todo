import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTodo: ''
        };
    }
    
    changeHandler = event => {
        this.setState({ itemTodo: event.target.value });
    };
    
     submitHandler = event => {
       event.preventDefault();
       this.props.addTodo(this.state.itemTodo);
       this.setState({ itemTodo: '' });
    }
             


render() {
    return (
        <form onSubmit={this.submitHandler}>
           <label htmlFor='item'>New Todo</label><br></br>
            <input
            type='text'
            name='item'
            value={this.state.itemTodo}
            onChange={this.changeHandler}
            />
         <button type='submit'>Add</button>
        </form>
    );
  } 
};

export default TodoForm;