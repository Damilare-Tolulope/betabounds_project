import React from 'react'
import plus from '../../../assets/images/plus.svg'
import mic from '../../../assets/images/mic.svg'
import send from '../../../assets/images/send.svg'
import emoji from '../../../assets/images/emoji.svg'

const Chat = () => {
  return (
    <div className='chatroom'>
      <div className='chatroom_header'>
        <div className='forum_name'>
          <h6>SOFTWAWRE ENGINEERS</h6>
          <p>2000 members</p>
        </div>
        <div className='opt_icons'>
          <img src={plus} alt="plus" />
          <img src={plus} alt="plus" />
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className='chatroom_chats'>
        <div className='message_box'>
          <div className="imessage">
            <p className="from-me">I have been able to create referral code for about 10,000,000 partners across the globe.<span>2:37pm</span></p>
            <p className="from-them">That is really impressive.<span>2:37pm</span></p>
            <span>--------- Today ---------</span>
            <p className="from-me">I have been able to create referral code for about 10,000,000 partners across the globe.<span>2:37pm</span></p>
            <p className="from-them">That is really impressive.<span>2:37pm</span></p>
            <p className="from-them margin-b_one">I am promoting you again soon! Keep working. <span>2:37pm</span></p>
            {/* <p className="from-me no-tail emoji"></p> */}
            <p className="from-me">Thank you sir.<span>2:37pm</span></p>
            <div className='send_message'>
              <img src={plus} alt="plus" />
              <div>
                <img src={emoji} alt="emoji" />
                <input type="text" placeholder='Type message' />
                <img src={mic} alt="mic" />
              </div>
              <img src={send} alt="send" />
                
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Chat