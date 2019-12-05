import React from 'react';
import { todo } from './data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo 
    };
  }

  toggleItem = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };  


  
  addTodo = itemTodo => {
    const newTodo = {
      name: itemTodo,
      completed: false,
      id: Date.now()
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };
  


  render() {
    console.log(this.state.todo);
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
            <TodoForm 
              addTodo={this.addTodo}
            />
           </div>
            <TodoList todo={this.state.todo}
             toggleItem={this.toggleItem}
            />
        </div>
     
    );
  }
}

export default App;
