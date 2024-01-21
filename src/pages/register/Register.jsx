import './Register.css'

import React from "react";

const Register = () => {
  return (
    
    
    <div className="signin">
      <div className="signin_image">
        
        
        </div>
      <div className="signin_form">
        <div className="signin_form_heading">

        <h1 className="company_name_login">ToGo: </h1>
          <p className="developedby">
            formely developed by <a href="https://sumany.netlify.app/" target='_blank'>Suman</a> & <a href="">Rick</a>
          </p>

          
          
          
          
        </div>

        

        <div className="line"></div>
        <form action="" className="signin_form_action">
          <h3>Sign up here</h3>
          <p className="developedby">
            manage your task
          </p>
          <div className="form_content">
            <label htmlFor="">User Name</label>
            <input className="input"type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input className="input"type="email" name="" id="" />
            <label htmlFor="">Password</label>
            <input className="input"type="password" name="" id="" />
            <label htmlFor="">Confirm Password</label>
            <input className="input"type="password" name="" id="" />
            <p className='warning'>{}</p>
          </div>
          <button type="submit" className="signin_button">
            Sign in
          </button>
        </form>
            <h4 className="term_condition">
            By continuing you accept our standard terms and conditions and our privacy policy.


            <p className='login_redirect_contain'>Or have an account? <a href='#' className="login_redirect">login here</a></p>

            </h4>

            
      </div>
    </div>

    
  );
};

export default Register;
