import React from 'react'
import { useEffect } from 'react';

import '../Styles/ChangePasswordStyle.css'

const ChangePassword = () => {
  // useEffect's
  useEffect(() => {
    document.title = "Tasker - change password";
  }, []);

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
          /> <br />
          <input 
            type="password" 
            name="password1" 
            id="password1" 
            placeholder="Password: " 
          /> <br />
          <input 
            type="password" 
            name="password2" 
            id="password2" 
            placeholder="Password: " 
          /> <br />
          <button id="btnChangePassword"> Change password </button> <br />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword