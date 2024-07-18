import React from "react";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import Homebar from './../Homebar';
import "./../../customStyles/buttonAnimation.css"

const ApplicationList = () => {
    return (
        <>
        <Homebar/>
        <div className="container mt-3">
            <div className="card">
                <div className="card-header  text-light d-flex justify-content-between align-items-center" style={{backgroundColor:"#005174"}}>
                    <div className="left-box d-flex align-items-center">
                        <FaFile size={24} style={{ marginRight: "8px" }} />
                        Your Applications
                    </div>
                    <div className="right-box">
                        <button
                            type="button"
                            className="btn btn-light text-decoration-none card-button">
                            + New Application
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3" style={{overflow:"hidden",cursor: "zoom-in"}}>
                            <thead className="bg-info text-dark table-dark">
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
                            <tbody className="table-group-divider">
                                <tr>
                                    <td className="sn">1</td>
                                    <td>APP-001</td>
                                    <td>Advertisement 123</td>
                                    <td>Department XYZ</td>
                                    <td>2024-07-15</td>
                                    <td className="text-success">Completed</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2 card-button">
                                            Print
                                        </button>
                                        <button className="btn btn-sm btn-secondary card-button">Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sn">2</td>
                                    <td>APP-002</td>
                                    <td>Advertisement 456</td>
                                    <td>Department ABC</td>
                                    <td>2024-08-12</td>
                                    <td className="text-danger">Incomplete </td>
                                    <td>
                                        <Link to="/user/Status">Click here to Fill</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ApplicationList;
