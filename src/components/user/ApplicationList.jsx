import React from "react";
import { FaFile } from "react-icons/fa";
// import { Link } from "react-router-dom";

const ApplicationList = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
                    <div className="left-box d-flex align-items-center">
                        <FaFile size={24} style={{ marginRight: "8px" }} />
                        Your Applications
                    </div>
                    <div className="right-box">
                        <button
                            type="button"
                            className="btn btn-light text-decoration-none">
                            + New Application
                        </button>
                        {/* <Link to="/ApplicationList"
                            type="button"
                            className="btn btn-light text-decoration-none">
                            + New Application
                        </Link> */}
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="bg-info text-dark">
                                <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Application Id</th>
                                    <th scope="col">Advt. No. / Post</th>
                                    <th scope="col">Department / Subject</th>
                                    <th scope="col">Applied</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Print / Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example row, replace with dynamic content */}
                                <tr>
                                    <td>1</td>
                                    <td>APP-001</td>
                                    <td>Advertisement 123</td>
                                    <td>Department XYZ</td>
                                    <td>2024-07-15</td>
                                    <td>Incomplete</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2">
                                            Print
                                        </button>
                                        <button className="btn btn-sm btn-secondary">Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>APP-002</td>
                                    <td>Advertisement 456</td>
                                    <td>Department ABC</td>
                                    <td>2024-08-12</td>
                                    <td>Completed </td>
                                    <td>
                                        <a href="/">Click here to Fill</a>
                                        {/* <button className="btn btn-sm btn-primary me-2">Print</button>
                    <button className="btn btn-sm btn-secondary">Update</button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationList;
