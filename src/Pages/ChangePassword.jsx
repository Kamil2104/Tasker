import React from 'react'
import '../Styles/ChangePasswordStyle.css'

export const ChangePassword = () => {
  return (
    <div className='changePasswordPage'>
      <div className='changePasswordContainer'>
        <div className='changePasswordContainerContent'>
          <input type="text" name="login" id="login" placeholder="Login: " autoComplete="off" /> <br />
          <input type="password" name="password1" id="password1" placeholder="Password: " /> <br />
          <input type="password" name="password2" id="password2" placeholder="Password: " /> <br />
          <button id="btnChangePassword"> Change password </button> <br />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword