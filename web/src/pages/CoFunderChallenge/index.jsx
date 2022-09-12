import React, { useEffect, useState } from 'react'
import Funder from './Funder'

const CoFunderChallenge = () => {
  const [funders, setFunders] = useState([])

  useEffect(() => {
    setFunders([
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
      {
        name: "Mr Dan", 
        img: "",
        issue: "Data Protection and Protection Issue", 
        location: "Canada", 
        seekingFor: "Data Scientist", 
        rating: "⭐⭐⭐⭐"
      },
    ])
  }, [])

  return (
    <div className='funders'>
        <h2>Active Funders</h2>

        <div className='funders_grid'>
          {
            funders.map((funder, index) => {
              return <Funder key={index} funder={funder} />
            })
          }
        </div>
    </div>
  )
}

export default CoFunderChallenge