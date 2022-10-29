import React from "react";
import profile1 from "./Images/profile.webp";
import profile2 from "./Images/profile1.jpg";
import SendMessageInput from "./SendMessageInput";

const MessageBox = () => {
  return (
    <div className="messsage-container">
      <div className="message-sender">
        <div className="message-prifile connection-box">
          <img src={profile1} alt="" />
        </div>
        <h5 className="message">Hii how are you </h5>
      </div>
      <div className="message-sender">
        <div className="message-prifile connection-box">
          <img src={profile1} alt="" />
        </div>
        <h5 className="message"> Where  are you from</h5>
      </div>
      <div className="message-sender owner ">
      <div className="message-prifile connection-box">
          <img src={profile2} alt="" />
        </div>
        
        <h5 className="message">who are you </h5>
      

      </div>
      {/* <div className="message-reveiver">
        <h5> i am good thanks for asking</h5>
    </div> */}

    <SendMessageInput/>
    </div>
  );
};

export default MessageBox;
