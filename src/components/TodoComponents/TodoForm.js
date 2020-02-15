import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';

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
     <Container>
       <Row>
         <Col xs='auto'>
           <form onSubmit={this.submitHandler}>
             <label htmlFor='item'></label><br></br>
              <input
                 type='text'
                 name='item'
                 placeholder='Add New'
                 value={this.state.itemTodo}
                 onChange={this.changeHandler}
                 /><br></br>
               <Button type='submit' color='secondary'>Submit
              </Button><br></br>
            </form>
          </Col>
        </Row>
       </Container> 
     );
  } 
};

export default TodoForm;