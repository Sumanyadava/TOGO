import "./SubTodoCreate.css";
import React, { useState } from "react";


const SubTodoCreate = ({ todouping, colortodouping }) => {
  const [inputTodo, setinputTodo] = useState("");
  const [inputdate, setinputdate] = useState()
  const [imp, setImp] = useState("")
  // const [timeDiff, setTimeDiff] = useState("")
  


  const [tasktodo, settasktodo] = useState([]);
  const [tags_color, setTags_color] = useState("");
  const [tags_flag, setTags_flag] = useState({
    urgent_flag: false,
    important_flag: false,
  });


  var currentDateFormat = new Date();
  var selectedDateFormat = new Date(inputdate);
  var diffTime = (Math.abs(selectedDateFormat - currentDateFormat))
  var diffDays = (Math.ceil(diffTime / (1000*60*60*24)))
  


  
  
  
  
  



  

  const handletodoclick = (e) => {

    e.preventDefault()

    if (inputTodo == 0 ) {
      alert("write something in todo");
      
    }
    else if (imp == "") {
      alert("select priority")
    }
    else if (Number.isNaN(diffDays)){
      alert("select your deadline ")
    }
    else {
      settasktodo([...tasktodo, inputTodo]);
      console.log(inputTodo,imp,diffDays)
      setinputTodo("");
      setImp("");
      setinputdate("")
      



      todouping([...tasktodo, inputTodo]);
    }


    
  };

  return (
    <form action="" className="SubTodoCreate" onSubmit={handletodoclick}>
      <div className="inp">
        <input
          type="text"
          placeholder="write your task"
          className="SubTodoCreate_input"
          value={inputTodo}
          onChange={e => setinputTodo(e.target.value)}
        />

        <input type="datetime-local" className="SubTodoCreate_datepicker" value={inputdate} onChange={ (e) =>  setinputdate(e.target.value)}/>
      </div>
      <div className="tags_create">
        <div className="tags_create_tags">
          
          <select name="tags" id="tagsLevel" value={imp} onChange={(e) => setImp(e.target.value) } >
            <option selected hidden > Select Priority</option>
            <option> imp and urgent</option>
            <option>notIimp but urgent</option>
            <option>non imp and non urgent</option>
            <option> imp but not urgent</option>
          </select>
          

          <div className="deadline">{diffDays} days</div>
        </div>

        <div className="SubTodoCreate_add">
          <button type="sumbit" >Add</button>
          
        </div>
      </div>
    </form>
  );
};

export default SubTodoCreate;
