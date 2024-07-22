import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import countryCodes from "./../countryCodes.json";
import Captcha1 from "./../assets/captcha/captcha_1.png";
import { useNavigate } from "react-router-dom";
import Homebar from "./Homebar";
import { Modal, Button } from "react-bootstrap";
import { submitFormData } from "./../dataPOST/RegistrationForm";
import { validateFormData } from "./../dataPOST/RegistrationForm";
import "./../customStyles/buttonAnimation.css";

const RegistrationForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setShowModal(true);
      return;
    }

    const formData = {
        email: e.target.email.value,
        confirmEmail: e.target.confirmEmail.value,
        firstName: e.target.firstName.value,
        middleName: e.target.middleName.value,
        lastName: e.target.lastName.value,
        fatherName: e.target.fatherName.value,
        motherName: e.target.motherName.value,
        mobile: e.target.mobile.value,
        countryCode: e.target.countryCode.value,
        altMobile: e.target.altMobile.value,
        altCountryCode: e.target.altCountryCode.value,
        captcha: e.target.captcha.value,
    };

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await submitFormData(formData);
        console.log("Form submitted successfully:", response);
        navigate("/registration-complete");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      <Homebar />
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
                        className={`form-control border-dark ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
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
                        className={`form-control border-dark ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="confirmEmail"
                        name="confirmEmail"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  {/* Names */}
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="firstName" className="form-label fw-bold">
                        First Name
                      </label>
                      <input
                        placeholder="Enter First Name"
                        type="text"
                        className={`form-control border-dark ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        id="firstName"
                        name="firstName"
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
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
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="lastName" className="form-label fw-bold">
                        Last Name
                      </label>
                      <input
                        placeholder="Enter Last Name"
                        type="text"
                        className={`form-control border-dark ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        id="lastName"
                        name="lastName"
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Parents' Names and Mobile Numbers */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="fatherName"
                        className="form-label fw-bold"
                      >
                        Father's Name
                      </label>
                      <input
                        placeholder="Enter Father's Name"
                        type="text"
                        className="form-control border-dark"
                        id="fatherName"
                        name="fatherName"
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="motherName"
                        className="form-label fw-bold"
                      >
                        Mother's Name
                      </label>
                      <input
                        placeholder="Enter Mother's Name"
                        type="text"
                        className="form-control border-dark"
                        id="motherName"
                        name="motherName"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="mobile" className="form-label fw-bold">
                        Mobile No. with Country Code
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select border-dark"
                          name="countryCode"
                        >
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
                          className={`form-control border-dark ${
                            errors.mobile ? "is-invalid" : ""
                          }`}
                          id="mobile"
                          name="mobile"
                        />
                        {errors.mobile && (
                          <div className="invalid-feedback">
                            {errors.mobile}
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
                        >
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
                          id="altMobile"
                          name="altMobile"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="mb-3" style={{ width: "100%" }}>
                    <label htmlFor="captcha" className="form-label fw-bold">
                      Enter Captcha Code
                    </label>
                    <input
                      placeholder="Enter Captcha"
                      type="text"
                      className={`form-control border-dark ${
                        errors.captcha ? "is-invalid" : ""
                      }`}
                      id="captcha"
                      name="captcha"
                    />
                    {errors.captcha && (
                      <div className="invalid-feedback">{errors.captcha}</div>
                    )}
                    <img src={Captcha1} alt="Captcha" className="mt-2" />
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

                  <button
                    type="submit"
                    className="btn btn-primary m-1 card-button"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger m-1 card-button"
                  >
                    Clear Form
                  </button>
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
    </>
  );
};

export default RegistrationForm;
