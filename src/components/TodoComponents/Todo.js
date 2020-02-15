import React from 'react';

const Todo = props => {
    return (
    <div 
        className={`todo${props.item.completed ? 'completed': ''}`}
        onClick={event => props.toggleItem(event, props.item.id)}
      >
        {props.item.name}  
</div>
    );
};

export default Todo;
