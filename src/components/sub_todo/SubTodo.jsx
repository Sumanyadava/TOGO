import React, { useState } from "react";
import Tags from "./tags/Tags";
import "./SubTodo.css";

const SubTodo = ({todolistelement}) => {
  
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
    // console.log(setStatus_state)
  }
  return (

    
    <div className="Sub_todo">
      <div className="Sub_todo_name">
        <p>{todolistelement}</p>

        <div className="Sub_todo_tags">
        <Tags color="brown" />
        <Tags color="blueviolet" />

        </div>

        </div>
      <div className="Sub_todo_status" >
        
        {/* code dept  */}
        
        <select name="Status" id="Status" /*defaultValue={}*/>
          
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default SubTodo;
