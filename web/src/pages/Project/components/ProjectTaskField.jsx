import React from 'react'
import { useParams } from 'react-router-dom'
import DragList from './DragList'

const ProjectTaskField = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Poject {id}</h2>

      <DragList />
    </div>
  )
}

export default ProjectTaskField