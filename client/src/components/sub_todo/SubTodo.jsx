import React, { useState } from "react";
import Tags from "./tags/Tags";
import "./SubTodo.css";
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";

const SubTodo = ({todolistelement,color_todo_tags}) => {
  const navigate = useNavigate()
  
  // const [todocolor,setsettodocolor] = useState([])
  // setsettodocolor(...todocolor,color_todo_tags)
  // console.log(todocolor)

  const handlePage = (e) =>{
    navigate('/paper')
  }
  
  
  return (

    
    <div className="Sub_todo" onClick={handlePage}>
      <div className="Sub_todo_name">
        <p>{todolistelement}</p>

        <div className="Sub_todo_tags">
        {/* <div style={{background:color_todo_tags}}>s  </div> */}
        

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
