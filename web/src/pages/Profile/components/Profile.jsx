import React from 'react'
import profilePic from '../../../assets/images/profilepic.jpg'

const ProfileContent = () => {
  return (
    <div className='profile_content'>
        <img src={profilePic} alt="" />

        <form>
            <div className='double'>
                <div>
                    <label>First name</label>
                    <input type="text" placeholder='John Doe'/>
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" placeholder='Doe'/>
                </div>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='john@email.com'/>
            </div>
            <div>
                <label>Contact Number</label>
                <input type="number" placeholder='1234567890'/>
            </div>
            <div>
                <label>Address</label>
                <input type="text" placeholder='Araromi area'/>
            </div>
            <div>
                <label>Profession</label>
                <input type="text" placeholder='Graphics Designer'/>
            </div>
            <div className='double'>
                <div>
                    <label>Education level</label>
                    <input type="text" placeholder='Undergraduate'/>
                </div>
                <div>
                    <button id="update">Update</button>
                </div>
            </div>
            <div>
                <label>Skill</label>
                <input type="text" placeholder='Photoshop'/>
            </div>

          <button> Save Profile </button>
        </form>
    </div>
  )
}

export default ProfileContent