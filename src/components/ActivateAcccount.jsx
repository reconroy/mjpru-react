import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import Captcha1 from './../assets/captcha/captcha_1.png';
import { Link, useNavigate } from 'react-router-dom';
import Homebar from './Homebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./../customStyles/buttonAnimation.css";
import { Bounce } from 'react-toastify';


const ActivateAccount = () => {
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState('123'); // Captcha code for frontend validation
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email
    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }
  
    // Validate captcha
    if (captcha !== '123') { // Ensure this matches the expected captcha value
      toast.error('Invalid captcha code');
      return;
    }
  
    // Validate OTP
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }
  
    // Show processing notification
    const processingToast = toast.info('Processing activation...', {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });
  
    // Add a small buffer before making the request
    setTimeout(async () => {
      try {
        const response = await axios.post('https://localhost:7142/api/Activation', {
          email, // Send email and OTP only, not captcha
          otp,
        });
  
        toast.dismiss(processingToast);
  
        // Log the response for debugging
        console.log("API Response:", response.data);
  
        // Check if response contains success field
        if (response.data && response.data.result === 'email sent') { //
          toast.success('Password sent to your email.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
            onClose: () => navigate('/login'),
          });
        } else if (response.data && response.data.error === 'No email found') {
          toast.error('No email found');
        } else {
          console.log("Response data:", response.data); // Log response data for further debugging
          toast.error('Failed to send password. Please try again.');
        }
      } catch (error) {
        toast.dismiss(processingToast);
  
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Error response status:", error.response.status);
          console.log("Error response headers:", error.response.headers);
          toast.error(`Error: ${error.response.data.message || 'An error occurred'}`);
        } else if (error.request) {
          console.log("Error request:", error.request);
          toast.error('No response received from server.');
        } else {
          console.log('Error message:', error.message);
          toast.error('An error occurred. Please try again.');
        }
      }
    }, 500); // 500ms buffer
  };
  
  return (
    <>
      <Homebar />
      <div className='container d-flex justify-content-center align-items-center mt-5'>
        <div className='col-12 col-md-6 col-lg-4 border rounded-2 card'>
          <div className="card-header text-light" style={{ backgroundColor: '#005174' }}>
            <FaLock size={25} style={{ marginRight: '8px' }} />
            Account Verification
          </div>
          <p className='text-center text-danger mt-2'>Auto-generated password for your account will be sent to your Email Id.</p>
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
              <input
                placeholder="Username"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-3">
              <label htmlFor="otpInput" className="form-label">OTP</label>
              <input
                placeholder="Enter OTP"
                type="text"
                className="form-control"
                id="otpInput"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
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
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </div>
              <div className="captcha-code">
                <img src={Captcha1} alt="Captcha Code" style={{ border: '2px solid black' }} />
              </div>
            </div>
            <div className='m-3 d-flex justify-content-between align-items-center'>
              <Link to="/">Back To Login</Link>
              <button type="submit" className="btn btn-primary card-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="pb-5"></div>
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

export default ActivateAccount;
