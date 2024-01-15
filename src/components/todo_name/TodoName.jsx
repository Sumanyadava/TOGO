import React, { useState } from "react";
import SubTodo from "../sub_todo/SubTodo";
import CircleButton from '../buttons/CircleButton'
import SubTodoCreate from "../sub_todo_creation/SubTodoCreate";
import "./TodoName.css";

const TodoName = () => {
  const [show , setshow] = useState("hidden")
  const handleShow = () => {
    setshow(!show)

  }
  return (


    <div className="ToDo_name" >

      <div className="todo_heading" >
        
          <div className="todo_heading_name">Heading of todo</div>
          <div className="todo_heading_action">
            <CircleButton button_content="i" tittle_prop="add here" onClick={handleShow}/>
            <CircleButton button_content="e" tittle_prop="edit here"/>
          </div>

          {/* ES6 saves the day using this simple method */}
      <div className={`${show === false ?"todo_name_hidden" : "todo_name_hidden bottom"}`}>
      
      <SubTodoCreate />
      </div>

      </div>
      


      <div className="todo_content">
        <SubTodo />
        <SubTodo />
        <SubTodo />
        <SubTodo />
        <SubTodo />
        
      </div>
    </div>
  );
};

export default TodoName;
