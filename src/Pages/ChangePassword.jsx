import React from 'react'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../Styles/ChangePasswordStyle.css'

const ChangePassword = () => {
  // useState's
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // useEffect's
  useEffect(() => {
    document.title = "Tasker - change password";
  }, []);

  // functions
  const togglePassword1Visibility = () => {
    setShowPassword1((prev) => !prev);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prev) => !prev);
  };

  return (
    <div className='changePasswordPage'>
      <div className='changePasswordContainer'>
        <div className='changePasswordContainerContent'>
          <h1> Change password </h1>
          <form method="post" action='/changePassword'> 
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login: "
              autoComplete="off"
            /> <br />
            <input
              type={showPassword1 ? 'text' : 'password'}
              name="password1"
              id="password1"
              placeholder="Password: "
            />
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              onClick={togglePassword1Visibility}
              className="passwordVisibilityIcon"
            /><br />
            <input
              type={showPassword2 ? 'text' : 'password'}
              name="password2"
              id="password2"
              placeholder="Password:"
            />
            <FontAwesomeIcon
              icon={showPassword2 ? faEyeSlash : faEye}
              onClick={togglePassword2Visibility}
              className="passwordVisibilityIcon"
            /><br />
            <button id="btnChangePassword"> Change password </button> <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword