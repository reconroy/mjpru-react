import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPowerOff } from "react-icons/fa";

const AfterLoginTopBar = () => {
  return (
    <div className="">
      <div className="card mb-5">
        <div className="card-header text-light p-3 rounded-bottom-1 d-flex flex-column flex-md-row align-items-center justify-content-between" style={{backgroundColor:"#005174"}}>
          <h3 className="text-center text-md-start mb-3 mb-md-0">Welcome To MJRUP RECRUITMENT</h3>
          <div className="d-flex justify-content-center justify-content-md-start">
            <button className="btn btn-primary me-3 mb-2 mb-md-0 fw-bold">
              <TfiMenuAlt size={18} className="me-2" />
              My Applications
            </button>
            <button className="btn btn-danger rounded fw-bold">
              <FaPowerOff size={18} className="me-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginTopBar;
