import React, { useState } from "react";
import { FaInfoCircle, FaRegCircle } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Homebar from "./Homebar";
import "./../customStyles/buttonAnimation.css";
const NewUser = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (isChecked) {
      navigate("/registration-page");
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <><Homebar/>
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-primary text-light d-flex align-items-center">
          <FaInfoCircle size={25} style={{ marginRight: "8px" }} />
          Instructions to the Applicants
        </div>
        <div className="card-body">
          <h3 className="card-title text-center text-primary">
            INSTRUCTION FOR FILLING ONLINE APPLICATION
          </h3>
          <div className="card-text">
            <p className="lh-base">
              While form filling process the applicant can make the entries and
              save the information at each step.
            </p>
            <p className="lh-base">
              If the applicant is unable to fill the form in one sitting or
              somehow the process is interrupted there is no need to register
              again. They can login using the credentials sent on their mobile
              or email and continue the remaining process.
            </p>
            <p className="lh-base">
              Applicants are advised to check all the data they have filled
              before submitting the application. If there are some mistakes they
              can update it or start the entire process again. Once they have
              submitted the application, the data filled in the registration
              page cannot be edited under any circumstances.
            </p>
            <p className="lh-base text-danger">
              It is the responsibility of the applicant to read the
              advertisement carefully and check his/ her eligibility prior to
              filling the application form. We are not verifying the eligibility
              at the time of filling application. The eligibility will be
              verified by the University.
            </p>
            <div className="lh-base my-4">
              <div className="d-flex align-items-center">
                <ImArrowRight size={20} style={{ marginRight: "8px" }} />
                <span className="fs-3 text-secondary-emphasis">
                  <b>Registration / Create an Account</b>
                </span>
              </div>
              <p className="lh-base ms-4 mt-2">
                Applicants have to fill some relevant details (Email,
                Applicant's Name, Father's Name, Mother's Name, Mobile No.) in
                the form. These fields cannot be edited later.
              </p>
              <p className="lh-base ms-4 mt-2 text-danger">
                An email will be sent to your email to activate your account
                registration. By clicking on the link you can create a password
                for your account. After successful activation, you can log in to
                fill the application form. Using one account you can apply for
                multiple applications. There is no need to create multiple
                accounts for each application. However, the fee has to be paid
                separately for each application/post you are applying for.
              </p>
            </div>
            <div className="lh-base my-4">
              <div className="d-flex align-items-center">
                <ImArrowRight size={20} style={{ marginRight: "8px" }} />
                <span className="fs-3 text-secondary-emphasis">
                  <b>Application Fee</b>
                </span>
              </div>
              <p className="lh-base ms-4 mt-2">
                All the candidates except from SC/ST category are required to
                deposit an application fee of{" "}
                <b>Rs. 1500/-(One Thousand Five Hundred Rupees Only)</b> for
                each application whereas the candidates belonging to SC/ST
                category are required to deposit an application fee of{" "}
                <b>Rs. 1000/-(One Thousand Rupees Only)</b> for each
                application. All payments are to be made through online mode
                (CREDIT/DEBIT Card or Net Banking) only.
              </p>
            </div>
            <h3 className="card-title text-primary">
              STEPS OF ONLINE APPLICATION
            </h3>
            {[
              "Personal Details",
              "Educational Details",
              "Research Degree",
              "JRF-NET/NET/SLET/SET",
              "Employment Details",
              "References",
              "Research Guidance",
              "Research Papers",
              "Research Publication",
              "Research Articles / Chapters",
              "Research Projects",
              "Consultancy Projects",
              "Policy Documents",
              "Patents",
              "Paper Presentation",
              "Invited Lectures / Resource Person",
              "ICT Mediated Teaching Learning Pedagogy",
              "Awards / Fellowships",
              "Extra Curricular Activities",
              "Uploads",
              "Preview & Submit",
            ].map((step, index) => (
              <div className="my-4" key={index}>
                <div className="d-flex align-items-center">
                  <ImArrowRight size={20} style={{ marginRight: "8px" }} />
                  <span className="fs-4 text-secondary-emphasis">
                    <b>
                      Step {index + 1} : {step}
                    </b>
                  </span>
                </div>
                <p className="lh-base ms-4 mt-2">
                  <FaRegCircle
                    size={20}
                    style={{ marginRight: "8px", marginLeft: "18px" }}
                  />
                  {step === "Personal Details" &&
                    "Applicants have to enter their personal details, address information etc."}
                  {step === "Educational Details" &&
                    "Applicants will provide his/her High School, Intermediate, Graduation & Post Graduation Examination details."}
                  {step === "Research Degree" &&
                    "Applicants will provide his/her research degree details (e.g. Ph.D./D.Phil. / M.Phil. / D.Sc. / D.Litt.)"}
                  {step === "JRF-NET/NET/SLET/SET" &&
                    "Applicant will provide details of JRF-NET/NET/SLET/SET if applicable."}
                  {step === "Employment Details" &&
                    "Applicant will provide his/her Past and Present employment/appointment held at this step."}
                  {step === "References" &&
                    "Applicant will provide reference details at this step."}
                  {step === "Research Guidance" &&
                    "Applicant will provide details of his/her research guidance as Supervisor / Co-Supervisor."}
                  {step === "Research Papers" &&
                    "Applicant will provide details of Research papers published in Journals."}
                  {step === "Research Publication" &&
                    "Applicant will provide details of his/her Published Books."}
                  {step === "Research Articles / Chapters" &&
                    "Applicant will provide details of Articles / Chapters published in Books."}
                  {step === "Research Projects" &&
                    "Applicant will provide details of his/her Projects."}
                  {step === "Consultancy Projects" &&
                    "Applicant will provide details of his/her Consultancy Projects."}
                  {step === "Policy Documents" &&
                    "Applicant will provide details of his/her Policy documents."}
                  {step === "Patents" &&
                    "Applicant will provide details of his/her patents."}
                  {step === "Paper Presentation" &&
                    "Applicant will provide details of papers presented in Conferences / Seminars."}
                  {step === "Invited Lectures / Resource Person" &&
                    "Applicant will provide details of Invited Lectures in Conferences / Seminars."}
                  {step === "ICT Mediated Teaching Learning Pedagogy" &&
                    "Applicant will provide details of his/her ICT details in this step."}
                  {step === "Awards / Fellowships" &&
                    "Applicant will provide details of his/her Awards / Fellowships."}
                  {step === "Extra Curricular Activities" &&
                    "Applicant will provide details of his/her Extra Curricular Activities (If any)."}
                  {step === "Uploads" && (
                    <>
                      Scanned Photograph (Width: 140px, Height: 160px) in
                      JPEG/JPG format (Maximum upload size is 10 to 100 Kb only)
                      <br />
                      <FaRegCircle
                        size={20}
                        style={{ marginRight: "8px", marginLeft: "18px" }}
                      />
                      Scanned Signature (Width: 180px, Height: 70px) in JPEG/JPG
                      format (Maximum upload size is 5 to 50 Kb only)
                    </>
                  )}
                  {step === "Preview & Submit" &&
                    "Application Preview & Final Submission. After final submission you cannot edit any details in your application."}
                </p>
              </div>
            ))}
          </div>
          <div className="declaration-box">
            <h2 className="text-danger text-center">
              <b>DECLARATION STATEMENT</b>
            </h2>
            <p className="text-danger text-justify" style={{textAlign: "justify"}}>
              I have read and understood all the eligibility conditions and
              instructions regarding the Recruitment Process for the Faculty
              Recruitment of the Mahatma Jyotiba Phule Rohilkhand University,
              Bareilly. I understand that it is my responsibility to check the
              eligibility criteria and other conditions. I am also aware that
              the University is not verifying the eligibility at the time of
              submission of online application and will be verified by the
              University at the time of screening. I understand that if any
              information filled by me is found to be false, my application
              shall be rejected by University at any stage.
            </p>

            <label
              className="form-check-label text-primary"
              htmlFor="agreeCheckbox"
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeCheckbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
              I Agree to the Declaration Statement
            </label>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary card-button" onClick={handleProceed}>
              Proceed to Registration
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Agreement */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agreement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please agree to the declaration statement before proceeding.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} className="btn-danger card-button">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default NewUser;
