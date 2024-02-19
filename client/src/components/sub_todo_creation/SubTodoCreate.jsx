
import "./SubTodoCreate.css";
import React, { useEffect, useState } from "react";
import ButtonComp from "../buttons/ButtonComp";
import Tags from "../sub_todo/tags/Tags";

const SubTodoCreate = ({todouping,colortodouping}) => {

  const [valuetodo , setvaluetodo] = useState("")
  const [tasktodo , settasktodo] = useState([])
  const [tags_color, setTags_color] = useState()
  const [tags_flag, setTags_flag] = useState({
    urgent_flag: false,
    important_flag: false
  })

  const handleTags_urgent = () => {
  
    setTags_flag(prevState => ({
      ...prevState,urgent_flag: !prevState.urgent_flag
    }))

    
  }
  const handleTags_important = () => {
  
    setTags_flag(prevState => ({
      ...prevState,important_flag: !prevState.important_flag
    }))

    
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

    if (tags_flag.important_flag && tags_flag.urgent_flag == true) {
      setTags_color( "red")
    }else if( tags_flag.important_flag == true && tags_flag.urgent_flag == false ){
      setTags_color( "yellow")
    }else if( tags_flag.important_flag == false && tags_flag.urgent_flag == true ){
      setTags_color( "orange")
    }else if(tags_flag.important_flag == false && tags_flag.urgent_flag == false ) {
      setTags_color( "green")
    }

    colortodouping(tags_color)
    console.log(tags_color + "hehe")
   


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
        <Tags tags_content="important" type={`primaryTag tags_medium ${tags_flag.important_flag ? 'sec_active' : '' }`} onClick={handleTags_important} />
          
        <Tags tags_content="urgent"  type={`secoundaryTag tags_medium ${tags_flag.urgent_flag ? 'sec_active' : '' }`}  onClick={handleTags_urgent}/>

          <div className="deadline">
            09:39:45
          </div>
          
          
        </div>
        <div className="SubTodoCreate_add">
        
        <ButtonComp button_content="add" onClick={handletodoclick} type="primaryButton button_medium"/>

        
        

        
        </div>
      </div>
    </div>
  );
};

export default SubTodoCreate;
