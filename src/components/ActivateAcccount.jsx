import React from 'react'
import { FaLock } from "react-icons/fa";
import Captcha1 from './../assets/captcha/captcha_1.png';
import { Link } from 'react-router-dom';

const ActivateAcccount = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className='col-12 col-md-6 col-lg-4 border rounded-2 card '>
                <div className="card-header bg-primary text-light ">
                    <FaLock size={25} style={{ marginRight: '8px' }} />
                    Account  Verification
                </div>
                <p className='text-center text-danger mt-2'>Activation link will be send on your Email Id.</p>
                <form>
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
        </div>
  )
}

export default ActivateAcccount
