import React from 'react'
import { IoHome } from 'react-icons/io5'; 
import { Link } from 'react-router-dom';

const Homebar = () => {
  return (
    <div>
        <div>
      <div className="container d-flex justify-content-between align-items-center rounded-bottom-3" style={{ backgroundColor: '#005174' }}>
        <h3 className="text-light">FACULTY RECRUITMENT 2021</h3>
        <Link to="/">
          <IoHome size={32} style={{ color: '#FFC000' }} /> 
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Homebar