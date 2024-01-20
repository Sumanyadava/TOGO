// import './Register.css'

import React from "react";

const Register = () => {
  return (
    
    
    <div className="Login">
      <div className="Login_image"></div>
      <div className="Login_form">
        <div className="Login_form_heading">Heading of Sign in</div>

        

        <div className="line"></div>
        <form action="" className="Login_form_action">
          <h1 style={{ paddingBottom: "4%" }}>Sign_up</h1>
          <div className="form_content">
            <label htmlFor="">User Name</label>
            <input className="input"type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input className="input"type="text" name="" id="" />
            <label htmlFor="">Password</label>
            <input className="input"type="text" name="" id="" />
            <a href="#" className="Login_FP">
              Forget&ensp;Password?
            </a>
            <p className='warning'>{}</p>
          </div>
          <button type="submit" className="Login_button">
            Hello
          </button>
        </form>
      </div>
    </div>

    
  );
};

export default Register;
