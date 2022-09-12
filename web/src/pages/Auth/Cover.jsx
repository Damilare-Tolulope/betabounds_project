import React from 'react'
import { Link } from 'react-router-dom'
import forum from '../../assets/images/forum.svg'
const Cover = () => {
  return (
    <div className='cover'>
        <div>
          <div>
              <p>Make Your</p>
              <p>IDEA REALITY</p>
              <p>Join the community of experts, collaborate and make your dream reality.</p>
          </div>
          <Link to="/register"><button>Sign Up</button></Link>
        </div>
        <img src={forum} alt="forum" />
    </div>
  )
}

export default Cover