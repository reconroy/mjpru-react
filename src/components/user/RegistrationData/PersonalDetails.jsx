import React, { useRef } from 'react';
import { FaFile } from 'react-icons/fa';

const PersonalDetails = () => {
  const formRef = useRef(null);

  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submission logic here
  };

  return (
    <div className="container mb-5">
      <div className="card mb-5">
        <div className="card-header text-light" style={{ backgroundColor: '#005174', display: 'flex', alignItems: 'center' }}>
          <FaFile style={{ marginRight: '10px' }} />
          <span style={{ flex: '1' }}>Personal Information</span>
        </div>
        <div className="card-body">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" id="dob" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select className="form-select" id="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
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
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="subCategory" className="form-label">Sub Category</label>
                  <select className="form-select" id="subCategory">
                    <option value="">Select Sub Category</option>
                    <option value="N/A">Not Applicable</option>
                    <option value="DFF">Dependents of Freedom Fighters</option>
                    <option value="DP">Defense Person (Self)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nationality" className="form-label">Nationality</label>
                  <select className="form-select" id="nationality">
                    <option value="">Select Nationality</option>
                    <option value="indian">Indian</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="specNationality" className="form-label">If other, Please Specify Nationality</label>
                  <input type="text" className="form-control" id="specNationality" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="domacileState" className="form-label">Domicile State</label>
                  <select className="form-select" id="domacileState">
                    <option value="">Select Domicile State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="specificDomicile" className="form-label">If other, Please Specify Specific Domicile</label>
                  <input type="text" className="form-control" id="specificDomicile" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="photoIdProof" className="form-label">Photo Identity Proof</label>
                  <select className="form-select" id="photoIdProof">
                    <option value="">Select Photo Identity Proof</option>
                    <option value="passport">Passport</option>
                    <option value="drivingLicense">Driving License</option>
                    <option value="aadharCard">Aadhar Card</option>
                    <option value="voterId">Voter ID</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="idProofNo" className="form-label">ID Proof Number</label>
                  <input type="text" className="form-control" id="idProofNo" />
                </div>
              </div>
            </div>

            {/* Correspondence Address and Permanent Address */}
            {/* --------------------------------------- */}
            <div className="row">
              <div className="col-md-6 ">
                <h4 className="text-primary">CORRESPONDENCE ADDRESS</h4>
                <div className="mb-3 mt-5">
                  <label htmlFor="correspondenceAddress" className="form-label">Address</label>
                  <textarea className="form-control" placeholder="Enter correspondence address" id="correspondenceAddress" style={{ resize: "none" }}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="correspondenceAddress" className="form-label">State</label>
                  <select className="form-select" id="correspondenceAddress">
                    <option value="">Select Correspondance State</option>
                    <option value="">State 1</option>
                    <option value="">State 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="correspondenceDistrict" className="form-label">District</label>
                  <select className="form-select" id="correspondenceDistrict">
                    <option value="">Select District</option>
                    <option value="">District 1</option>
                    <option value="">District 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="correspondancePincode" className="form-label">Pincode</label>
                  <input type="text" className="form-control" id="correspondancePincode" />
                </div>
              </div>
              {/* -------------------------------------- */}
              <div className="col-md-6">
                <div className="d-flex justify-content-between flex-column">
                  <h4 className="text-primary d-inline-block">PERMANENT ADDRESS</h4>
                  <div className="mb-3 form-check d-inline-block ">
                    <input type="checkbox" className="form-check-input" id="validateData" />
                    <label className="form-check-label text-danger" htmlFor="validateData">Same as correspondence</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="permanentAddress" className="form-label">Address</label>
                  <textarea className="form-control" placeholder="Enter permanent address" id="permanentAddress" style={{ resize: "none" }}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="permanentAddress" className="form-label">State</label>
                  <select className="form-select" id="permanentAddress">
                    <option value="">Select Permanent State</option>
                    <option value="">State 1</option>
                    <option value="">State 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="permanentDistrict" className="form-label">District</label>
                  <select className="form-select" id="permanentDistrict">
                    <option value="">Select District</option>
                    <option value="">District 1</option>
                    <option value="">District 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="permanentPincode" className="form-label">Pincode</label>
                  <input type="text" className="form-control" id="permanentPincode" />
                </div>
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="validateData" />
              <label className="form-check-label text-danger" htmlFor="validateData">I certify that all the above information is correct.</label>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-danger m-1" onClick={handleClear}>Clear</button>
              <button type="submit" className="btn btn-success m-1">Save & Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
