import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';
import Captcha1 from './../assets/captcha/captcha_1.png';
import { Link } from 'react-router-dom';
import Homebar from './Homebar';

const ActivateAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, for example, validation and submission to server
    // For demo purpose, just show the modal
    handleShow();
  };

  return (
    <>
    <Homebar/>
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='col-12 col-md-6 col-lg-4 border rounded-2 card '>
        <div className="card-header bg-primary text-light ">
          <FaLock size={25} style={{ marginRight: '8px' }} />
          Account Verification
        </div>
        <p className='text-center text-danger mt-2'>Activation link will be sent to your Email Id.</p>
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
            <input placeholder="Username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="m-3 d-flex justify-content-between align-items-end">
            <div className="captcha-field">
              <label htmlFor="captchaInput" className="form-label">Captcha Code</label>
              <input placeholder="Enter Captcha" type="text" className="form-control" id="captchaInput" />
            </div>
            <div className="captcha-code">
              <img src={Captcha1} alt="Captcha Code" style={{ border: '2px solid black' }} />
            </div>
          </div>
          <div className='m-3 d-flex justify-content-between align-items-center'>
            <Link to="/">Back To Login</Link>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submission Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your submission was successful. Check your email for further instructions.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default ActivateAccount;
