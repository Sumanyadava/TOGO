import React, { useState } from "react";
import SubTodo from "../sub_todo/SubTodo";

import SubTodoCreate from "../sub_todo_creation/SubTodoCreate";
import "./TodoName.css";
import ButtonComp from "../buttons/ButtonComp";

const TodoName = ({todo,data}) => {

  // code depth use one flag
  const [show , setshow] = useState(true)
  const [flag, setFlag] = useState(false)
  const [color_todo_tags, setColor_todo_tags] = useState([])

  const [todolist, settodolist] = useState([])
  

  // console.log(todo)



  const handleaddtodo = () => {
    setshow(!show)

  }

  const handletittleedittodo = () => {
    setFlag(!flag)
  }

  const handledeletetodo = () =>{
    console.log("Delete ")
  }



  const todouping = (tasktodo) => {

    settodolist(tasktodo)
    
    
    
  }
  // code dept use one updrill 
  const colortodouping = (color_tag) => {
    console.log(color_tag + " from todo ")
    setColor_todo_tags(color_tag)
    
  }

  return (


    <div className="ToDo_name" >

      <div className="todo_heading" >
        
          <div className="todo_heading_name" contentEditable={flag}>{todo}</div>
          <div className="todo_heading_action">
            <ButtonComp button_content="i" tittle_prop="add here" onClick={handleaddtodo} type="circularButton circle_small"/>
            <ButtonComp button_content="e" tittle_prop="edit here" onClick={handletittleedittodo} type="circularButton circle_small"/>
            <ButtonComp button_content="d" tittle_prop="edit here" onClick={handledeletetodo} type="circularButton circle_small"/>
          </div>

          {/* ES6 saves the day using this simple method */}
      {/* <div className={`${show === false ? "todo_name_hidden" : "todo_name_hidden bottom"}`}> */}
      <div className={`${show === false ? "todo_name_hidden" : "todo_name_hidden bottom"}`}>
      
      <SubTodoCreate todouping={todouping} colortodouping={colortodouping} />
      </div>

      </div>
      


      <div className="todo_content">
      

        {
          todolist.map((todolistelement,index)=> (
            <SubTodo todolistelement={todolistelement} key={index} /*color_todo_tags={color_todo_tags}*/ />
          ) )
        }
        
      </div>
    </div>
  );
};

export default TodoName;
