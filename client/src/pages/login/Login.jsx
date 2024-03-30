import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Login.css";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [email_login, setemail_login] = useState();
  const [pass_login, setPass_login] = useState();
  const [warn_login, setwarn_login] = useState();
  const [typeS, setTypeS] = useState({
    type_pass: "password",
    type_eyes: "fa-solid fa-eye",
  });

  const [text] = useTypewriter({
    words: ["Tasks", "Goals", "Side projects", "Habbits", "Life"],
    loop: {},
  });

  function loginhandler(e) {
    e.preventDefault();

    
    axios.post('http://localhost:5000/login',{email:email_login,pass:pass_login}).then(result => { console.log(result.data)
    
      navigate('/')
    
  }).catch(err=> {console.log(err.response.data)
  
    setwarn_login(err.response.data)
  })
  }


  
  function eyehandler() {
    if (typeS.type_pass === "password") {
      setTypeS((prev) => ({
        ...prev,
        type_pass: "text",
      }));
      setTypeS((prev) => ({
        ...prev,
        type_eyes: "fa-solid fa-eye-slash",
      }));
    } else {
      setTypeS((prev) => ({
        ...prev,
        type_pass: "password",
      }));
      setTypeS((prev) => ({
        ...prev,
        type_eyes: "fa-solid fa-eye",
      }));
    }
  }

  return (
    <div className="Login">
      <div className="Login_form">
        <div className="Login_form_heading">
          <h1 className="company_Name_login">ToGo: </h1>
          <p className="developedby">
            formely developed by <a href="">Suman</a> & <a href="">Rick</a>
          </p>
        </div>


        <form action="" className="Login_form_action" onSubmit={loginhandler}>
          <div className="form_head">
            <h1 className="">Login</h1>
            <p className="developedby">manage you task easily</p>
          </div>
          <div className="form_login_content">
            <label htmlFor="">Email </label>
            <input
              className="inputl"
              type="email"
              name=""
              id=""
              required
              value={email_login}
              onChange={(e) => setemail_login(e.target.value)}
            />
            <label htmlFor="">Password</label>

            <div className="passwrapper">
              <input
                className="inputl"
                type={typeS.type_pass}
                name="password"
                id="password_ID"
                required
                value={pass_login}
                onChange={(e) => setPass_login(e.target.value)}
              />
              <div className="eye" onClick={eyehandler}>
                <i class={typeS.type_eyes}></i>
              </div>
            </div>
            <span className="warning">{warn_login}</span>
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
          <span className="moto_change">{text}</span>
          <span style={{ color: "rgba(0, 0, 255, 0.7)" }}>
            <Cursor />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
