import React from 'react';
import TodoName from '../todo_name/TodoName';
import './Main.css';

const Main = ({ mainprop}) => {

    // console.log(first)
  
  return (
    <div className='main'>
      {/* {console.log(first)} */}
      
      {
        mainprop.map((todo,index) => (
          <TodoName key={index} todo={todo}/>
        ))
        
      }
    

      
      
      
      
    </div>
  )
}

export default Main
