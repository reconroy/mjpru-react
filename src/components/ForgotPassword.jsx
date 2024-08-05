import React, { useState, useEffect } from 'react';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Homebar from './Homebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validateFields from "./../customScripts/forgetPasswordValidations"; // validations here
import "./../customStyles/buttonAnimation.css";
import { Spinner } from 'react-bootstrap';
import { generateCaptcha } from './../customScripts/captchaCodeGenerator.js';
import CaptchaBG from "./../assets/images/bg1.jpg";
import { LuRefreshCcw } from "react-icons/lu";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [captchaInput, setCaptchaInput] = useState(''); // Input captcha value
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');

  useEffect(() => {
    setGeneratedCaptcha(generateCaptcha());
  }, []);

  const handleRefreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const validationErrors = validateFields(email, captchaInput, generatedCaptcha);
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }

    // Show processing notification with spinner
    const processingToastId = toast.info(
      <div className="d-flex align-items-center">
        <Spinner animation="border" size="sm" className="me-2" /> {/* Spinner component */}
        Processing ...
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );

    try {
      const response = await axios.put('https://localhost:7142/api/Login/Forgotpassword', { email, password: "" });

      // Remove processing toast before showing result
      toast.dismiss(processingToastId);

      if (response.data.result === 'email sent') {
        toast.success('A new password has been sent to your email.');
      } else {
        toast.error('Email not found.');
      }
    } catch (error) {
      // Remove processing toast before showing result
      toast.dismiss(processingToastId);

      if (error.response && error.response.status === 404) {
        toast.error('Email not found.');
      } else if (error.response && error.response.status === 500) {
        toast.error('Server error. Please try again later.');
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
      <Homebar />
      <div className='container d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div className='col-12 col-md-6 col-lg-4 border rounded-2 card'>
          <div className="card-header text-light" style={{ backgroundColor: '#005174' }}>
            <FaLock size={25} style={{ marginRight: '8px' }} />
            Reset Your Password
          </div>
          <p className='text-center text-danger mt-2'>Reset Password link will be sent to your Email Id.</p>
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
              <input
                placeholder="Enter Email ID"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-3 d-flex justify-content-between align-items-end">
              <div className="captcha-field">
                <label htmlFor="captchaInput" className="form-label">Captcha Code</label>
                <input
                  placeholder="Enter Captcha"
                  type="text"
                  className="form-control"
                  id="captchaInput"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                />
              </div>
              <div className="captcha-code">
                <div className="d-flex align-items-center">
                  <div className="captcha-code mx-2">
                    <div style={{ border: '2px solid black', padding: '5px', fontSize: '18px', userSelect: "none", letterSpacing: "5px", backgroundImage: `url(${CaptchaBG})` }}
                      className='text-dark poppins-bold rounded-3 d-inline'>
                      <span style={{ color: "rgba(0,0,0,.7)" }}>
                        {generatedCaptcha}
                      </span>
                    </div>
                  </div>
                  <button type="button" className="btn btn-secondary btn-sm border-dark" onClick={handleRefreshCaptcha}><LuRefreshCcw size="25" /></button>
                </div>
              </div>
            </div>
            <div className='m-3 d-flex justify-content-between align-items-center'>
              <Link to="/login">Back To Login</Link>
              <Link to="/">Back To Home</Link>
              <button type="submit" className="btn btn-primary card-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="pb-5"></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default ForgotPassword;
