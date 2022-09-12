import React from 'react'
import profilePic from '../../assets/images/profilepic.jpg'

const Funder = ({funder}) => {
    const {name, img, issue, location, seekingFor, rating} = funder
    
  return (
    <div className='funder'>
        <div className='funder_head'>
            <h3> {name} </h3>
            <img className='img_funder' src={profilePic} alt="profile" />
        </div>
        <table>
            <tr>
                <td>Issue</td>
                <td>{issue}</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>{location}</td>
            </tr>
            <tr>
                <td>I'm looking for</td>
                <td>{seekingFor}</td>
            </tr>
            <tr>
                <td></td>
                <td>{rating}</td>
            </tr>
        </table>
    </div>
  )
}

export default Funder