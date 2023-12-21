import React from 'react'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { validateLogin, validateCreateAccountPasswords } from '../Validation/LoginAndPasswordValidation'

import '../Styles/ChangePasswordStyle.css'

const ChangePassword = () => {
  // useState's
  const [loginText, setLoginText] = useState("");
  const [oldPasswordText, setOldPasswordText] = useState("");
  const [newPasswordText, setNewPasswordText] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // useEffect's
  useEffect(() => {
    document.title = "Tasker - change password";
  }, []);

  // functions
  const handleInputLogin = (event) => {
    setLoginText(event.target.value);
  }

  const handleInputPassword1 = (event) => {
    setOldPasswordText(event.target.value)
  }

  const handleInputPassword2 = (event) => {
    setNewPasswordText(event.target.value)
  }

  const handleButtonChangePassword = () => {

  }

  const togglePassword1Visibility = () => {
    setShowOldPassword((prev) => !prev);
  };

  const togglePassword2Visibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  return (
    <div className='changePasswordPage'>
      <div className='changePasswordContainer'>
        <div className='changePasswordContainerContent'>
          <h1> Change password </h1>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login: "
            autoComplete="off"
            onChange={handleInputLogin}
          /> <br />
          <input
            type={showOldPassword ? 'text' : 'password'}
            name="password1"
            id="password1"
            placeholder="Password: "
            autoComplete="off"
            onChange={handleInputPassword1}
          />
          <FontAwesomeIcon
            icon={showOldPassword ? faEyeSlash : faEye}
            onClick={togglePassword1Visibility}
            className="passwordVisibilityIcon"
          /><br />
          <input
            type={showNewPassword ? 'text' : 'password'}
            name="password2"
            id="password2"
            placeholder="Password:"
            autoComplete="off"
            onChange={handleInputPassword2}
          />
          <FontAwesomeIcon
            icon={showNewPassword ? faEyeSlash : faEye}
            onClick={togglePassword2Visibility}
            className="passwordVisibilityIcon"
          /><br />
          <button id="btnChangePassword" onClick={handleButtonChangePassword}> Change password </button> <br />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword