import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import "./../../customStyles/buttonAnimation.css";

const AfterLoginTopBar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleLogout = () => {
    handleCloseModal();
    navigate('/');
  };

  return (
    <div className="">
      <div className="card mb-2">
        <div className="card-header text-light p- rounded-bottom-1 d-flex flex-column flex-md-row align-items-center justify-content-between" style={{backgroundColor:"#005174"}}>
          <h3 className="text-center text-md-start mb-3 mb-md-0 fs-5">Welcome To MJPRU RECRUITMENT</h3>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Link to="/user/applicationlist" className="btn btn-primary mb-2 mb-md-0 me-0 me-md-3 fw-bold card-button">
              <TfiMenuAlt size={18} className="me-2 " />
              My Applications
            </Link>
            <Button onClick={handleShowModal} className="btn btn-danger rounded fw-bold card-button">
              <FaPowerOff size={18} className="me-2 " />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AfterLoginTopBar;
