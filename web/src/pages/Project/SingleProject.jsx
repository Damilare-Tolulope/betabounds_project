import React, { useState } from 'react'


const SingleProject = ({ project }) => {
  const {id, title, details} = project;
  const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      console.log("click na")
      setIsOpen(false)
    }

    const handleRequest = () => {
      window.location = `/project/${id}`
    }

  return (
    <>
    <div onClick={() => setIsOpen(!isOpen)} className='project'>
        <h3>{title}</h3>
        <p>{details}</p>
        
        {
          isOpen && (
              <div className='request_btn'>
                <button onClick={handleRequest}>Request</button>
              </div>
          )
        }
    </div>
    </>
  )
}

export default SingleProject