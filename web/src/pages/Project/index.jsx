import React, { useEffect, useState } from 'react'
import ProjectTaskField from './components/ProjectTaskField'
import SingleProject from './SingleProject'

const Project = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 2,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 3,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 4,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 5,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 6,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 7,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 8,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 9,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
      {
        id: 10,
        title: "Project Title",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa asperiores harum beatae accusamus obcaecati labore delectus nesciunt, quidem neque?"
      },
    ])
  }, [])

  return (
    <div className='projects'>
      <h2>Available Projects</h2>

      <div className='project_grid'>
        {
          projects.map((project, index) => {
            return <SingleProject key={index} project={project} />
          })
        }
      </div>
    </div>
  )
}

export default Project