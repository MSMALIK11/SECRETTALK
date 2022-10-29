import React from 'react'
import InputBox from './Common/InputBox'
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className='loginWraper'>
      
        <div className="login">
            <h2>Secret Talk</h2>
    
    <InputBox name="email" placeText={"Email..."} />
    <InputBox name="password" placeText={"password..."} />
    <h4>Don't have an account <Link to="/signup">signup</Link> </h4>
    <button>Login</button>

        </div>
    </div>
  )
}

export default Login