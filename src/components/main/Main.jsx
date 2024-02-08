import React from 'react';
import TodoName from '../todo_name/TodoName';
import './Main.css';

const Main = ({ first}) => {

    // console.log(first)
  
  return (
    <div className='main'>
      {/* {console.log(first)} */}
      
      {
        first.map((todo,index) => (
          <TodoName key={index} todo={todo}/>
        ))
        
      }
    

      
      
      
      
    </div>
  )
}

export default Main
