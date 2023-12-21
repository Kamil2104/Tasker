import React from 'react'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { validateLogin, validateChangePasswordPasswords } from '../Validation/LoginAndPasswordValidation'

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

  const handleInputOldPassword = (event) => {
    setOldPasswordText(event.target.value)
  }

  const handleInputNewPassword = (event) => {
    setNewPasswordText(event.target.value)
  }

  const handleButtonChangePassword = () => {
    let loginResponse = validateLogin(loginText);
    let passwordResponse = validateChangePasswordPasswords(oldPasswordText, newPasswordText);

    if (loginResponse === "") {
      if (passwordResponse === "") {
        // CODE USING DATABASE
      } else {
        alert(passwordResponse);
      }
    } else {
      alert(loginResponse);
    }
  }

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
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
            placeholder="Old password: "
            autoComplete="off"
            onChange={handleInputOldPassword}
          />
          <FontAwesomeIcon
            icon={showOldPassword ? faEyeSlash : faEye}
            onClick={toggleOldPasswordVisibility}
            className="passwordVisibilityIcon"
          /><br />
          <input
            type={showNewPassword ? 'text' : 'password'}
            name="password2"
            id="password2"
            placeholder="New password:"
            autoComplete="off"
            onChange={handleInputNewPassword}
          />
          <FontAwesomeIcon
            icon={showNewPassword ? faEyeSlash : faEye}
            onClick={toggleNewPasswordVisibility}
            className="passwordVisibilityIcon"
          /><br />
          <button id="btnChangePassword" onClick={handleButtonChangePassword}> Change password </button> <br />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword