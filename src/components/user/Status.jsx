import React from "react";
import { FaFile } from "react-icons/fa";
import './../../customStyles/statusAnimation.css';

const Status = () => {
  const applicationDetails = [
    { label: "Advertisement No", value: "Variable" },
    { label: "Appl Id", value: "Variable" },
    { label: "Post", value: "Variable" },
    { label: "Department", value: "Variable" }
  ];

  const applicationSteps = [
    "Personal Details",
    "Academic Qualification",
    "Research Qualification",
    "JRF / NET / SLET / SET",
    "Details of Employment",
    "References",
    "Research Guidance",
    "Research Papers",
    "Research Publications",
    "Research Articles",
    "Research Projects",
    "Consultancy Projects",
    "Policy Documents",
    "Patents",
    "Papers Presentation",
    "Invited Lectures",
    "ICT",
    "Awards / Fellowships",
    "Extra Curricular Activities",
    "Uploads",
    "Preview & Submit"
  ];

  const renderApplicationDetails = () => (
    <div className="row mb-2">
      {applicationDetails.map((detail, index) => (
        <div className="col-12 col-md-6" key={index}>
          <p className="card-text">
            <b>{detail.label}:</b>
            <span>&nbsp;{detail.value}</span>
          </p>
        </div>
      ))}
    </div>
  );

  const renderApplicationSteps = () => (
    <tbody className="table-group-divider">
      {applicationSteps.map((step, index) => (
        <tr key={index}>
          <th scope="row" style={{ textAlign: "center" }}>{index + 1}</th>
          <td>{step}</td>
          <td>"Variable"</td>
        </tr>
      ))}
    </tbody>
  );

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
            {renderApplicationDetails()}
            <div className="table-responsive d-flex justify-content-center">
              <table className="table border rounded-3 table-striped table-bordered"
                style={{ overflow: "hidden", width: "90%", cursor: "zoom-in" }}>
                <thead>
                  <tr>
                    <th scope="col" className="bg-dark text-light col-1">Sr. No.</th>
                    <th scope="col" className="bg-dark text-light">Application Step</th>
                    <th scope="col" className="bg-dark text-light">Status</th>
                  </tr>
                </thead>
                {renderApplicationSteps()}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
