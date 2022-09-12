import React from 'react'
import profilePic from '../../assets/images/profilepic.jpg'


const CreatePost = () => {
  return (
    <div className='create_post'>
        <div className="search">
          <input type="search" placeholder='Search' />
        </div>
        <div className='create_post_head'>
            <div>
                <img className='img_logo' src={profilePic} alt="profile_img" />
                <input type="text" placeholder="What is on your mind, Ayalakin?" />
            </div>
            <div>
                <input type="file" />
                <button>Tag a forum</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost