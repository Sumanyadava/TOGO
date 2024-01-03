import SecoundaryButton from "../buttons/SecoundaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import "./SubTodoCreate.css";
import React from "react";

const SubTodoCreate = () => {
  return (
    <div className="SubTodoCreate">
      <div className="inp">
        <input
          type="text"
          placeholder="write your task"
          className="SubTodoCreate_input"
        />

        <input
          type="datetime-local"
          className="SubTodoCreate_datepicker"
          
          
        />
      </div>
      <div className="tags_create">
        <div className="tags_create_tags">
          <SecoundaryButton button_content="important" />
          
          <SecoundaryButton button_content="urgent" />

          <div className="deadline">
            09:39:45
          </div>
          
          
        </div>
        <div className="SubTodoCreate_add">
        <PrimaryButton button_content="add" />
        </div>
      </div>
    </div>
  );
};

export default SubTodoCreate;
