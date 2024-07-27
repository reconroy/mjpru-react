import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import CountryCodes from "./../countryCodes.json";
import Captcha1 from "./../assets/captcha/captcha_1.png";
import { useNavigate } from "react-router-dom";
import Homebar from "./Homebar";
import { Modal, Button } from "react-bootstrap";
import { validateFormData } from "./../dataPOST/RegistrationForm";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../customStyles/toastifyStyles.css';
import axios from "axios";

const RegistrationForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setShowModal(true);
      return;
    }

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Data Invalid", {
        className: 'custom-toast-error'
      });
    } else {
      setErrors({});
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos/1", formData);
        console.log("Form submitted successfully:", response);
        if (response.data) {
          toast.success("Registration Successful", {
            className: 'custom-toast-error'
            });
          navigate("/registration-complete");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting data", {
          className: 'custom-toast-error'
        });
      }
    }
  };


  const handleReset = () => {
    setFormData({});
    setIsChecked(false);
    setErrors({});
  };

  return (
    <>
      <Homebar />
      <ToastContainer
        position="top-right"
        autoClose={15000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="mb-5">
        <div className="mb-5">
          <div className="container mt-4">
            <div className="card border border-black">
              <div
                className="card-header text-light fs-5 d-flex align-items-center"
                style={{ backgroundColor: "#005174" }}
              >
                <HiUserAdd color="" size="30px" className="me-2" />
                New user Registration
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger mb-3 text-center">
                  All communication related to your applications will be sent to
                  this email id. Account Activation link will be sent to this
                  email Id.
                </h5>
                <form onSubmit={handleSubmit}>
                  {/* Email IDs */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email ID
                      </label>
                      <input
                        placeholder="Enter Email ID"
                        type="email"
                        className={`form-control border-dark ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        value={formData.email || ""}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="confirmEmail"
                        className="form-label fw-bold"
                      >
                        Confirm Email ID
                      </label>
                      <input
                        placeholder="Enter Email ID"
                        type="email"
                        className={`form-control border-dark ${errors.confirmEmail ? "is-invalid" : ""}`}
                        id="confirmEmail"
                        name="confirmEmail"
                        aria-describedby="emailHelp"
                        value={formData.confirmEmail || ""}
                        onChange={handleChange}
                        onPaste={(e) => e.preventDefault()}
                        autoComplete="off"
                      />
                      {errors.confirmEmail && (
                        <div className="invalid-feedback">
                          {errors.confirmEmail}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Names */}
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="FirstName" className="form-label fw-bold">
                        First Name
                      </label>
                      <input
                        placeholder="Enter First Name"
                        type="text"
                        className={`form-control border-dark ${errors.FirstName ? "is-invalid" : ""}`}
                        id="FirstName"
                        name="FirstName"
                        value={formData.FirstName || ""}
                        onChange={handleChange}
                      />
                      {errors.FirstName && (
                        <div className="invalid-feedback">
                          {errors.FirstName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="middleName"
                        className="form-label fw-bold"
                      >
                        Middle Name
                      </label>
                      <input
                        placeholder="Enter Middle Name"
                        type="text"
                        className="form-control border-dark"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="lastName" className="form-label fw-bold">
                        Last Name
                      </label>
                      <input
                        placeholder="Enter Last Name"
                        type="text"
                        className="form-control border-dark"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Parents' Names */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="FatherName"
                        className="form-label fw-bold"
                      >
                        Father's Name
                      </label>
                      <input
                        placeholder="Enter Father's Name"
                        type="text"
                        className={`form-control border-dark ${errors.FatherName ? "is-invalid" : ""}`}
                        id="FatherName"
                        name="FatherName"
                        value={formData.FatherName || ""}
                        onChange={handleChange}
                      />
                      {errors.FatherName && (
                        <div className="invalid-feedback">
                          {errors.FatherName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="MotherName"
                        className="form-label fw-bold"
                      >
                        Mother's Name
                      </label>
                      <input
                        placeholder="Enter Mother's Name"
                        type="text"
                        className={`form-control border-dark ${errors.MotherName ? "is-invalid" : ""}`}
                        id="MotherName"
                        name="MotherName"
                        value={formData.MotherName || ""}
                        onChange={handleChange}
                      />
                      {errors.MotherName && (
                        <div className="invalid-feedback">
                          {errors.MotherName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Numbers */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="Mobile" className="form-label fw-bold">
                        Mobile No. with Country Code
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select border-dark"
                          name="CountryCode"
                          value={formData.CountryCode || ""}
                          onChange={handleChange}
                        >
                          <option defaultValue>Code</option>
                          {CountryCodes.map((Country, index) => (
                            <option key={index} value={Country.value}>
                              {Country.label}
                            </option>
                          ))}
                        </select>
                        <input
                          placeholder="Enter Mobile Number"
                          style={{ width: "60%" }}
                          type="text"
                          className={`form-control border-dark ${errors.Mobile ? "is-invalid" : ""}`}
                          id="Mobile"
                          name="Mobile"
                          value={formData.Mobile || ""}
                          onChange={handleChange}
                        />
                        {errors.Mobile && (
                          <div className="invalid-feedback">
                            {errors.Mobile}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="altMobile" className="form-label fw-bold">
                        Alternate Mobile No. with Country Code
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select border-dark"
                          name="altCountryCode"
                          value={formData.altCountryCode || ""}
                          onChange={handleChange}
                        >
                          {CountryCodes.map((country, index) => (
                            <option key={index} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                        <input
                          style={{ width: "60%" }}
                          placeholder="Enter Alternate Mobile Number"
                          type="text"
                          className={`form-control border-dark ${errors.altMobile ? "is-invalid" : ""}`}
                          id="altMobile"
                          name="altMobile"
                          value={formData.altMobile || ""}
                          onChange={handleChange}
                        />
                        {errors.altMobile && (
                          <div className="invalid-feedback">
                            {errors.altMobile}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="mb-3 w-100">
                    <label htmlFor="captcha" className="form-label fw-bold">
                      Enter Captcha Code
                    </label>
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column">
                        <input
                          placeholder="Enter Captcha"
                          type="text"
                          className={`form-control border-dark ${errors.captcha ? "is-invalid" : ""}`}
                          id="captcha"
                          name="captcha"
                          style={{ width: "150px" }}
                          value={formData.captcha || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="ms-2">
                        <img
                          src={Captcha1}
                          alt="Captcha"
                          className="border border-3 border-dark rounded-2"
                          style={{ width: "150px", height: "40px" }}
                        />
                      </div>
                      {errors.captcha && (
                        <div className="invalid-feedback d-block ms-2 ">
                          {errors.captcha}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Checkbox and Buttons */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input border border-2"
                      id="exampleCheck1"
                      style={{ borderColor: "black" }}
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label
                      className="form-check-label text-danger"
                      htmlFor="exampleCheck1"
                    >
                      I've checked all details filled in this page are correct.
                      These details will not be editable during filling up
                      application. I understand and agree with this.
                    </label>
                  </div>
                  <div className="btn-section d-flex flex-column align-items-center">
                    <div className="d-flex">
                      <button type="submit" className="btn btn-primary m-1 card-button">
                        Submit
                      </button>
                      <button type="button" className="btn btn-danger m-1 card-button" onClick={handleReset}>
                        Clear Form
                      </button>
                    </div>
                    {/* {message.length > 0 && (
                      <div className="container mt-3">
                        <p className="alert alert-danger text-center w-100">{message}</p>
                      </div>
                    )} */}
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Checkbox Validation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Validation Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger">
            Please check the agreement checkbox before submitting the form.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setShowModal(false)}
            className="btn-danger card-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="pb-5"></div>
    </>
  );
};

export default RegistrationForm;
