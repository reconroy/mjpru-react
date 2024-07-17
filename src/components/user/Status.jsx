import React from "react";
import { FaFile } from "react-icons/fa";
import './../../customStyles/statusAnimation.css';

const Status = () => {
  return (
    <div className="container mt-3">
      <div className="rounded-3" style={{ border: "2px solid #005174" }}>
        <div className="card">
          <div
            className="card-header text-light d-flex align-items-center fs-4"
            style={{ backgroundColor: "#005174" }}
          >
            <FaFile className="me-2" />
            <span>Application Status</span>
          </div>
          <div className="card-body">
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <p className="card-text">
                  <b>Advertisement No:</b>
                  <span>&nbsp;"Variable"</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="card-text">
                  <b>Appl Id:</b>
                  <span>&nbsp;"Variable"</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="card-text">
                  <b>Post:</b>
                  <span>&nbsp;"Variable"</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="card-text">
                  <b>Department:</b>
                  <span>&nbsp;"Variable"</span>
                </p>
              </div>
            </div>
            <div className="table-responsive d-flex justify-content-center">
              <table className="table border rounded-3 table-striped table-bordered"
              style={{overflow:"hidden",width:"90%",cursor: "zoom-in"}}>
                <thead>
                  <tr>
                    <th scope="col" className="bg-dark text-light col-1">Sr. No.</th>
                    <th scope="col" className="bg-dark text-light">Application Step</th>
                    <th scope="col" className="bg-dark text-light">Status</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>1</th>
                    <td>Personal Details</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>2</th>
                    <td>Academic Qualification</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>3</th>
                    <td>Research Qualification</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>4</th>
                    <td>JRF / NET / SLET / SET</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>5</th>
                    <td>Details of Employment</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>6</th>
                    <td>References</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>7</th>
                    <td>Research Guidance</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>8</th>
                    <td>Research Papers</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>9</th>
                    <td>Research Publications</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{textAlign:"center"}}>10</th>
                    <td>Research Articles</td>
                    <td>"Variable"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
