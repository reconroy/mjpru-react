import React, { useState } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Modal, Button, Form } from 'react-bootstrap';

const JRF_NET_SLET_SET = () => {
  const [showModal, setShowModal] = useState(false);
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({ certificate: '', organization: '', title: '', year: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [isSaveNextDisabled, setIsSaveNextDisabled] = useState(true);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedQualifications = [...qualifications];
      updatedQualifications[editIndex] = formData;
      setQualifications(updatedQualifications);
      setEditIndex(null);
    } else {
      setQualifications([...qualifications, formData]);
    }
    setFormData({ certificate: '', organization: '', title: '', year: '' });
    setIsSaveNextDisabled(false);
    handleCloseModal();
  };

  const handleEdit = (index) => {
    setFormData(qualifications[index]);
    setEditIndex(index);
    handleShowModal();
  };

  const handleDelete = (index) => {
    const updatedQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(updatedQualifications);
    if (updatedQualifications.length === 0) {
      setIsSaveNextDisabled(true);
    }
  };

  return (
    <div className="card">
      <div className="card-header text-light d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
        <div>
          <FaUserGraduate size={24} />
          <span className="ms-2">JRF / NET / SLET / SET / ANY OTHER</span>
        </div>
        <Button onClick={handleShowModal} className="btn btn-light card-button">+ Add New</Button>
      </div>
      <div className="card-body">
        <div className="container">
          <table className="table table-bordered rounded-3 overflow-hidden table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Sr. No.</th>
                <th scope="col">Qualification / Certificate</th>
                <th scope="col">Agency / Organization</th>
                <th scope="col">Subject / Title</th>
                <th scope="col">Year</th>
                <th scope="col">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((qualification, index) => (
                <tr key={index}>
                  <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
                  <td>{qualification.certificate}</td>
                  <td>{qualification.organization}</td>
                  <td>{qualification.title}</td>
                  <td>{qualification.year}</td>
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
            <button type="submit" className="btn btn-success m-1 card-button" disabled={isSaveNextDisabled}>Save & Next</button>
            <button type="button" className="btn text-light m-1 card-button" style={{ backgroundColor: "#005174" }}>Skip This Step</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Qualification' : 'Add New Qualification'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCertificate">
              <Form.Label>Qualification / Certificate</Form.Label>
              <Form.Control type="text" name="certificate" value={formData.certificate} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formOrganization">
              <Form.Label>Agency / Organization</Form.Label>
              <Form.Control type="text" name="organization" value={formData.organization} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Subject / Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" name="year" value={formData.year} onChange={handleChange} />
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

export default JRF_NET_SLET_SET;
