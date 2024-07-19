import React, { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Modal, Button } from 'react-bootstrap';
import "./../../../customStyles/buttonAnimation.css";

const ResearchQualifications = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQualification, setNewQualification] = useState({
    degree: '',
    university: '',
    subjects: '',
    year: '',
    marksType: '',
    percentage: '',
    status: ''
  });

  const initialQualifications = [
    {
      degree: 'M. Phil.',
      university: '',
      subjects: '',
      year: '',
      marksType: '',
      percentage: '',
      status: ''
    },
    {
      degree: 'Ph.D / D.Phil.',
      university: '',
      subjects: '',
      year: '',
      marksType: '',
      percentage: '',
      status: ''
    },
    {
      degree: 'D.Sc.',
      university: '',
      subjects: '',
      year: '',
      marksType: '',
      percentage: '',
      status: ''
    },
    {
      degree: 'D.Litt.',
      university: '',
      subjects: '',
      year: '',
      marksType: '',
      percentage: '',
      status: ''
    }
  ];

  const [qualifications, setQualifications] = useState(initialQualifications);

  const handleShowModal = (index) => {
    setSelectedRow(index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleNewQualificationChange = (e) => {
    const { name, value } = e.target;
    setNewQualification(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleQualificationChange = (e) => {
    const { name, value } = e.target;
    const updatedQualifications = [...qualifications];
    updatedQualifications[selectedRow] = {
      ...updatedQualifications[selectedRow],
      [name]: value
    };
    setQualifications(updatedQualifications);
  };

  const handleAddQualification = () => {
    setQualifications([...qualifications, newQualification]);
    setNewQualification({
      degree: '',
      university: '',
      subjects: '',
      year: '',
      marksType: '',
      percentage: '',
      status: ''
    });
    handleCloseAddModal();
  };

  const handleDeleteQualification = (index) => {
    const updatedQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(updatedQualifications);
  };

  const handleSaveChanges = () => {
    handleCloseModal();
  };

  return (
    <div className="card">
      <div className="card-header text-light d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
        <div className="left d-flex align-items-center fs-6">
          <HiAcademicCap className="me-2" size="24"/>Research Qualification
        </div>
        <div className="right">
          <button type='button' disabled className="btn btn-light card-button" onClick={handleShowAddModal}>Add Other Qualification</button>
        </div>
      </div>
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered rounded-3 overflow-hidden table-striped" style={{ borderWidth: "2px" }}>
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Sr. No.</th>
                <th scope="col">Degree</th>
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
                  <td>{exam.degree}</td>
                  <td>{exam.university}</td>
                  <td>{exam.subjects}</td>
                  <td>{exam.year}</td>
                  <td>{exam.marksType}</td>
                  <td>{exam.percentage}</td>
                  <td>{exam.status}</td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <button type="button" className="btn btn-link p-0" onClick={() => handleShowModal(index)}>
                        <BiSolidEdit size="25" />
                      </button>
                      {index >= 4 && (
                        <button type="button" className="btn btn-link p-0" onClick={() => handleDeleteQualification(index)}>
                          <TiDelete size="25" color='red' />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success m-1 card-button">Save & Next</button>
          <button type="button" className="btn text-light m-1 card-button" style={{ backgroundColor: "#005174" }}>Skip This Step</button>
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
                <input type="text" className="form-control" value={qualifications[selectedRow].degree} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">University / Institution Name</label>
                <input type="text" className="form-control" name="university" value={qualifications[selectedRow].university} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject / Title of Thesis</label>
                <input type="text" className="form-control" name="subjects" value={qualifications[selectedRow].subjects} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Year</label>
                <input type="text" className="form-control" name="year" value={qualifications[selectedRow].year} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Marks Type</label>
                <select className="form-select" name="marksType" value={qualifications[selectedRow].marksType} onChange={handleQualificationChange}>
                  <option value="percentage">Percentage</option>
                  <option value="cgpa">CGPA</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Percentage / CGPA</label>
                <input type="text" className="form-control" name="percentage" value={qualifications[selectedRow].percentage} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Degree Status</label>
                <select className="form-select" name="status" value={qualifications[selectedRow].status} onChange={handleQualificationChange}>
                  <option value="Awarded">Awarded</option>
                  <option value="Submitted">Submitted</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Awarded / Submitted Date (dd/mm/yy)</label>
                <input type="date" className="form-control" name="date" onChange={handleQualificationChange} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>Close</Button>
            <Button variant="primary" onClick={handleSaveChanges}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      )}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Qualification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Degree</label>
              <input type="text" className="form-control" name="degree" value={newQualification.degree} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">University / Institution Name</label>
              <input type="text" className="form-control" name="university" value={newQualification.university} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject / Title of Thesis</label>
              <input type="text" className="form-control" name="subjects" value={newQualification.subjects} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Year</label>
              <input type="text" className="form-control" name="year" value={newQualification.year} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Marks Type</label>
              <select className="form-select" name="marksType" value={newQualification.marksType} onChange={handleNewQualificationChange}>
                <option value="percentage">Percentage</option>
                <option value="cgpa">CGPA</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Percentage / CGPA</label>
              <input type="text" className="form-control" name="percentage" value={newQualification.percentage} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Degree Status</label>
              <select className="form-select" name="status" value={newQualification.status} onChange={handleNewQualificationChange}>
                <option value="Awarded">Awarded</option>
                <option value="Submitted">Submitted</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Awarded / Submitted Date (dd/mm/yy)</label>
              <input type="date" className="form-control" name="date" onChange={handleNewQualificationChange} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>Close</Button>
          <Button variant="primary" onClick={handleAddQualification}>Add Qualification</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ResearchQualifications;

