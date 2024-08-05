import React, { useState, useEffect } from 'react';
import Homebar from './Homebar';
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { generateCaptcha } from './../customScripts/captchaCodeGenerator.js'; // Adjust the import if necessary
import CaptchaBG from "./../assets/images/bg1.jpg"; // Adjust the import if necessary
import { LuRefreshCcw } from "react-icons/lu";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        captcha: ''
    });
    const [generatedCaptcha, setGeneratedCaptcha] = useState('');
    const [passwordVisible, setPasswordVisible] = useState({
        oldPassword: false,
        newPassword: false
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
    };

    const handleRefreshCaptcha = () => {
        setGeneratedCaptcha(generateCaptcha());
    };

    return (
        <>
            <Homebar />
            <div className='container d-flex justify-content-center align-items-center mt-5 pb-5 '>
                <div className='col-12 col-md-8 col-lg-6 border rounded-2 card'>
                    <div className="card-header text-light" style={{ backgroundColor: '#005174' }}>
                        <RiLockPasswordFill size={25} style={{ marginRight: '8px' }} />
                        Change Password
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="m-3">
                            <label htmlFor="email" className="form-label">Email ID <span className='text-danger'>*</span></label>
                            <input
                                placeholder="Enter your email"
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="m-3 position-relative">
                            <label htmlFor="oldPassword" className="form-label">Old Password <span className='text-danger'>*</span></label>
                            <div className="position-relative">
                                <input
                                    placeholder="Enter old password"
                                    type={passwordVisible.oldPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="oldPassword"
                                    name="oldPassword"
                                    value={formData.oldPassword}
                                    onChange={handleChange}
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer"
                                    onClick={() => setPasswordVisible(prevState => ({
                                        ...prevState,
                                        oldPassword: !prevState.oldPassword
                                    }))}
                                    aria-label={passwordVisible.oldPassword ? 'Hide old password' : 'Show old password'}
                                >
                                    {passwordVisible.oldPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                </span>
                            </div>
                        </div>
                        <div className="m-3 position-relative">
                            <label htmlFor="newPassword" className="form-label">New Password <span className='text-danger'>*</span></label>
                            <div className="position-relative">
                                <input
                                    placeholder="Enter new password"
                                    type={passwordVisible.newPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer"
                                    onClick={() => setPasswordVisible(prevState => ({
                                        ...prevState,
                                        newPassword: !prevState.newPassword
                                    }))}
                                    aria-label={passwordVisible.newPassword ? 'Hide new password' : 'Show new password'}
                                >
                                    {passwordVisible.newPassword ? <IoMdEye /> : <IoMdEyeOff />}
                                </span>
                            </div>
                        </div>
                        <div className="m-3 d-flex justify-content-between align-items-end">
                            <div className="captcha-field">
                                <label htmlFor="captcha" className="form-label">Captcha Code <span className='text-danger'>*</span></label>
                                <input
                                    placeholder="Enter Captcha"
                                    type="text"
                                    className="form-control"
                                    id="captcha"
                                    name="captcha"
                                    value={formData.captcha}
                                    onChange={handleChange}
                                />
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
                                <button type="button" className="btn btn-secondary btn-sm border-dark" onClick={handleRefreshCaptcha}><LuRefreshCcw size="25"/></button>
                            </div>
                        </div>
                        <div className='m-3'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="pb-5"></div>
        </>
    );
};

export default ChangePassword;
