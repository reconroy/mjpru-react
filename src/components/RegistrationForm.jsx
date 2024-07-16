import React from "react";
import { HiUserAdd } from "react-icons/hi";
import countryCodes from "./../countryCodes.json";
import Captcha1 from "./../assets/captcha/captcha_1.png";
import { Link } from "react-router-dom";
import Homebar from "./Homebar";

const RegistrationForm = () => {
    console.log(countryCodes);

    return (
        <>
        <Homebar/>
        <div className="container mt-5 ">
            <div className="card border border-black">
                <div className="card-header bg-primary text-light fs-5 d-flex align-items-center">
                    <HiUserAdd color="" size="30px" className="me-2" />
                    New user Registration
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary mb-4">
                        All communication related to your applications will be sent to this
                        email id. Account Activation link will be sent to this email Id.
                    </h5>
                    <form>
                        {/* Email IDs */}
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label fw-bold"
                                >
                                    Email ID
                                </label>
                                <input
                                    placeholder="Enter Email ID"
                                    type="email"
                                    className="form-control border-dark"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label fw-bold"
                                >
                                    Confirm Email ID
                                </label>
                                <input
                                    placeholder="Enter Email ID"
                                    type="email"
                                    className="form-control border-dark"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                        </div>

                        {/* Names */}
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    First Name
                                </label>
                                <input
                                    placeholder="Enter First Name"
                                    type="text"
                                    className="form-control border-dark"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="col-md-4">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Middle Name
                                </label>
                                <input
                                    placeholder="Enter Middle Name"
                                    type="text"
                                    className="form-control border-dark"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="col-md-4">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Last Name
                                </label>
                                <input
                                    placeholder="Enter Last Name"
                                    type="text"
                                    className="form-control border-dark"
                                    id="exampleInputPassword1"
                                />
                            </div>
                        </div>

                        {/* Parents' Names and Mobile Numbers */}
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Father's Name
                                </label>
                                <input
                                    placeholder="Enter Father's Name"
                                    type="text"
                                    className="form-control border-dark"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Mother's Name
                                </label>
                                <input
                                    placeholder="Enter Mother's Name"
                                    type="text"
                                    className="form-control border-dark"
                                    id="exampleInputPassword1"
                                />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Mobile No. with Country Code
                                </label>
                                {/* Country Code Selection */}
                                <div className="input-group">
                                    <select className="form-select border-dark">
                                        <option defaultValue>Select Country Code</option>
                                        {countryCodes.map((country, index) => (
                                            <option key={index} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        placeholder="Enter Mobile Number"
                                        type="phone"
                                        className="form-control border-dark"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-bold"
                                >
                                    Alternate Mobile No. with Country Code
                                </label>
                                {/* Country Code Selection */}
                                <div className="input-group">
                                    <select className="form-select border-dark">
                                        <option defaultValue>Select Country Code</option>
                                        {countryCodes.map((country, index) => (
                                            <option key={index} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        placeholder="Enter Alternate Mobile Number"
                                        type="text"
                                        className="form-control border-dark"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Captcha */}
                        <div className="mb-3" style={{ width: "100%" }}>
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label fw-bold"
                            >
                                Enter Captcha Code
                            </label>
                            <input
                                placeholder="Enter Captcha"
                                type="text"
                                className="form-control border-dark"
                                id="exampleInputPassword1"
                            />
                            <img src={Captcha1} alt="Captcha" className="mt-2" />
                        </div>

                        {/* Checkbox and Buttons */}
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input border border-2"
                                id="exampleCheck1"
                                style={{ borderColor: "black" }} />
                            <label className="form-check-label text-danger" htmlFor="exampleCheck1">
                                I've checked all details filled in this page are correct. These
                                details will not be editable during filling up application. I
                                understand and agree with this.
                            </label>
                        </div>

                        {/* <button type="submit" className="btn btn-primary m-1">Submit</button> */}
                        <Link
                            to={"/registration-complete"}
                            type="submit"
                            className="btn btn-primary m-1"
                        >
                            Submit
                        </Link>
                        <button type="reset" className="btn btn-danger m-1">
                            Clear Form
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default RegistrationForm;
