import React from 'react';
import { useEffect } from 'react';

import '../Styles/LoginPageStyle.css';  

const LoginPage = () => {
  useEffect(() => {
    document.title = "Tasker - log in";
  }, []);

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className='loginContainerContent'>
          <h1> Log in </h1>
          <input type="text" name="login" id="login" placeholder="Login: " autoComplete="off" /> <br />
          <input type="password" name="password" id="password" placeholder="Password: " /> <br />
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