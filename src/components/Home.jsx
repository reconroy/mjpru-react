import React, { useState, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  const [latestUpdates, setLatestUpdates] = useState("Loading latest updates...");

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-8 mb-3">
          <div className="card h-100 mt-2" style={{ borderColor: "#005174", borderWidth: "2px", borderStyle: "solid" }}>
            <h5 className="card-header bg-primary text-white d-flex align-items-center">
              <IoMdNotifications className="me-2" /> Notice Board
            </h5>
            <div className="card-body d-flex flex-column h-100">
              <p className="card-text flex-grow-1 fw-bold text-dark">{latestUpdates}</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="card h-100 mt-2" style={{ borderColor: "#005174", borderWidth: "2px", borderStyle: "solid" }}>
            <h5 className="card-header bg-primary text-white d-flex align-items-center">
              <FaUsers className="me-2" /> Applicant's Corner
            </h5>
            <div className="card-body d-flex flex-column h-100">
              <Link to="/login" type="button" className="btn btn-primary mb-2 mt-4">
                Existing User Login
              </Link>
              <Link to ="new-user" type="button" className="btn btn-success mb-2 mt-2">
                New User Registration
              </Link>
              <Link to ="activate-account" type="button" className="btn btn-danger mb-2 mt-2">
                Activate Your Account
              </Link>
              <Link to ="forgot-password" type="button" className="btn btn-danger mb-2 mt-2">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
