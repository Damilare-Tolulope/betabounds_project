import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../assets/images/profilepic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = ({title}) => {
  return (
    <header>
        <h1><i><FontAwesomeIcon icon={faBars} /></i><span style={{marginLeft: "10px"}}>{title}</span></h1>
        <Link to="/profile">
          <div className='img-profile'>
              <img className='img_logo' src={profilePic} alt="profile" />
              <h3>Ayanlakin</h3>
          </div>
        </Link>
    </header>
  )
}

export default Header