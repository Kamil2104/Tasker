import React from 'react'
import '../Styles/LoginPageStyle.css'

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className='titleSide'>
        <div className='upperTitleSide'>
          <div className='upperTitleSideContent'>
            <h1> Tasker </h1> <br />
            <p> Create tasks so you will never forget what you have to do! </p>
          </div>
        </div>
        <div className='lowerTitleSide'>
          {/* Empty container */}
        </div>
      </div>
      <div className='loginSide'>
        <div className='loginContainer'>
          <div className='loginContainerInputs'>
            <input type="text" name="login" id="login" placeholder="Login: " /> <br />
            <input type="password" name="password" id="password" placeholder="Password: " />
          </div>
          <div className='loginContainerEventComponents'>
            <button id="btnLogin"> Log in </button>
            <p> Forgot password? </p>
              <div className='loginContainerEventComponentsButtonCreateNewAccount'>
                <button id="btnCreateNewAccount"> Create new account </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage