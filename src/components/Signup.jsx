import React from 'react'
import { Link } from 'react-router-dom'
import InputBox from './Common/InputBox'

const Signup = () => {
  return (
    <div className='loginWraper'>
      
    <div className="login">
        <h2>Secret Talk</h2>
        <InputBox name="name" placeText={"Display name..."} />

<InputBox name="email" placeText={"Email..."} />
<InputBox name="password" placeText={"password..."} />
<h4>Already have an account <Link to="/login">login</Link> </h4>
<button>Sign up</button>

    </div>
</div>
  )
}

export default Signup