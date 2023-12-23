import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { validateLogin, validatePassword } from '../Validation/LoginAndPasswordValidation'

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

  // useNavigate
  const navigate = useNavigate();

  // functions
  const handleInputLogin = (event) => {
    setLoginText(event.target.value);
  }

  const handleInputPassword = (event) => {
    setPasswordText(event.target.value);
  }

  const handleButtonLogin = () => {
    let loginResponse = validateLogin(loginText);
    let passwordResponse = validatePassword(passwordText);

    if (loginResponse === "") {
      if (passwordResponse === "") {
        const values = {
          login: loginText,
          password: passwordText
        }

        axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === "Success") {
            navigate('/tasksPage')
          } else {
            alert ("Incorrect login or password.")
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

  const handleButtonChangePassword = () => {
    navigate('/changePassword')
  }

  const handleButtonCreateNewAccount = () => {
    navigate('/createNewAccount')
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
          <label onClick={handleButtonChangePassword}> Forgot password? </label> <br />
        </div>
        <div className='loginContainerButtonCreateNewAccount'>
          <button id="btnCreateNewAccount" onClick={handleButtonCreateNewAccount}> Create new account </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage