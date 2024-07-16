import { React, useState } from 'react';
import { FaUserLock } from "react-icons/fa6";
import Captcha1 from './../assets/captcha/captcha_1.png';
import { Link } from 'react-router-dom';
import Homebar from './Homebar';

const LoginPanel = () => {
    // const 
    return (
        <>
        <Homebar/>
            <div className='container d-flex justify-content-center align-items-center mt-5'>
                <div className='col-12 col-md-6 col-lg-4 border rounded-2 card '>
                    <div className="card-header bg-primary text-light ">
                        <FaUserLock size={25} style={{ marginRight: '8px' }} />
                        User Login
                    </div>
                    <form>

                        <div className="m-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
                            <input placeholder="Username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="m-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password (Case Sensitive)</label>
                            <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
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
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <Link to="/">Back To Home</Link>
                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                            <Link to={"/UserLayout"} type="submit" className="btn btn-primary">Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPanel;
