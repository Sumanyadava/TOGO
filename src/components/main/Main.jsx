import React from 'react';
import TodoName from '../todo_name/TodoName';
import './Main.css';

const Main = ({data , first}) => {
  
  return (
    <div className='main'>
      

      {
        data.todos.map((todo,index) => (
          <TodoName key={index} data={todo}/>
        ))
      }   
   
      
      
      
    </div>
  )
}

export default Main
