import React, { useState } from 'react';
import { Container, Row, Col, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import NumberIcons from '../NumberIcons';
import Status from './Status';
import PersonalDetails from './RegistrationData/PersonalDetails';
import AcademicQualifications from "./RegistrationData/AcademicQualifications";
import EmployementDetails from "./RegistrationData/EmployementDetails";
import JRFNetSletSet from './RegistrationData/JRF_NET_SLET_SET';
import ResearchQualifications from "./RegistrationData/ResearchQualifications";
import References from './RegistrationData/References';
import { IoBarChart } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../customStyles/sidebar.css";
import withSpinner from './../../withSpinner';

const Sidebar = () => {
  const StatusWithSpinner = withSpinner(Status);
  const PersonalDetailsWithSpinner = withSpinner(PersonalDetails);
  const AcademicQualificationsWithSpinner = withSpinner(AcademicQualifications);
  const ResearchQualificationsWithSpinner = withSpinner(ResearchQualifications);
  const EmployementDetailsWithSpinner = withSpinner(EmployementDetails);
  const ReferencesWithSpinner = withSpinner(References);
  const JRFNetSletSetWithSpinner = withSpinner(JRFNetSletSet);

  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStatus = (path) => (location.pathname === path ? 'active' : 'inactive');

  return (
    <Container fluid className="p-0">
      <Row className="flex-nowrap h-100">
        {/* Offcanvas menu button */}
        <Button
          variant=""
          className="d-md-none d-flex justify-content-center align-items-center border-light"
          onClick={handleShow}
          style={{ position: "fixed", zIndex: "1", width: "40px", height: "40px", left: "12px", top: "11px", borderRadius: "50%", backgroundColor: "#005174" }}
        >
          <HiMenuAlt1 size="35" color='white' />
        </Button>

        {/* Offcanvas menu */}
        <Offcanvas show={show} onHide={handleClose} className="d-md-none w-75 offcanvas-custom" style={{ backgroundColor: "#005174" }}>
          <Offcanvas.Header closeButton className="offcanvas-header-custom text-light">
            <Offcanvas.Title><span className='text-light'>Steps Menu</span></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {/* Nav links for offcanvas menu */}
             
              <Nav.Link as={Link} to="/user/Status" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <IoBarChart size="35px" number='0' status={getStatus('/user/Status')} />
                <span className="ms-2">Status</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/PersonalDetails" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='1' status={getStatus('/user/PersonalDetails')} />
                <span className="ms-2">Personal Details</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/AcademicQualifications" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='2' status={getStatus('/user/AcademicQualifications')} />
                <span className="ms-2">Academic Qualification</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/ResearchQualifications" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='3' status={getStatus('/user/ResearchQualifications')} />
                <span className="ms-2">Research Qualification</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/JRF_NET_SLET_SET" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='4' status={getStatus('/user/JRF_NET_SLET_SET')} />
                <span className="ms-2">JRF-NET/NET/SLET/SET</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/EmployementDetails" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='5' status={getStatus('/user/EmployementDetails')} />
                <span className="ms-2">Employment Details</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/References" className="text-white border-bottom d-flex align-items-center" onClick={handleClose}>
                <NumberIcons number='6' status={getStatus('/user/References')} />
                <span className="ms-2">References</span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Sidebar */}
        <Col xs={2} md={3} lg={2} className="sidebar text-white d-none d-md-flex flex-column justify-content-between p-0 rounded-end-3">
          <Nav className="flex-column mt-3">
            {/* Nav links for sidebar */}
            <Nav.Link as={Link} to="/user/Status" className="text-white border-bottom d-flex align-items-center">
              <IoBarChart size="35px" number='0' status={getStatus('/user/Status')} />
              <span className="d-none d-md-inline ms-2">Status</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/PersonalDetails" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='1' status={getStatus('/user/PersonalDetails')} />
              <span className="d-none d-md-inline ms-2">Personal Details</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/AcademicQualifications" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='2' status={getStatus('/user/AcademicQualifications')} />
              <span className="d-none d-md-inline ms-2">Academic Qualification</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/ResearchQualifications" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='3' status={getStatus('/user/ResearchQualifications')} />
              <span className="d-none d-md-inline ms-2">Research Qualification</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/JRF_NET_SLET_SET" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='4' status={getStatus('/user/JRF_NET_SLET_SET')} />
              <span className="d-none d-md-inline ms-2">JRF-NET/NET/SLET/SET</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/EmployementDetails" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='5' status={getStatus('/user/EmployementDetails')} />
              <span className="d-none d-md-inline ms-2">Employment Details</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/References" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='6' status={getStatus('/user/References')} />
              <span className="d-none d-md-inline ms-2">References</span>
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main content */}
        <Col className="p-0">
          <Container fluid className="main-content" style={{ overflowY: "auto", minHeight: "calc(100vh - 10rem)" }}>
            {/* Render top bar component */}
            {/* <AfterLoginTopBar /> */}

            {/* Render routes */}
            <Routes>
              <Route path='/user/Status' element={<StatusWithSpinner />} />
              <Route path='/user/PersonalDetails' element={<PersonalDetailsWithSpinner />} />
              <Route path='/user/AcademicQualifications' element={<AcademicQualificationsWithSpinner />} />
              <Route path='/user/ResearchQualifications' element={<ResearchQualificationsWithSpinner />} />
              <Route path='/user/EmployementDetails' element={<EmployementDetailsWithSpinner />} />
              <Route path='/user/JRF_NET_SLET_SET' element={<JRFNetSletSetWithSpinner />} />
              <Route path='/user/References' element={<ReferencesWithSpinner />} />
            </Routes>

            {/* Uncomment if you have a footer */}
            {/* <Footer /> */}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
