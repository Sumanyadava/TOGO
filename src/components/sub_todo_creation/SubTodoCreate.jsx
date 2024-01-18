
import "./SubTodoCreate.css";
import React, { useState } from "react";
import ButtonComp from "../buttons/ButtonComp";

const SubTodoCreate = () => {

  const [valuetodo , setvaluetodo] = useState("")
  const [tasktodo , settasktodo] = useState([])

  const handletodo = (e) => {
    const todoword = e.target.value;
    setvaluetodo(todoword)
  }

  const handletodoclick = (e) => {

    settasktodo([...tasktodo, valuetodo])
    setvaluetodo("")
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
        <ButtonComp button_content="important" />
          
          <ButtonComp button_content="urgent" />

          <div className="deadline">
            09:39:45
          </div>
          
          
        </div>
        <div className="SubTodoCreate_add">
        
        <ButtonComp button_content="add" onClick={handletodoclick}/>

        {
        tasktodo.map((ops) =>(
          <div className="ppp">
            {ops}
          </div>
        ))
         
        
        }
        </div>
      </div>
    </div>
  );
};

export default SubTodoCreate;
