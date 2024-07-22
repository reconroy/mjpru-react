import React from 'react';
import headerImg from './../assets/images/header.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./../customStyles/buttonAnimation.css";

const Topbar = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-2">
            <img src={headerImg} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-12 col-md-6 p-2 text-center text-md-end ">
            <div className="container p-1 rounded-start-5  rounded-end-4" style={{ backgroundColor: "" }}>
              <p className="fw-bold text-primary fs-5 text-" style={{ paddingRight: "14px" }}>Helpline: <span className="user-select-all">91+ 7897911611</span></p>
              <p className="fw-bold text-primary fs-5 text-" style={{ paddingRight: "14px" }}>Working Days: <span className="user-select-all">11 AM to 04 PM</span></p>
              <p className="fw-bold text-primary fs-5 text-" style={{ paddingRight: "14px" }}>Email ID: <span className="user-select-all">mjprufr21@gmail.com</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </>
  );
};

export default Topbar;
