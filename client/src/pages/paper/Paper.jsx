import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./paper.css";

const Paper = () => {
  var toolbarOptions = [
    //the
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    // ["link", "image", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: ["black"] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const [input, setinput] = useState();
  const module = {
    toolbar: toolbarOptions,
  };

  const handleMilestoneAdder = (e) => {
    e.preventDefault();
  };

  return (
    <div className="paper">
      <div className="paper_context">
        <a href="#">product > paper</a>
        <h1 className="deadline_paper">09:56:45</h1>
      </div>
      <div className="paper_content">
        <div className="quill_wrap">
          <ReactQuill
            //   theme="snow"
            modules={module}
            value={input}
            onChange={setinput}
            placeholder="Write your task documentation here"
            
          />
          <div className="save_quill">Save</div>
        </div>

        <div className="milestone">

          <form action="">
            <input type="text" 
            placeholder="set milestone"
            className="milestone_text" />

            <button onClick={handleMilestoneAdder}>add</button>

          </form>

          <div className="MilestoneObject">
            <input type="checkbox" name="" id="" className="mileCheck" />
            asdd asdasd
          </div>
          <div className="MilestoneObject">
            asdd asdasd
          </div>
          <div className="MilestoneObject">
            asdd asdasd
          </div><div className="MilestoneObject">
            asdd asdasd
          </div><div className="MilestoneObject">
            asdd asdasd
          </div><div className="MilestoneObject">
            asdd asdasd
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Paper;
