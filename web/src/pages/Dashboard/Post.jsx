import React from 'react'
import profilePic from '../../assets/images/profilepic.jpg'


const Post = () => {
  return (
    <div className='post'>
        <div className='post_head'>
            <div className='post_head_left'>
              <img className='img_logo' src={profilePic} alt="profile" />
              <div className='post_head_name'>
                  <h3>Ayanlakin Damilare</h3>
                  <small>August 5 2022</small>
              </div>
            </div>
            <div>...</div>
        </div>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero non quam consectetur voluptas labore necessitatibus similique optio earum accusamus possimus, at, sed et ipsa velit! Porro ab perspiciatis facere obcaecati.</p>
        
        <img className='post_img' src={profilePic} alt="profile" />
    </div>
  )
}

export default Post