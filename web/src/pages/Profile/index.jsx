import React from 'react'
import ProfileContent from './components/Profile'
import ProfileSideBar from './components/ProfileSideBar'
import Security from './components/Security'


const Profile = () => {
  return (
    <div className='profile'>
      <ProfileSideBar />
      <div>
        {
          (window.location.pathname === "/profile") ?
          <ProfileContent /> :
          <Security />
        }
      </div>
    </div>
  )
}

export default Profile