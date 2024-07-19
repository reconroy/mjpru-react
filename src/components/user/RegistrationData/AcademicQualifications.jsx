import React, { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Modal, Button } from 'react-bootstrap';
import "./../../../customStyles/buttonAnimation.css";

const AcademicQualifications = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [qualifications, setQualifications] = useState([
    {
      name: 'High School (10th)',
      year: '',
      board: '',
      subjects: '',
      marksObtained: '',
      marksType: '',
      percentage: '',
      division: ''
    },
    {
      name: 'Intermediate (12th)',
      year: '',
      board: '',
      subjects: '',
      marksObtained: '',
      marksType: '',
      percentage: '',
      division: ''
    },
    {
      name: 'Undergraduate',
      year: '',
      board: '',
      subjects: '',
      marksObtained: '',
      marksType: '',
      percentage: '',
      division: ''
    },
    {
      name: 'Post Undergraduate',
      year: '',
      board: '',
      subjects: '',
      marksObtained: '',
      marksType: '',
      percentage: '',
      division: ''
    }
  ]);

  const [newQualification, setNewQualification] = useState({
    name: '',
    year: '',
    board: '',
    subjects: '',
    marksObtained: '',
    marksType: '',
    percentage: '',
    division: ''
  });

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
      name: '',
      year: '',
      board: '',
      subjects: '',
      marksObtained: '',
      marksType: '',
      percentage: '',
      division: ''
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
          <HiAcademicCap className="me-2" />Academic Qualification
        </div>
        <div className="right">
          <button type='button' className="btn btn-light card-button" onClick={handleShowAddModal}>Add Other Qualification</button>
        </div>
      </div>
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered rounded-3 overflow-hidden table-striped" style={{ borderWidth: "2px" }}>
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Sr. No.</th>
                <th scope="col">Name of Examination</th>
                <th scope="col">Year</th>
                <th scope="col">Board / University</th>
                <th scope="col">Subjects</th>
                <th scope="col">Marks Obtained</th>
                <th scope="col">Marks Type</th>
                <th scope="col">Percentage / CGPA</th>
                <th scope="col">Division</th>
                <th scope="col">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((exam, index) => (
                <tr key={index}>
                  <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
                  <td>{exam.name}</td>
                  <td>{exam.year}</td>
                  <td>{exam.board}</td>
                  <td>{exam.subjects}</td>
                  <td>{exam.marksObtained}</td>
                  <td>{exam.marksType}</td>
                  <td>{exam.percentage}</td>
                  <td>{exam.division}</td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <button type="button" className="btn btn-link p-0" onClick={() => handleShowModal(index)}>
                        <BiSolidEdit size="25" />
                      </button>
                      {index >= 4 && (
                        <button type="button" className="btn btn-link p-0" onClick={() => handleDeleteQualification(index)}>
                          <TiDelete size="25" color="red" />
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
                <label className="form-label">Name of Examination</label>
                <input type="text" className="form-control" value={qualifications[selectedRow].name} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">Year</label>
                <input type="text" className="form-control" name="year" value={qualifications[selectedRow].year} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Board / University</label>
                <input type="text" className="form-control" name="board" value={qualifications[selectedRow].board} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Subjects</label>
                <input type="text" className="form-control" name="subjects" value={qualifications[selectedRow].subjects} onChange={handleQualificationChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Marks Obtained</label>
                <input type="text" className="form-control" name="marksObtained" value={qualifications[selectedRow].marksObtained} onChange={handleQualificationChange} />
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
                <label className="form-label">Division</label>
                <select className="form-select" name="division" value={qualifications[selectedRow].division} onChange={handleQualificationChange}>
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                </select>
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
              <label className="form-label">Name of Examination</label>
              <input type="text" className="form-control" name="name" value={newQualification.name} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Year</label>
              <input type="text" className="form-control" name="year" value={newQualification.year} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Board / University</label>
              <input type="text" className="form-control" name="board" value={newQualification.board} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Subjects</label>
              <input type="text" className="form-control" name="subjects" value={newQualification.subjects} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Marks Obtained</label>
              <input type="text" className="form-control" name="marksObtained" value={newQualification.marksObtained} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Marks Type</label>
              <select className="form-select" name="marksType" value={newQualification.marksType} onChange={handleNewQualificationChange}>
                <option value="">Select</option>
                <option value="percentage">Percentage</option>
                <option value="cgpa">CGPA</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Percentage / CGPA</label>
              <input type="text" className="form-control" name="percentage" value={newQualification.percentage} onChange={handleNewQualificationChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Division</label>
              <select className="form-select" name="division" value={newQualification.division} onChange={handleNewQualificationChange}>
                <option value="">Select</option>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseAddModal}>Close</Button>
          <Button variant="primary" onClick={handleAddQualification}>Add Qualification</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AcademicQualifications;
