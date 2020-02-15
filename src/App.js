import React from 'react';
import { todo } from './data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import { Button } from 'reactstrap';

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

componentDidMount() {
  localStorage.setItem('todo', JSON.stringify(this.state));
}

    
 toggleItem = (event, itemId) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id){
           return {
            ...item,
            completed: !item.completed
         }; 
        } else {
        return item;
        }
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
    localStorage.setItem('addTodo', itemTodo);
    localStorage.setItem('newTodo', JSON.stringify(newTodo));
  };

   todoDone = () => {
       this.setState({
         todo: this.state.todo.filter(item => !item.completed)
        });
     }
   

  render() {
    return (
      <div className='App'>
        <div className='header'>          
          <h2>Welcome to your Todo App!</h2>
           <br></br>
              <div>
                <TodoList todo={this.state.todo}
                toggleItem={this.toggleItem}
                todoDone={this.todoDone}
                />
                </div>
                
                <div>
                  <TodoForm 
                    addTodo={this.addTodo}
                  />
                  </div>
                <br></br>
              
                <Button 
                  type='reset' 
                  color='secondary' 
                  onClick={this.todoDone}>Clear Completed
                </Button>    
            </div>
        </div>
     );
  }
}

export default App;
