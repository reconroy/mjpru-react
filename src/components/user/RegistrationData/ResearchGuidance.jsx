import React, { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResearchGuidance = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    role: '',
    degree: '',
    awarded: '',
    submitted: '',
    selfAssessmentScore: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormErrors({});
    setFormData({
      role: '',
      degree: '',
      awarded: '',
      submitted: '',
      selfAssessmentScore: ''
    });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.role) errors.role = 'Role is required';
    if (!formData.degree) errors.degree = 'Degree is required';
    if (!formData.awarded) errors.awarded = 'Awarded is required';
    if (!formData.submitted) errors.submitted = 'Submitted is required';
    if (!formData.selfAssessmentScore) errors.selfAssessmentScore = 'Self Assessment Score is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (editIndex !== null) {
      const updatedData = tableData.map((item, index) => (index === editIndex ? formData : item));
      setTableData(updatedData);
    } else {
      setTableData((prevData) => [...prevData, formData]);
    }

    handleCloseModal();
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditIndex(index);
    handleShowModal();
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <div className="container  mb-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center text-light" style={{ backgroundColor: "#005174" }}>
          <div className="d-flex align-items-center">
            <HiAcademicCap size="25px" />
            <h5 className="ms-2 mb-0">Research Guidance (Students currently working/completed their thesis (Numbers Only))</h5>
          </div>
          <button className="btn btn-light card-button" onClick={handleShowModal}>Add Gauidance</button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered rounded-3 overflow-hidden table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className='text-center align-top'>Sr.No.</th>
                  <th scope="col" className='text-center align-top' style={{ width: "20%" }}>Role</th>
                  <th scope="col" className='text-center align-top' style={{ width: "50%" }}>Degree</th>
                  <th scope="col" className='text-center align-top'>Awarded</th>
                  <th scope="col" className='text-center align-top'>Submitted</th>
                  <th scope="col" className='text-center align-top'>Self Assessment Score</th>
                  <th scope="col" className='text-center align-top'>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <th scope="row" className='text-center'>{index + 1}</th>
                    <td>{data.role}</td>
                    <td>{data.degree}</td>
                    <td>{data.awarded}</td>
                    <td>{data.submitted}</td>
                    <td>{data.selfAssessmentScore}</td>
                    <td>
                      <BiSolidEdit color='blue' size="25" className="me-2" onClick={() => handleEdit(index)} />
                      <TiDelete color='red' size="25" onClick={() => handleDelete(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className='text-end fw-bold'>Total Self Assessment Score</td>
                  <td>
                    <b>{tableData.reduce((sum, data) => sum + parseFloat(data.selfAssessmentScore || 0), 0).toFixed(2)}</b>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success m-1 card-button">Save & Next</button>
            <button type="button" disabled className="btn btn-secondary m-1 card-button">Skip This Step</button>
          </div>
        </div>
      </div>
      <div className="container">
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{editIndex !== null ? 'Update Research Guidance' : 'Add Research Guidance'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Label>Role<span className='text-danger fw-bold'> * </span></Form.Label>
                <Form.Select name="role" value={formData.role} onChange={handleChange} isInvalid={!!formErrors.role}>
                  <option value="">Select Role</option>
                  <option value="Sole Supervisor">Sole Supervisor</option>
                  <option value="Co-Supervisor">Co-Supervisor</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.role}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDegree">
                <Form.Label>Degree<span className='text-danger fw-bold'> * </span></Form.Label>
                <Form.Select name="degree" value={formData.degree} onChange={handleChange} isInvalid={!!formErrors.degree}>
                  <option value="">Select Degree</option>
                  <option value="Ph.D.">Ph.D.</option>
                  <option value="M. Phill. Dissertation / Project">M. Phill. Dissertation / Project</option>
                  <option value="PG Dissertation / Projects">PG Dissertation / Projects</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.degree}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAwarded">
                <Form.Label>Awarded<span className='text-danger fw-bold'> * </span></Form.Label>
                <Form.Control
                  type="text"
                  name="awarded"
                  value={formData.awarded}
                  onChange={handleChange}
                  isInvalid={!!formErrors.awarded}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.awarded}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubmitted">
                <Form.Label>Submitted<span className='text-danger fw-bold'> * </span></Form.Label>
                <Form.Control
                  type="text"
                  name="submitted"
                  value={formData.submitted}
                  onChange={handleChange}
                  isInvalid={!!formErrors.submitted}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.submitted}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSelfAssessmentScore">
                <Form.Label>Self Assessment Score<span className='text-danger fw-bold'> * </span></Form.Label>
                <Form.Control
                  type="text"
                  name="selfAssessmentScore"
                  value={formData.selfAssessmentScore}
                  onChange={handleChange}
                  isInvalid={!!formErrors.selfAssessmentScore}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.selfAssessmentScore}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="danger" onClick={handleCloseModal} className="me-2">
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  {editIndex !== null ? 'Update' : 'Add'}
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ResearchGuidance;
