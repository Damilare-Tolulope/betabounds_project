import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faEnvelope, faMessage, faGears, faProjectDiagram, faDrawPolygon } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {

    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Dashboard",
            link: "/dashboard"
        },
        {
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            name: "Forum",
            link: "/forum"
        },
        {
            icon: <FontAwesomeIcon icon={faMessage} />,
            name: "Idea Pool",
            link: "/ideapool"
        },
        {
            icon: <FontAwesomeIcon icon={faDrawPolygon} />,
            name: "Co-Funder Challenge",
            link: "/cofunderchallenge"
        },
        {
            icon: <FontAwesomeIcon icon={faProjectDiagram} />,
            name: "Project",
            link: "/project"
        },
        // {
        //     icon: <FontAwesomeIcon icon={faGears} />,
        //     name: "Settings",
        //     link: "/settings"
        // },
    ]

  return (
    <div className='sidebar'>
        <div className="logo">LOGO</div>
        <ul>
            {
                menuItems.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
        <Link to="/login" ><button>Sign Out</button></Link>
    </div>
  )
}

export default Sidebar