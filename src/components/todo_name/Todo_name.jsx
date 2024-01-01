import React from 'react'
import './Todo_name.css'
import Sub_todo from '../sub_todo/Sub_todo'

const Todo_name = () => {
  return (
    <div className='ToDo_name'>
      <div className="todo_heading">
        <div className="todo_heading_name">Heading of todo</div>
        <div className="todo_heading_action">Edit Delete</div>
        
        </div>

      <div className="todo_content">
       <Sub_todo />
       <Sub_todo />

       <Sub_todo />
       <Sub_todo />

       <Sub_todo />
       <Sub_todo />
       <Sub_todo />
       <Sub_todo />

       <Sub_todo />
       <Sub_todo />
       
       
      </div>
    </div>
  )
}

export default Todo_name
