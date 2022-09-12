import React from 'react'
import CreatePost from './CreatePost'
import MembersTab from './MembersTab'
import Post from './Post'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard_main'>
        <CreatePost />
        <div>
          <Post />
        </div>
      </div>
      <MembersTab />
    </div>
  )
}

export default Dashboard