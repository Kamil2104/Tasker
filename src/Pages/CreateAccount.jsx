import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { validateLogin, validateCreateAccountPasswords } from '../Validation/LoginAndPasswordValidation'

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

  // useNavigate()
  const navigate = useNavigate();

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

  const handleButtonCreateAccount = () => {
    let loginResponse = validateLogin(loginText);
    let passwordResponse = validateCreateAccountPasswords(password1Text, password2Text);

    if (loginResponse === "") {
      if (passwordResponse === "") {
        const values = {
          login: loginText,
          password: password1Text
        }

        axios.post('http://localhost:8081/createAccount', values)
          .then(res => {
            if (res.data === "Success") {
              navigate('/')
            } else {
              alert("Account with this login already exists.")
            }
          })
          .catch(err => console.log(err))
      } else {
        alert(passwordResponse)
      }
    } else {
      alert(loginResponse);
    }
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
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login: "
            autoComplete="off"
            onChange={handleInputLogin}
          /> <br />
          <input
            type={showPassword1 ? "text" : "password"}
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
            type={showPassword2 ? "text" : "password"}
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
          <button id="btnCreateAccount" onClick={handleButtonCreateAccount}> Create account </button> <br />
        </div>
      </div>
    </div>
  )
}

export default CreateAccount