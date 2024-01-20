import "./Login.css";
import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login_image"></div>
        <div className="Login_form">

          <div className="Login_form_heading">wellfound formely developed by Suman</div>

          

          <div className="line"></div>

          <form action="" className="Login_form_action">
            <h1 className="heading_login_sub">or Login here</h1>
            <div className="form_content">
              <label htmlFor="">User Name</label>
              <input className="input" type="text" name="" id="" />
              <label htmlFor="">Password</label>
              <input className="input" type="text" name="" id="" />
              <a href="#" className="Login_FP">
                Forget&ensp;Password?
              </a>
            </div>
            <button type="submit" className="Login_button">
              Hello
            </button>
          </form>

          <div className="Sign_in_option">
            <div className="sign_in_heading">
              <p className="Sign_in_p">Sign in to TOGO</p>
              <a href="#" className="Sign_in_a">
                Sign in to TOGO
              </a>
            </div>
          </div>
          
        </div>
      
    </div>
  );
};

export default Login;
