import React from "react";
import SubTodo from "../sub_todo/SubTodo";
import CircleButton from '../buttons/CircleButton'
import SubTodoCreate from "../sub_todo_creation/SubTodoCreate";
import "./TodoName.css";

const TodoName = () => {
  return (
    <div className="ToDo_name" >
      <div className="todo_heading" >
        <div className="todo_heading_name">Heading of todo</div>
        <div className="todo_heading_action">
          <CircleButton button_content="i" tittle_prop="add here"/>
          <CircleButton button_content="e" tittle_prop="edit here"/>
          </div>
      </div>

      <SubTodoCreate />

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
