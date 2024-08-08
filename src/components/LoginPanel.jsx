import React, { useState, useEffect } from 'react';
import { FaUserLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Homebar from './Homebar';
import { validateLoginForm } from './../customScripts/loginValidations.js'; // Adjust the import if necessary
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../customStyles/toastifyStyles.css'; // Ensure this file exists if used
import { generateCaptcha } from './../customScripts/captchaCodeGenerator.js'; // Adjust the import if necessary
import CaptchaBG from "./../assets/images/bg1.jpg";
import { LuRefreshCcw } from "react-icons/lu";


const LoginPanel = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        captcha: ''
    });
    const [generatedCaptcha, setGeneratedCaptcha] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setGeneratedCaptcha(generateCaptcha());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateLoginForm(formData, generatedCaptcha);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Object.values(validationErrors).forEach(error => toast.error(error)); // Show toast for validation errors
            return;
        }

        setErrors({}); // Clear previous errors if validation passes

        // Show processing toast
        const processingId = toast.loading('Processing...', {
            position: "top-right",
            autoClose: false,
            closeOnClick: false,
            draggable: false,
            theme: "colored"
        });

        try {
            const response = await axios.post('https://localhost:7142/api/Login', formData);
            toast.dismiss(processingId);

            if (response.status === 200) {
                toast.success('Login successful');
                console.log(response.data);
                localStorage.setItem('token',response.data.token)
                navigate('/user/applicationlist');
                //  Redirect on success
            }
        } catch (error) {
            toast.dismiss(processingId);

            if (error.response) {
                if (error.response.status === 401) {
                    toast.error('Invalid email or password');
                } else if (error.response.status === 404) {
                    toast.error('User not found');
                } else {
                    toast.error('An error occurred. Please try again.');
                }
            } else if (error.request) {
                toast.error('No response from server');
            } else {
                toast.error('An error occurred: ' + error.message);
            }
        }
    };

    const handleRefreshCaptcha = () => {
        setGeneratedCaptcha(generateCaptcha());
    };

    return (
        <>
            <Homebar />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
            <div className='container d-flex justify-content-center align-items-center mt-5 pb-5'>
                <div className='col-12 col-md-6 col-lg-4 border rounded-2 card'>
                    <div className="card-header text-light" style={{ backgroundColor: '#005174' }}>
                        <FaUserLock size={25} style={{ marginRight: '8px' }} />
                        User Login
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <label htmlFor="email" className="form-label">Email ID <span className='text-danger'>*</span></label>
                            <input
                                placeholder="Username"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="m-3 position-relative">
                            <label htmlFor="password" className="form-label">Password (Case Sensitive) <span className='text-danger'>*</span></label>
                            <div className="password-container">
                                <input
                                    placeholder="Password"
                                    type={passwordVisible ? 'text' : 'password'}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span
                                    className={`password-icon ${passwordVisible ? 'active' : ''}`}
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                                >
                                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <div className="m-3 d-flex justify-content-between align-items-end">
                            <div className="captcha-field">
                                <label htmlFor="captcha" className="form-label">Captcha Code <span className='text-danger'>*</span></label>
                                <input
                                    placeholder="Enter Captcha"
                                    type="text"
                                    className={`form-control ${errors.captcha ? 'is-invalid' : ''}`}
                                    id="captcha"
                                    name="captcha"
                                    value={formData.captcha}
                                    onChange={handleChange}
                                />
                                {errors.captcha && <div className="invalid-feedback">{errors.captcha}</div>}
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="captcha-code mx-2">
                                    <div style={{ border: '2px solid black', padding: '5px', fontSize: '20px', userSelect: "none", letterSpacing: "5px", backgroundImage: `url(${CaptchaBG})` }}
                                        className='text-dark poppins-bold rounded-3'>
                                        <span style={{ color: "rgba(0,0,0,.7)" }}>
                                            {generatedCaptcha}
                                        </span>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary btn-sm" onClick={handleRefreshCaptcha}><LuRefreshCcw size="25"/></button>
                            </div>
                        </div>
                        <div className='m-3 d-flex justify-content-between align-items-center'>
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <Link to="/">Back To Home</Link>
                            <button type="submit" className="btn btn-primary card-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="pb-5"></div>
        </>
    );
};

export default LoginPanel;
