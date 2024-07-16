import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./../../customStyles/buttonAnimation.css";

const AfterLoginTopBar = () => {
  return (
    <div className="">
      <div className="card mb-5">
        <div className="card-header text-light p-3 rounded-bottom-1 d-flex flex-column flex-md-row align-items-center justify-content-between" style={{backgroundColor:"#005174"}}>
          <h3 className="text-center text-md-start mb-3 mb-md-0">Welcome To MJRUP RECRUITMENT</h3>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Link to={"/"} className="btn btn-primary mb-2 mb-md-0 me-0 me-md-3 fw-bold card-button">
              <TfiMenuAlt size={18} className="me-2 " />
              My Applications
            </Link>
            <Link to={"/"} className="btn btn-danger rounded fw-bold card-button">
              <FaPowerOff size={18} className="me-2 " />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginTopBar;
