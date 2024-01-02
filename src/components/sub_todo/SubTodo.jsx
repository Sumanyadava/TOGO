import React, { useState } from "react";
import "./SubTodo.css";

const SubTodo = () => {
  const [Status_state,setStatus_state] = useState()
  const statusHandler = (e) => {
     let status_color = e.target.value


    if (status_color == "Pending") {
      setStatus_state = "red"
    }
    if (status_color == "Working") {
      setStatus_state = "blue"
    }
    if (status_color == "Review") {
      setStatus_state = "green"
    }
    if (status_color == "Done") {
      setStatus_state = "white"
    }
    console.log(setStatus_state)
  }
  return (

    
    <div className="Sub_todo">
      <div className="Sub_todo_name" style={{color:"red"}}>Name and tag</div>
      <div className="Sub_todo_status" >
        
        {/* code dept  */}
        
        <select name="Status" id="Status" value={Status_state} onChange={statusHandler}>
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default SubTodo;
