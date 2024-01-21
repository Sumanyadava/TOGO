import "./Login.css";
import React from "react";
import {useTypewriter , Cursor} from 'react-simple-typewriter';

const Login = () => {

  const [text] = useTypewriter({

    words: ['Tasks','Goals','Side projects','Habbits','Life'],
    loop:{},

  })


  return (
    <div className="Login">
      
      <div className="Login_form">

        <div className="Login_form_heading">
          <h1 className="company_name_login">ToGo: </h1>
          <p className="developedby">
            formely developed by <a href="">Suman</a> & <a href="">Rick</a>
          </p>
        </div>

        <form action="" className="Login_form_action">

          <div className="form_head">
            <h1 className="">Login</h1>
            <p className="developedby">manage you task easily</p>
          </div>
          <div className="form_content">
            <label htmlFor="">User Name</label>
            <input className="input" type="text" name="" id="" />
            <label htmlFor="">Password</label>
            <input className="input" type="password" name="" id="" />
            <a href="#" className="Login_FP">
              Forget&ensp;Password?
            </a>
          </div>
          <button type="submit" className="Login_button">
            Login
          </button>
        </form>

        <h1 className="heading_signin_sub">or Sign in here</h1>
        <div className="line"></div>

        <div className="Sign_in_option">
          <div className="sign_in_heading">
            <p className="Sign_in_p">Not registered?</p>
            <a href="#" className="Sign_in_a">
              Create an account
            </a>
          </div>
        </div>
      </div>

      <div className="Login_image">
        <div className="moto">
          Keep track of your&ensp;
          <span className="moto_change">
            {text}
            
            </span>
            <span style={{color:'rgba(0, 0, 255, 0.7)'}}>
            <Cursor/>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
