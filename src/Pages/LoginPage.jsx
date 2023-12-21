import React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { validateLogin, validateSinglePassword } from '../Validation/LoginAndPasswordValidation'

import '../Styles/LoginPageStyle.css';

const LoginPage = () => {
  // useState's
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // useEffect's
  useEffect(() => {
    document.title = "Tasker - log in";
  }, []);

    // functions
    const handleInputLogin = (event) => {
      setLoginText(event.target.value);
    }

    const handleInputPassword = (event) => {
      setPasswordText(event.target.value);
    }

    const handleButtonLogin = () => {
      let loginResponse = validateLogin(loginText);
      let passwordResponse = validateSinglePassword(passwordText);

      if (loginResponse === "") {
        if (passwordResponse === "") {
          // CODE USING DATABASE
        } else {
          alert (passwordResponse)
        }
      } else {
        alert(loginResponse);
      }
    }

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className='loginContainerContent'>
          <h1> Log in </h1>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login: "
              autoComplete="off"
              onChange={handleInputLogin}
            /> <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password: "
              autoComplete="off"
              onChange={handleInputPassword}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="passwordVisibilityIcon"
            /><br />
            <button id="btnLogin" onClick={handleButtonLogin}> Log in </button> <br />
          <label> Forgot password? </label> <br />
        </div>
        <div className='loginContainerButtonCreateNewAccount'>
          <button id="btnCreateNewAccount"> Create new account </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage