import React from 'react'

const ChatHeader = () => {
  return (
    <div className='chat-header'>
        <h5>Secret Talk</h5>
        <div className="header-chat-info">
            <div className="chat-header-profile">
                <span>MS</span>
            </div>
            <span className='chat-author-name'>Mr SHOAIB</span>
            <button className='chat-header-logout-btn'>Logout</button>
        </div>
    </div>
  )  
}

export default ChatHeader