// import { toBeChecked } from "@testing-library/jest-dom/matchers";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import React, { useState } from "react";

const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCpass] = useState();
  const [warn, setWarn] = useState("");

  const [typeS, setTypeS] = useState({
    type_pass: "password",
    type_eyes: "fa-solid fa-eye",
  });

  const signinhandler = (e) => {
    e.preventDefault();
    if (pass === cpass) {
      // pass
      // console.log(name, email, pass, cpass, warn);
      axios.post('http://localhost:3001/register',{name,email,pass}).then(result => console.log(result)).catch(err=> console.log(err))
      setName("");
      setEmail("");
      setPass("");
      setWarn("");
      setCpass("");

      navigate('/login')

    } else {
      setWarn("password is missmatching");
    }
    
  };

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
    <div className="signin">
      <div className="signin_image"></div>
      <div className="signin_form">
        <div className="signin_form_heading">
          <h1 className="company_name_login">ToGo: </h1>
          <p className="developedby">
            formely developed by{" "}
            <a href="https://sumany.netlify.app/" target="_blank">
              Suman
            </a>{" "}
            & <a href="">Rick</a>
          </p>
        </div>

        <div className="line"></div>
        <form action="" className="signin_form_action" onSubmit={signinhandler}>
          <h3>Sign up here</h3>
          <p className="developedby">manage your task</p>
          <div className="form_content">
            <label htmlFor="">User Name</label>
            <input
              className="input"
              type="text"
              name="user"
              id="user"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>

            <div className="passwrapper">
              <input
                className="input"
                type={typeS.type_pass}
                name="password"
                id="password_ID"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <div className="eye" onClick={eyehandler}>
                <i class={typeS.type_eyes}></i>
              </div>
            </div>

            <label htmlFor="">Confirm Password</label>
            <input
              className="input"
              type={typeS.type_pass}
              name="confirmpassword"
              id="confirmpassword"
              required
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            />
            <p className="warning">{warn}</p>
          </div>
          <button type="submit" className="signin_button">
            Sign in
          </button>

          <h4 className="term_condition">
            <input
              type="checkbox"
              name="checked"
              id=""
              className="tac"
              required
            />
            By continuing you accept our standard{" "}
            <a href=""> terms and conditions</a> and{" "}
            <a href="">our privacy policy.</a>
            <p className="login_redirect_contain">
              Or have an account?{" "}
              <a href="#" className="login_redirect">
                login here
              </a>
            </p>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Register;
