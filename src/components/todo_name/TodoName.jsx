import React, { useState } from "react";
import SubTodo from "../sub_todo/SubTodo";

import SubTodoCreate from "../sub_todo_creation/SubTodoCreate";
import "./TodoName.css";
import ButtonComp from "../buttons/ButtonComp";

const TodoName = ({todo,data}) => {

  // code depth use one flag
  const [show , setshow] = useState(true)
  const [flag, setFlag] = useState(false)
  const [todolist, settodolist] = useState([])
  

  // console.log(todo)



  const handleaddtodo = () => {
    setshow(!show)

  }

  const handletittleedit = () => {
    setFlag(!flag)
  }

  const todouping = (tasktodo) => {

    settodolist(tasktodo)
    
  }


  return (


    <div className="ToDo_name" >

      <div className="todo_heading" >
        
          <div className="todo_heading_name" contentEditable={flag}>{todo}</div>
          <div className="todo_heading_action">
            <ButtonComp button_content="i" tittle_prop="add here" onClick={handleaddtodo} type="circularButton circle_small"/>
            <ButtonComp button_content="e" tittle_prop="edit here" onClick={handletittleedit} type="circularButton circle_small"/>
          </div>

          {/* ES6 saves the day using this simple method */}
      {/* <div className={`${show === false ? "todo_name_hidden" : "todo_name_hidden bottom"}`}> */}
      <div className={`${show === false ? "todo_name_hidden" : "todo_name_hidden bottom"}`}>
      
      <SubTodoCreate todouping={todouping} />
      </div>

      </div>
      


      <div className="todo_content">
      

        {
          todolist.map((todolistelement,index)=> (
            <SubTodo todolistelement={todolistelement} key={index}/>
          ) )
        }
        
      </div>
    </div>
  );
};

export default TodoName;
