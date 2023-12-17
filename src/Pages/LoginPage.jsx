import React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../Styles/LoginPageStyle.css';

const LoginPage = () => {
  // useState's
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // useEffect's
  useEffect(() => {
    document.title = "Tasker - log in";
  }, []);

    // functions
    const togglePassword1Visibility = () => {
      setShowPassword1((prev) => !prev);
    };
  
    const togglePassword2Visibility = () => {
      setShowPassword2((prev) => !prev);
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
          />
          <FontAwesomeIcon
            icon={showPassword1 ? faEyeSlash : faEye}
            onClick={togglePassword1Visibility}
            className="passwordVisibilityIcon"
          /><br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password: "
          />
          <FontAwesomeIcon
            icon={showPassword2 ? faEyeSlash : faEye}
            onClick={togglePassword2Visibility}
            className="passwordVisibilityIcon"
          /><br />
          <button id="btnLogin"> Log in </button> <br />
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