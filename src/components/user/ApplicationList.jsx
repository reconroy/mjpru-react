import React, { useState } from "react";
import { FaFile, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import Homebar from './../Homebar';
import "./../../customStyles/buttonAnimation.css";

const ApplicationList = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [applications, setApplications] = useState([
        {
            sn: 1,
            applicationId: "APP-001",
            advtNoPost: "Advertisement 123",
            department: "Department XYZ",
            appliedDate: "2024-07-15",
            status: "Completed"
        },
        {
            sn: 2,
            applicationId: "APP-002",
            advtNoPost: "Advertisement 456",
            department: "Department ABC",
            appliedDate: "2024-08-12",
            status: "Incomplete"
        }
    ]);
    const [formData, setFormData] = useState({
        applicationId: "",
        advtNoPost: "",
        department: "",
        appliedDate: "",
        status: "Incomplete"
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogoutClose = () => setShowModal(false);
    const handleLogoutShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newApplication = { ...formData, sn: applications.length + 1 };
        setApplications([...applications, newApplication]);
        handleClose();
    };

    const handleLogout = () => {
        handleLogoutClose();
        // Clear token or logout logic here
        // For example: localStorage.removeItem('token');
        // Redirect to home or login page
        window.location.href = "/";
    };

    return (
        <>
            <Homebar />
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header text-light d-flex justify-content-between align-items-center" style={{ backgroundColor: "#005174" }}>
                        <div className="d-flex align-items-center">
                            <FaFile size={24} style={{ marginRight: "8px" }} />
                            Your Applications
                        </div>
                        <div>
                            <Button onClick={handleShow} className="btn btn-light text-decoration-none me-2 card-button">
                                + New Application
                            </Button>
                            <Button onClick={handleLogoutShow} className="btn btn-danger rounded fw-bold card-button">
                                <FaPowerOff size={18} className="me-2 " />
                                Logout
                            </Button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive" style={{overflowX:"hidden"}}>
                            <table className="table table-striped table-hover table-bordered rounded-3">
                                <thead className="bg-info text-dark table-dark">
                                    <tr>
                                        <th scope="col">Sr.No.</th>
                                        <th scope="col">Application Id</th>
                                        <th scope="col">Advt. No. / Post</th>
                                        <th scope="col">Department / Subject</th>
                                        <th scope="col">Applied</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Print / Update</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {applications.map((app, index) => (
                                        <tr key={index}>
                                            <td className="sn">{app.sn}</td>
                                            <td>{app.applicationId}</td>
                                            <td>{app.advtNoPost}</td>
                                            <td>{app.department}</td>
                                            <td>{app.appliedDate}</td>
                                            <td className={app.status === "Completed" ? "text-success" : "text-danger"}>{app.status}</td>
                                            <td>
                                                {app.status === "Completed" ? (
                                                    <>
                                                        <button className="btn btn-sm btn-primary me-2 card-button">
                                                            Print
                                                        </button>
                                                        <button className="btn btn-sm btn-success card-button">Update</button>
                                                    </>
                                                ) : (
                                                    <Link to="/user/Status">Click here to Fill</Link>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formApplicationId">
                            <Form.Label>Application Id</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Application Id"
                                name="applicationId"
                                value={formData.applicationId}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAdvtNoPost">
                            <Form.Label>Advt. No. / Post</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Advertisement Number / Post"
                                name="advtNoPost"
                                value={formData.advtNoPost}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDepartment">
                            <Form.Label>Department / Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Department / Subject"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAppliedDate">
                            <Form.Label>Applied Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="appliedDate"
                                value={formData.appliedDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Application
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal} onHide={handleLogoutClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLogoutClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleLogout}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ApplicationList;
