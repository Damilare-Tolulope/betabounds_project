import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const ProfileSideBar = () => {
    const menuItems = [
        {
            link: "/profile",
            icon: <FontAwesomeIcon icon={faUser} />,
            name: "Profile"
        },
        {
            link: "/profile/security",
            icon: <FontAwesomeIcon icon={faUserGear} />,
            name: "Password and Security"
        },
    ]
  return (
    <div className='profile_sidebar'>
        <ul>
            {
                menuItems.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
    </div>
  )
}

export default ProfileSideBar