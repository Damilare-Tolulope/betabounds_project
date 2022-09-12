import React from 'react'
import Chat from './components/Chat'
import ChatLists from './components/ChatLists'

const Forum = () => {
  return (
    <div className='forum'>
      <ChatLists />
      <Chat />
    </div>
  )
}

export default Forum