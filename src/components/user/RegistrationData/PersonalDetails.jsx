import React from 'react';
import { FaFile } from 'react-icons/fa';

const PersonalDetails = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-light" style={{ backgroundColor: '#005174', display: 'flex', alignItems: 'center' }}>
          <FaFile style={{ marginRight: '10px' }} />
          <span style={{ flex: '1' }}>Personal Information</span>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date" className="form-control" id="dob" />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
              <select className="form-select" id="maritalStatus">
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label">Sub Category</label>
              <select className="form-select" id="subCategory">
                <option value="">Select Sub Category</option>
                <option value="N/A">Not Applicable</option>
                <option value="DFF">Dependents of Freedom Fighters</option>
                <option value="DP">Defense Person (Self)</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">Nationality</label>
              <select className="form-select" id="nationality">
                <option value="">Select Nationality</option>
                <option value="indian">Indian</option>
                <option value="american">American</option>
                <option value="british">British</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label text-danger" htmlFor="exampleCheck1">I certify that all the above information is correct.</label>
            </div>
            <button type="submit" className="btn btn-success">Save & Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
