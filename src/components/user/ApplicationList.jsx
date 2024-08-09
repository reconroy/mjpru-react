import React, { useEffect, useState } from "react";
import { FaFile, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import Homebar from './../Homebar';
import "./../../customStyles/buttonAnimation.css";
import getUserIdFromToken from "../../customScripts/getUserIdToken";
import axios from "axios";

const ApplicationList = () => {
    const token = localStorage.getItem('token');
    const userId = getUserIdFromToken();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [applications, setApplications] = useState([]);
    const [formData, setFormData] = useState({
        applicationId: "",
        advtNoPost: "",
        departmentSubject: "",
        applied: "",
        status: "Incomplete",
        userID:userId
    });


    useEffect(() => {
        if (token && userId) {
            fetchApplications();
        }
    }, [token, userId]);

    const fetchApplications = async () => {
        try {
            const response = await axios.get(`https://localhost:7142/api/YourApplication?UserId=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Ensure response data is an array
            if (Array.isArray(response.data)) {
                setApplications(response.data);
            } else {
                console.error("Unexpected response format:", response.data);
                setApplications([]); // Set to empty array if response is not an array
            }
        } catch (error) {
            console.error("Error fetching applications:", error.message);
            setApplications([]); // Set to empty array on error
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogoutClose = () => setShowModal(false);
    const handleLogoutShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form data:", formData); // Debug line
        try {
            const response = await axios.post(`https://localhost:7142/api/YourApplication`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Application added:", response.data); // Debug line
            fetchApplications(); // Refresh the list of applications
            handleClose();
        } catch (error) {
            console.error("Error adding new application:", error.response ? error.response.data : error.message);
        }
    };

    const handleLogout = () => {
        handleLogoutClose();
        localStorage.removeItem('token');
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
                                        <th scope="col">departmentSubject / Subject</th>
                                        <th scope="col">Applied Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Print / Update</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {Array.isArray(applications) && applications.length > 0 ? (
                                        applications.map((app, index) => (
                                            <tr key={index}>
                                                <td className="sn">{app.yourApplicationID}</td>
                                                <td>{app.applicationId}</td>
                                                <td>{app.advtNoPost}</td>
                                                <td>{app.departmentSubject}</td>
                                                <td>{app.applied}</td>
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
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center">No Applications Available</td>
                                        </tr>
                                    )}
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
                        <Form.Group className="mb-3" controlId="formdepartmentSubject">
                            <Form.Label>departmentSubject / Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter departmentSubject / Subject"
                                name="departmentSubject"
                                value={formData.departmentSubject}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formapplied">
                            <Form.Label>Applied Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="applied"
                                value={formData.applied}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="card-button">
                            Add Application
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose} className="card-button">
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
