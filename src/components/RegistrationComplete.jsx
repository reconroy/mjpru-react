import React, { useState, useEffect } from 'react';
import { HiUserAdd } from "react-icons/hi";
import { Modal, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Homebar from './Homebar';
import "./../customStyles/buttonAnimation.css";

const RegistrationComplete = () => {
    const [showModal, setShowModal] = useState(false);
    const [resendDisabled, setResendDisabled] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleResend = () => {
        setResendDisabled(true);
        setShowSpinner(true);
        setShowModal(true);
        setTimeout(() => {
            setResendDisabled(false);
            setShowSpinner(false);
        }, 10000);
    };

    return (
        <>
        <Homebar/>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card border border-black">
                        <div className="card-header bg-primary text-light fs-5 d-flex align-items-center">
                            <HiUserAdd size="30px" className="me-2" />
                            New User Registration
                        </div>
                        <div className="card-body">
                            <h3 className="text-center text-success">Activate Your Account</h3>
                            <br />
                            <p className="text-start">Dear <span className="fw-bold">"Variable"</span></p>
                            <p className="text-start">Thank you for registering for FACULTY RECRUITMENT 2021.</p>
                            <p className="text-start">This one-time registration process will give you continuous access to the account.</p>
                            <p className="text-start">Please follow your email to activate your account.</p>
                            <p className="text-start text-danger fw-bold">Please check your inbox/SPAM folder for the email.</p>
                            <div className="form-btns d-flex justify-content-evenly mt-3">
                                <Button className="btn btn-primary m-2 card-button" variant="primary" onClick={handleShow}>
                                    Show Notification
                                </Button>
                                <Link to="/" className="btn btn-primary m-2 card-button">
                                    Go To Home
                                </Link>
                                <Button className="btn btn-primary m-2 card-button" variant="primary" onClick={handleResend} disabled={resendDisabled}>
                                    Resend Activation Link
                                    {showSpinner && <Spinner animation="border" size="sm" className="ms-2" />}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-success fw-bold">An Activation Link has been sent to "VARIABLE". Please follow email instructions to activate your account. Please check your Inbox/Spam folder for the email.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose} className='card-button'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default RegistrationComplete;
