import React, { useState, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Homebar from "./Homebar";
import "./../customStyles/buttonAnimation.css";

const Home = () => {
  const [latestUpdates, setLatestUpdates] = useState("Loading latest updates...");

  const fetchData = async () => {
    try {
      const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1');
      const data = await response.json();
      if (data && data.length > 0) {
        setLatestUpdates(data[0]);
      }
    } catch (error) {
      console.error('Error fetching latest updates:', error);
      setLatestUpdates("Failed to fetch latest updates.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Homebar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-3">
            <div className="card mt-2" style={{ borderColor: "#005174", borderWidth: "2px", borderStyle: "solid" }}>
              <h5 className="card-header bg-primary text-white d-flex align-items-center">
                <IoMdNotifications className="me-2" /> Notice Board
              </h5>
              <div className="card-body">
                <p className="card-text fw-bold text-dark">{latestUpdates}</p>
                <p className="card-text fw-bold text-dark">{latestUpdates}</p>
                <button className="btn btn-primary card-button" onClick={fetchData}>
                  Refresh
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
      <div className="card mt-2" style={{ borderColor: "#005174", borderWidth: "2px", borderStyle: "solid", height: '300px' }}>
        <h5 className="card-header bg-primary text-white d-flex align-items-center">
          <FaUsers className="me-2" /> Applicant's Corner
        </h5>
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="d-grid gap-2 w-75">
            <Link to="/login" type="button" className="btn btn-primary mb-2 card-button">
              Existing User Login
            </Link>
            <Link to="/new-user" type="button" className="btn btn-success mb-2 card-button">
              New User Registration
            </Link>
            <Link to="/activate-account" type="button" className="btn btn-danger mb-2 card-button">
              Activate Your Account
            </Link>
            <Link to="/forgot-password" type="button" className="btn btn-danger mb-2 card-button">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Home;
