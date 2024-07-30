import React, { useState } from 'react';
import Captcha1 from './../assets/captcha/captcha_1.png';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Homebar from './Homebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validateFields from "./../customScripts/forgetPasswordValidations"; // validations here
import "./../customStyles/buttonAnimation.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState('123'); // Default captcha value

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const validationErrors = validateFields(email, captcha);
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }

    // Show processing toast
    const processingToastId = toast.info('Processing...', {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });

    try {
      const response = await axios.put('https://localhost:7142/api/Login/Forgotpassword', { email, password: "" });
      
      // Log the response data
      console.log('API Response:', response.data);

      // Remove processing toast before showing result
      toast.dismiss(processingToastId);

      if (response.data.result=== 'email sent') {
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
        <div className='col-12 col-md-6 col-lg-4 border rounded-2 card '>
          <div className="card-header text-light " style={{ backgroundColor: '#005174' }}>
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
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </div>
              <div className="captcha-code">
                <img src={Captcha1} alt="Captcha Code" style={{ border: '2px solid black' }} />
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
