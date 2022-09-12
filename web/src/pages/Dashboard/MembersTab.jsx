import React, { useEffect, useState } from 'react'
import profilePic from '../../assets/images/profilepic.jpg'


const MembersTab = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        setMembers([
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
            {
                img: profilePic,
                name: "Ayanlakin Benjamin"
            },
        ])
    }, [])

  return (
    <div className='members_tab'>
        <h4>Members of the same forum</h4>
        <div className='members'>
            {
                members.map(({name, img}, index) => {
                    return <div key={index} className='member'>
                        <img className='img_logo' src={img} alt={name} />
                        <p>{name}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default MembersTab