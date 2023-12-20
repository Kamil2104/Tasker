import React from 'react'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../Styles/CreateAccountStyle.css'

export const CreateAccount = () => {
  // useState's
  const [loginText, setLoginText] = useState("");
  const [password1Text, setPassword1Text] = useState("");
  const [password2Text, setPassword2Text] = useState("");

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // useEffect's
  useEffect(() => {
    document.title = "Tasker - create account";
  }, []);

  // functions
  const handleInputLogin = (event) => {
    setLoginText(event.target.value);
  }

  const handleInputPassword1 = (event) => {
    setPassword1Text(event.target.value)
  }

  const handleInputPassword2 = (event) => {
    setPassword2Text(event.target.value)
  }

  const togglePassword1Visibility = () => {
    setShowPassword1((prev) => !prev);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prev) => !prev);
  };

  return (
    <div className='createAccountPage'>
      <div className='createAccountContainer'>
        <div className='createAccountContainerContent'>
          <h1> Create account </h1>
          <form method="post" action='/createAccount'>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login: "
              autoComplete="off"
              onChange={handleInputLogin}
            /> <br />
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="Password: "
              autoComplete="off"
              onChange={handleInputPassword1}
            />
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              onClick={togglePassword1Visibility}
              className="passwordVisibilityIcon"
            /><br />
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Password: "
              autoComplete="off"
              onChange={handleInputPassword2}
            />
            <FontAwesomeIcon
              icon={showPassword2 ? faEyeSlash : faEye}
              onClick={togglePassword2Visibility}
              className="passwordVisibilityIcon"
            /><br />
            <button id="btnCreateAccount"> Create account </button> <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount