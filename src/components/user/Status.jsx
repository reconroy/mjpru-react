import React from "react";
import { FaFile } from "react-icons/fa";

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
            <div className="table-responsive">
              <table className="table border rounded-3 table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className="bg-dark text-light">Sr. No.</th>
                    <th scope="col" className="bg-dark text-light">Application Step</th>
                    <th scope="col" className="bg-dark text-light">Status</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>Personal Details</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Academic Qualification</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Research Qualification</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>JRF / NET / SLET / SET</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Details of Employment</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>References</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Research Guidance</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Research Papers</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Research Publications</td>
                    <td>"Variable"</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
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
