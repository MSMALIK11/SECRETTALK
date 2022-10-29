import React from 'react'
import InputBox from './Common/InputBox'

const Signup = () => {
  return (
    <div className='loginWraper'>
      
    <div className="login">
        <h2>Secret Talk</h2>
        <InputBox name="name" placeText={"Display name..."} />

<InputBox name="email" placeText={"Email..."} />
<InputBox name="password" placeText={"password..."} />
<button>Sign up</button>

    </div>
</div>
  )
}

export default Signup