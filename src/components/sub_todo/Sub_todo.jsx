import React from "react";
import "./Sub_todo.css";

const Sub_todo = () => {
  return (
    <div className="Sub_todo">
      <div className="Sub_todo_name">Name and tag</div>
      <div className="Sub_todo_status">
        
        {/* code dept  */}
        <select name="Status" id="Status">
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default Sub_todo;
