import React from 'react'
import InputBox from './Common/InputBox'

const SendMessageInput = () => {
  return (
    <div className='send-message-wraper'>
        <div className="send-message-input">
        <InputBox placeText={"Message..."}/>
        

        </div>
        <div className="send-actions">
            <button>Send</button>

        </div>
    </div>
  )
}

export default SendMessageInput