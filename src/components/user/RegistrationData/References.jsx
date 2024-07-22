import React, { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { Modal, Button, Form } from 'react-bootstrap';
import countryCodes from './../../../countryCodes.json';

const References = () => {
    const [showModal, setShowModal] = useState(false);
    const [references, setReferences] = useState([]);
    const [currentReferenceIndex, setCurrentReferenceIndex] = useState(null);
    const [newReference, setNewReference] = useState({
        name: '',
        designation: '',
        organisation: '',
        email: '',
        countryCode: '',
        mobile: '',
        address: ''
    });
    const [validated, setValidated] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setCurrentReferenceIndex(null);
        setNewReference({
            name: '',
            designation: '',
            organisation: '',
            email: '',
            countryCode: '',
            mobile: '',
            address: ''
        });
        setValidated(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReference({ ...newReference, [name]: value });
    };

    const handleAddReference = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            if (currentReferenceIndex !== null) {
                const updatedReferences = [...references];
                updatedReferences[currentReferenceIndex] = { ...newReference, id: currentReferenceIndex + 1 };
                setReferences(updatedReferences);
            } else {
                setReferences([...references, { ...newReference, id: references.length + 1 }]);
            }
            handleClose();
        }
    };

    const handleEdit = (index) => {
        setCurrentReferenceIndex(index);
        setNewReference(references[index]);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        setReferences(references.filter((_, i) => i !== index));
    };

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
                <span className='text-light d-flex align-items-center'>
                    <HiAcademicCap className="me-2" size="24" />
                    References
                </span>
                <Button variant="light" onClick={handleShow}>
                    + Add Reference
                </Button>
            </div>
            <div className="card-body">
                <div className="container mt-3">
                    <table className="table table-bordered rounded-3 overflow-hidden table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" style={{ textAlign: "center" }}>Sr.No.</th>
                                <th scope="col">Name of Referee</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Organisation</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Address</th>
                                <th scope="col">Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {references.map((ref, index) => (
                                <tr key={ref.id}>
                                    <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
                                    <td>{ref.name}</td>
                                    <td>{ref.designation}</td>
                                    <td>{ref.organisation}</td>
                                    <td>{ref.email}</td>
                                    <td>{ref.countryCode} {ref.mobile}</td>
                                    <td>{ref.address}</td>
                                    <td className="text-center d-flex justify-content-start">
                                        <BiSolidEdit className="me-2" color="blue" size="24" onClick={() => handleEdit(index)} />
                                        <TiDelete size="24" color="red" onClick={() => handleDelete(index)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="container">
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success m-1 card-button" disabled={references.length < 2}>Save & Next</button>
                            <button type="button" disabled className="btn text-light m-1 card-button" style={{ backgroundColor: "#005174" }}>Skip This Step</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentReferenceIndex !== null ? 'Edit Reference' : 'Add Reference'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleAddReference}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name of Referee</Form.Label>
                            <Form.Control type="text" name="name" value={newReference.name} onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">Please enter the name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name="designation" value={newReference.designation} onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">Please enter the designation.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Organisation</Form.Label>
                            <Form.Control type="text" name="organisation" value={newReference.organisation} onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">Please enter the organisation.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={newReference.email} onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No.</Form.Label>
                            <div className="d-flex">
                                <Form.Select name="countryCode" value={newReference.countryCode} onChange={handleChange} required>
                                    <option value="">Select Country Code</option>
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.dial_code}>
                                            {country.label} ({country.value})
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control type="text" name="mobile" value={newReference.mobile} onChange={handleChange} required />
                                <Form.Control.Feedback type="invalid">Please enter a valid mobile number.</Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Complete Address with Pin Code</Form.Label>
                            <Form.Control type="text" name="address" value={newReference.address} onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">Please enter the address.</Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type="submit">
                                {currentReferenceIndex !== null ? 'Update Reference' : 'Add Reference'}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default References;
    