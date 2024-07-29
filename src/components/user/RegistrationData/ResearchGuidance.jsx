import React from 'react'
import { HiAcademicCap } from "react-icons/hi2";

const ResearchGuidance = () => {
  return (
    <div className=''>
      <div className="card">
        <div className="card-header text-light" style={{backgroundColor:"#005174"}}>
          <HiAcademicCap size="25px"/> 
          Research Guidance (Students currently working/completed their thesis (Numbers Only))
          <button>Add</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default ResearchGuidance
