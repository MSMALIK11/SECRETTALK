import React from 'react'
import ChatHeader from '../components/ChatHeader'
import Connection from '../components/Connection'
import MessageBox from '../components/MessageBox'
import MessageHeader from '../components/MessageHeader'

const Home = () => {
  return (
  <div className="container">
      <div className='home-wraper'>
      <div className="home-chat-left">
       <ChatHeader/>
       <Connection/>
      </div>
      <div className="home-chatting-right">
        <MessageHeader/>
        <MessageBox/>
      </div>
    </div>
  </div>
  )
}

export default Home