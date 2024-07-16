import React from 'react';
import headerImg from './../assets/images/header.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Topbar = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-2">
            <img src={headerImg} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-12 col-md-6 p-2 text-center text-md-end">
            <p className="fw-bold text-primary fs-5">Helpline: <span className="user-select-all">91+ 7897911611</span></p>
            <p className="fw-bold text-primary fs-5">Working Days: <span className="user-select-all">11 AM to 04 PM</span></p>
            <p className="fw-bold text-primary fs-5">Email ID: <span className="user-select-all">mjprufr21@gmail.com</span></p>
          </div>
        </div>
      </div>
      <div className="">
        {/* <div className="border-top border-4 mt-3" style={{ border: '3px solid #005174' }}></div> */}
      </div>
    </>
  );
};

export default Topbar;
