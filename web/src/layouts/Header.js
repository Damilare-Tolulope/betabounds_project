import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../assets/images/profilepic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { sideBar } from '../contexts/SidebarContext'


const Header = ({title}) => {
  const { isOpen, setIsOpen } = useContext(sideBar)

  const toggleSidebar = () => {
      setIsOpen(!isOpen)
  }

  return (
    <header>
        <h1>{window.innerWidth < 768 && <i onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></i>}<span style={{marginLeft: "10px"}}>{title}</span></h1>
        <Link to="/profile">
          <div className='img-profile'>
              <img onClick={() => setIsOpen(!isOpen)} className='img_logo' src={profilePic} alt="profile" />
              {window.innerWidth > 768 && <h3>Ayanlakin</h3>}
          </div>
        </Link>
    </header>
  )
}

export default Header