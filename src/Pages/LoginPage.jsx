import React from 'react'
import '../Styles/LoginPageStyle.css'

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className='loginContainer'>
          <input type="text" name="login" id="login" placeholder="Login: " /> <br />
          <input type="password" name="password" id="password" placeholder="Password: " />
          <button id="btnLogin"> Log in </button>
          <p> Forgot password? </p>
          <button id="btnCreateNewAccount"> Create new account </button>
      </div>
    </div>
  )
}

export default LoginPage