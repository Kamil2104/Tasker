import React from 'react'
import { useEffect } from 'react';

import '../Styles/CreateAccountStyle.css'

export const CreateAccount = () => {
  useEffect(() => {
    document.title = "Tasker - create account";
  }, []);

  return (
    <div>CreateAccount</div>
  )
}

export default CreateAccount