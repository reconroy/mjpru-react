import React, { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { Modal, Button } from 'react-bootstrap';
import "./../../../customStyles/buttonAnimation.css";

const ResearchQualifications = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleShowModal = (index) => {
    setSelectedRow(index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const qualifications = [
    'M. Phil.',
    'Ph.D / D.Phil.',
    'D.Sc.',
    'D.Litt.'
  ];

  return (
    <div className="card">
      <div className="card-header text-light d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
        <div className="left d-flex align-items-center fs-6">
          <HiAcademicCap className="me-2" />Research Qualification
        </div>
        <div className="right">
          <button type='button' className="btn btn-light card-button">Add Other Qualification</button>
        </div>
      </div>
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered rounded-3 overflow-hidden table-striped" style={{ borderWidth: "2px" }}>
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Sr. No.</th>
                <th scope="col">Dgree</th>
                <th scope="col">University</th>
                <th scope="col">Subjects / Title</th>
                <th scope="col">Year</th>
                <th scope="col">Marks Type</th>
                <th scope="col">Percentage / CGPA</th>
                <th scope="col">Status</th>
                <th scope="col">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((exam, index) => (
                <tr key={index}>
                  <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
                  <td>{exam}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-link p-0" onClick={() => handleShowModal(index)}>
                      <BiSolidEdit size="25" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success m-1 card-button">Save & Next</button>
          <button type="submit" className="btn btn-light text-light  m-1 card-button" style={{backgroundColor:"#005174"}}>Skip This Step</button>
        </div>
      </div>
      {selectedRow !== null && (
        <Modal show={selectedRow !== null} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Qualification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Qualification Name</label>
                <input type="text" className="form-control" value={qualifications[selectedRow]} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">University / Institution Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject / Title of Thesis</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Marks Type</label>
                <select className="form-select">
                  <option value="percentage">Percentage</option>
                  <option value="cgpa">CGPA</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Percentage / CGPA</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Minimum Marks</label>
                <input type="text" className="form-control" />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Percentage / CGPA</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Degree Status</label>
                <select className="form-select">
                  <option value="first">Awarded</option>
                  <option value="second">Submitted</option>
                </select>
              </div>
              <div className="mb-3">
                  <label className="form-label">Awarded / Submitted Date (dd/mm/yy)</label>
                  <input type="date" className="form-control" />
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ResearchQualifications;
