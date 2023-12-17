import React from 'react'
import { useEffect } from 'react';

import '../Styles/CreateAccountStyle.css'

export const CreateAccount = () => {
  // useEffect's
  useEffect(() => {
    document.title = "Tasker - create account";
  }, []);

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
          <button id="btnCreateAccount"> Create account </button> <br />
        </div>
      </div>
    </div>
  )
}

export default CreateAccount