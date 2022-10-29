import React from 'react'

const InputBox = ({name,placeText}) => {
    
  return (
    <div>
        <input type="text" placeholder={placeText} name={name} className="inputBox" />
        
    </div>
  )
}

export default InputBox