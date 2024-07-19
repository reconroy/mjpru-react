import React, { useState } from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { HiAcademicCap } from "react-icons/hi2";
import { Modal, Button, Form } from 'react-bootstrap';

const EmployementDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [employments, setEmployments] = useState([]);
  const [formData, setFormData] = useState({ 
    organisation: '', typeOfOrganisation: '', employmentType: '', designation: '', 
    natureOfWork: '', reasonForLeaving: '', durationFrom: '', durationTo: '', basicPay: '' 
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setFormData({ 
      organisation: '', typeOfOrganisation: '', employmentType: '', designation: '', 
      natureOfWork: '', reasonForLeaving: '', durationFrom: '', durationTo: '', basicPay: '' 
    });
    setEditIndex(null);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedEmployments = [...employments];
      updatedEmployments[editIndex] = formData;
      setEmployments(updatedEmployments);
    } else {
      setEmployments([...employments, formData]);
    }
    handleCloseModal();
  };

  const handleEdit = (index) => {
    setFormData(employments[index]);
    setEditIndex(index);
    handleShowModal();
  };

  const handleDelete = (index) => {
    const updatedEmployments = employments.filter((_, i) => i !== index);
    setEmployments(updatedEmployments);
  };

  return (
    <div className="card">
      <div className="card-header text-light d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
        <div className="left d-flex align-items-center fs-6">
          <HiAcademicCap className="me-2" size="24" />Research Qualification
        </div>
        <div className="right">
          <Button onClick={handleShowModal} className="btn btn-light card-button">Add Employement</Button>
        </div>
      </div>
      <div className="card-body">
        <div className="container">
          <table className="table table-bordered rounded-3 overflow-hidden table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Sr. No.</th>
                <th scope="col">Name of Organisation</th>
                <th scope="col">Type of Organisation</th>
                <th scope="col">Employment Type</th>
                <th scope="col">Designation</th>
                <th scope="col">Nature of Work</th>
                <th scope="col">Reason for Leaving</th>
                <th scope="col">Duration From</th>
                <th scope="col">Duration To</th>
                <th scope="col">Basic Pay with Pay Scale</th>
                <th scope="col">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {employments.map((employment, index) => (
                <tr key={index}>
                  <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
                  <td>{employment.organisation}</td>
                  <td>{employment.typeOfOrganisation}</td>
                  <td>{employment.employmentType}</td>
                  <td>{employment.designation}</td>
                  <td>{employment.natureOfWork}</td>
                  <td>{employment.reasonForLeaving}</td>
                  <td>{employment.durationFrom}</td>
                  <td>{employment.durationTo}</td>
                  <td>{employment.basicPay}</td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <button type="button" className="btn btn-link p-0" onClick={() => handleEdit(index)}>
                        <BiSolidEdit size="25" />
                      </button>
                      <button type="button" className="btn btn-link p-0" onClick={() => handleDelete(index)}>
                        <TiDelete size="25" color='red' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success m-1 card-button">Save & Next</button>
            <button type="button" className="btn text-light m-1 card-button" style={{ backgroundColor: "#005174" }}>Skip This Step</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Employment' : 'Add New Employment'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formOrganisation">
              <Form.Label>Name of Organisation</Form.Label>
              <Form.Control type="text" name="organisation" value={formData.organisation} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formTypeOfOrganisation">
              <Form.Label>Type of Organisation</Form.Label>
              <Form.Control type="text" name="typeOfOrganisation" value={formData.typeOfOrganisation} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmploymentType">
              <Form.Label>Employment Type</Form.Label>
              <Form.Control type="text" name="employmentType" value={formData.employmentType} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" name="designation" value={formData.designation} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formNatureOfWork">
              <Form.Label>Nature of Work</Form.Label>
              <Form.Control type="text" name="natureOfWork" value={formData.natureOfWork} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formReasonForLeaving">
              <Form.Label>Reason for Leaving</Form.Label>
              <Form.Control type="text" name="reasonForLeaving" value={formData.reasonForLeaving} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDurationFrom">
              <Form.Label>Duration From</Form.Label>
              <Form.Control type="date" name="durationFrom" value={formData.durationFrom} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDurationTo">
              <Form.Label>Duration To</Form.Label>
              <Form.Control type="date" name="durationTo" value={formData.durationTo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPay">
              <Form.Label>Basic Pay with Pay Scale</Form.Label>
              <Form.Control type="text" name="basicPay" value={formData.basicPay} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSave}>{editIndex !== null ? 'Update' : 'Save'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployementDetails;
