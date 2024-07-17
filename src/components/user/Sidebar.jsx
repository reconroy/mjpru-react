import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfterLoginTopBar from "./AfterLoginTopBar";
import PersonalDetails from './RegistrationData/PersonalDetails';
import NumberIcons from '../NumberIcons';
import Status from './Status';
import AcademicQualifications from "./RegistrationData/AcademicQualifications";
import EmploymentQualification from "./RegistrationData/EmployementQualification";
import JRF_NET_SLET_SET from "./RegistrationData/JRF_NET_SLET_SET";
import ResearchQualifications from "./RegistrationData/ResearchQualifications";
import { IoBarChart } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();

  const getStatus = (path) => (location.pathname === path ? 'active' : 'inactive');

  return (
    <Container fluid className="vh-100 d-flex p-0">
      <Row className="flex-nowrap w-100">
        <Col
          xs={2} md={3} lg={2}
          className="text-white d-flex flex-column justify-content-between p-0 rounded-end-3"
          style={{ backgroundColor: "#005174" }}
        >
          {/* ------------------------------ STATUS NAV STARTS ------------------------------------- */}
          <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/user/Status" className="text-white border-bottom d-flex align-items-center">
              <IoBarChart size="35px" number='0' status={getStatus('/user/Status')} />
              <span className="d-none d-md-inline ms-2">Status</span>
            </Nav.Link>
          {/* ------------------------------ STATUS NAV ENDS --------------------------------------- */}
            <Nav.Link as={Link} to="/user/PersonalDetails" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='1' status={getStatus('/user/PersonalDetails')} />
              <span className="d-none d-md-inline ms-2">Personal Details</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/AcademicQualifications" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='2' status={getStatus('/AcademicQualifications')} />
              <span className="d-none d-md-inline ms-2">Academic Qualification</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/ResearchQualifications" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='3' status={getStatus('/ResearchQualifications')} />
              <span className="d-none d-md-inline ms-2">Research Qualification</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/JRF_NET_SLET_SET" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='4' status={getStatus('/JRF_NET_SLET_SET')} />
              <span className="d-none d-md-inline ms-2">JRF-NET/NET/SLET/SET</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/EmploymentQualification" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='5' status={getStatus('/EmploymentQualification')} />
              <span className="d-none d-md-inline ms-2">Employment Details</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='6' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">References</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='7' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Research Guidance</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='8' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Research Papers</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='9' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Research Publication</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='10' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Research Articles</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='11' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Research Projects</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='12' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Consultancy Projects</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='13' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Policy Documents</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='14' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Patents</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='15' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Papers Presentation</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='16' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Invited Lectures</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='17' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">ICT</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='18' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Awards / Fellowships</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='19' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Extra Curricular Activities</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='20' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Uploads</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <NumberIcons number='21' status={getStatus('#link')} />
              <span className="d-none d-md-inline ms-2">Preview & Submit</span>
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="p-0">
          <Container fluid className="main-content">
            <AfterLoginTopBar />
            <Routes>
              <Route path='/Status' element={<Status/>} />
              <Route path='/PersonalDetails' element={<PersonalDetails />} />
              <Route path='/AcademicQualifications' element={<AcademicQualifications />} />
              <Route path='/ResearchQualifications' element={<ResearchQualifications />} />
              <Route path='/EmploymentQualification' element={<EmploymentQualification />} />
              <Route path='/JRF_NET_SLET_SET' element={<JRF_NET_SLET_SET />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
