import React from 'react'
import InputBox from './Common/InputBox'

const Login = () => {
  return (
    <div className='loginWraper'>
      
        <div className="login">
            <h2>Secret Talk</h2>
    
    <InputBox name="email" placeText={"Email..."} />
    <InputBox name="password" placeText={"password..."} />
    <h4>Already have an accound login </h4>
    <button>Login</button>

        </div>
    </div>
  )
}

export default Login