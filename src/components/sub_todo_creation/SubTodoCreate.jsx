
import "./SubTodoCreate.css";
import React, { useState } from "react";
import ButtonComp from "../buttons/ButtonComp";
import Tags from "../sub_todo/tags/Tags";

const SubTodoCreate = ({todouping}) => {

  const [valuetodo , setvaluetodo] = useState("")
  const [tasktodo , settasktodo] = useState([])

  const handleUrgent = (e) => {
    console.log(e.target)
    
  }

  const handletodo = (e) => {
    const todoword = e.target.value;
    setvaluetodo(todoword)
  }

  const handletodoclick = (e) => {
    if (valuetodo == 0) {
      alert("write something in todo")
    }else{
    
    settasktodo([...tasktodo, valuetodo])
    setvaluetodo("")
    todouping([...tasktodo, valuetodo])
    }
  }


  return (
    <div className="SubTodoCreate">
      <div className="inp">
        <input
          type="text"
          placeholder="write your task"
          className="SubTodoCreate_input"

          value={valuetodo}
          onChange={handletodo}
        />

        <input
          type="datetime-local"
          className="SubTodoCreate_datepicker"
          
          
        />
      </div>
      <div className="tags_create">
        <div className="tags_create_tags">
        <Tags tags_content="important" type="primaryTag tags_medium" />
          
          <Tags tags_content="urgent"  type="secoundaryTag tags_medium"/>

          <div className="deadline">
            09:39:45
          </div>
          
          
        </div>
        <div className="SubTodoCreate_add">
        
        <ButtonComp button_content="add" onClick={handletodoclick}/>

        
        </div>
      </div>
    </div>
  );
};

export default SubTodoCreate;
