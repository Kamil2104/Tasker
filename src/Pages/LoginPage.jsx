import React from 'react'
import '../Styles/LoginPageStyle.css'

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className='loginContainerContent'>
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