import React from 'react'
import { IoHome } from 'react-icons/io5'; 
import { Link } from 'react-router-dom';
import "./../customStyles/tooltipStyles.css";
const Homebar = () => {
  return (
    <div  style={{borderTop: '3px solid #005174'}}>
        <div>
      <div className="container d-flex justify-content-between align-items-center rounded-bottom-3" style={{ backgroundColor: '#005174' }}>
        <h3 className="text-light">FACULTY RECRUITMENT 2021</h3>
        <Link to="/" title='Home' className='homr-btn'>
          <IoHome size={32} style={{ color: '#FFFFFF' }} /> 

           
        
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Homebar