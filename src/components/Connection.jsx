import React from 'react';
import InputBox from './Common/InputBox';
import p1 from './Images/profile.webp'
import p2 from './Images/profile1.jpg'

const Connection = () => {


    const connections=[
        {
            name:'taylor',
            lastMessage:'ohk Thank you👍',
            profile:p1
        },
        {
            name:'Zaynah',
            lastMessage:'yeah dude',
            profile:p2
        }
    ]
  return (
    <div>
       <InputBox placeText={"Find user"} />

       <div className="connections-wraper">
        {
            connections?.map((user)=>{
                return(
                    <>
                    <div className="connection-box">
                        <img src={user.profile} alt="" />
                        <div className="connection-info">
                            <h className="connection-name">
                                {user.name}
                        
                            </h>
                            <span className='connection-last-message'>
                                {user.lastMessage}
                            </span>
                        </div>
                    </div>
                    </>
                )
            })
        }
       </div>

    </div>
  )
}

export default Connection