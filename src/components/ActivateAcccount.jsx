import React, { useState, useEffect } from 'react';
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Homebar from './Homebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./../customStyles/buttonAnimation.css";
import { Bounce } from 'react-toastify';
import CaptchaBG from "./../assets/images/bg1.jpg";
import { LuRefreshCcw } from "react-icons/lu";
import { Spinner } from 'react-bootstrap'; // Import Bootstrap Spinner

const ActivateAccount = () => {
  const [email, setEmail] = useState('');
  // const [captcha, setCaptcha] = useState('123'); // for default put 123
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [otp, setOtp] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  // Function to generate a random captcha code
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  useEffect(() => {
    setGeneratedCaptcha(generateCaptcha());
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRefreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    // Validate captcha
    if (inputCaptcha !== generatedCaptcha) {
      toast.error('Invalid captcha code');
      return;
    }

    // Validate OTP
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }

    // Show processing notification with spinner
    const processingToast = toast.info(
      <div className="d-flex align-items-center">
        <Spinner animation="border" size="sm" className="me-2" /> {/* Spinner component */}
        Processing activation...
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );

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
        if (response.data && response.data.result === 'email sent') {
          toast.success('Password sent to your email.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // theme: "light",
            transition: Bounce,
            onClose: () => {
              navigate('/login');
              setIsButtonDisabled(true); // Disable the button on success
              setTimeout(() => setIsButtonDisabled(false), 10000); // Re-enable the button after 10 seconds
            },
          });
        } else if (response.data && response.data.error === 'No email found') {
          toast.error('No email found');
        } else {
          console.log("Response data:", response.data); 
          // Log response data for further debugging
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
    }, 500); 
  };

  return (
    <>
      <Homebar />
      <div className='container d-flex justify-content-center align-items-center mt-5 pb-5'>
        <div className='col-12 col-md-6 col-lg-4 border rounded-2 card'>
          <div className="card-header text-light" style={{ backgroundColor: '#005174' }}>
            <FaLock size={25} style={{ marginRight: '8px' }} />
            Account Verification
          </div>
          <p className='text-center text-danger mt-2'>Auto-generated password for your account will be sent to your Email Id.</p>
          <form onSubmit={handleSubmit} >
            <div className="m-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email ID <span className='text-danger'>*</span></label>
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
              <label htmlFor="otpInput" className="form-label">OTP <span className='text-danger'>*</span></label>
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
                <label htmlFor="captchaInput" className="form-label">Captcha Code <span className='text-danger'>*</span></label>
                <input
                  placeholder="Enter Captcha"
                  type="text"
                  className="form-control"
                  id="captchaInput"
                  value={inputCaptcha}
                  onChange={(e) => setInputCaptcha(e.target.value)}
                />
              </div>
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
            <div className='m-3 d-flex justify-content-between align-items-center'>
              <Link to="/">Back To Login</Link>
              <button type="submit" className="btn btn-primary card-button" disabled={isButtonDisabled}>Submit</button>
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

export default ActivateAccount;
