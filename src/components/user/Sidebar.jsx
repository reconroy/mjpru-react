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
import ResearchGuidance from './RegistrationData/ResearchGuidance';
import { IoBarChart } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../customStyles/sidebar.css";
import withSpinner from './../../withSpinner';

const componentsWithSpinner = {
  Status: withSpinner(Status),
  PersonalDetails: withSpinner(PersonalDetails),
  AcademicQualifications: withSpinner(AcademicQualifications),
  ResearchQualifications: withSpinner(ResearchQualifications),
  EmployementDetails: withSpinner(EmployementDetails),
  References: withSpinner(References),
  JRFNetSletSet: withSpinner(JRFNetSletSet),
  ResearchGuidance: withSpinner(ResearchGuidance),
};

const links = [
  { path: '/user/Status', number: '0', label: 'Status', icon: IoBarChart, size: '35px' },
  { path: '/user/PersonalDetails', number: '1', label: 'Personal Details', icon: NumberIcons, size: '35px' },
  { path: '/user/AcademicQualifications', number: '2', label: 'Academic Qualification', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchQualifications', number: '3', label: 'Research Qualification', icon: NumberIcons, size: '35px' },
  { path: '/user/JRFNetSletSet', number: '4', label: 'JRF-NET/NET/SLET/SET', icon: NumberIcons, size: '35px' },
  { path: '/user/EmployementDetails', number: '5', label: 'Employment Details', icon: NumberIcons, size: '35px' },
  { path: '/user/References', number: '6', label: 'References', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchGuidance', number: '7', label: 'Research Guidance', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchPapers', number: '8', label: 'Research Papers', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchPublication', number: '9', label: 'Research Publication', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchArticles', number: '10', label: 'Research Articles', icon: NumberIcons, size: '35px' },
  { path: '/user/ResearchProjects', number: '11', label: 'Research Projects', icon: NumberIcons, size: '35px' },
  { path: '/user/ConsultancyProjects', number: '12', label: 'Consultancy Projects', icon: NumberIcons, size: '35px' },
  { path: '/user/PolicyDocuments', number: '13', label: 'Policy Documents', icon: NumberIcons, size: '35px' },
  { path: '/user/PatentsGranted', number: '14', label: 'Patents Granted', icon: NumberIcons, size: '35px' },
  { path: '/user/PaperPresentation', number: '15', label: 'Paper Presentation', icon: NumberIcons, size: '35px' },
  { path: '/user/InvitedLectures', number: '16', label: 'Invited Lectures', icon: NumberIcons, size: '35px' },
  { path: '/user/ICT', number: '17', label: 'ICT', icon: NumberIcons, size: '35px' },
  { path: '/user/Awards&Fellowships', number: '18', label: 'Awards & Fellowships', icon: NumberIcons, size: '35px' },
  { path: '/user/ExtraCurricularActivities', number: '19', label: 'Extra Curricular Activities', icon: NumberIcons, size: '35px' },
  { path: '/user/Uploads', number: '20', label: 'Uploads', icon: NumberIcons, size: '35px' },
  { path: '/user/Preview&Submit', number: '21', label: 'Preview & Submit', icon: NumberIcons, size: '35px' },
];

const Sidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStatus = (path) => (location.pathname === path ? 'active' : 'inactive');
  
  const renderLinks = (isMobile) => (
    links.map(({ path, number, label, icon: Icon, size }) => (
      <Nav.Link 
        key={path}
        as={Link}
        to={path}
        className={`sidebar-link text-white border-bottom d-flex align-items-center${isMobile ? '' : ' d-none d-md-flex'} ${getStatus(path)} ${hoveredPath === path ? 'hovered' : ''}`}
        onClick={handleClose}
        onMouseEnter={() => setHoveredPath(path)}
        onMouseLeave={() => setHoveredPath(null)}
      >
        <Icon number={number} status={getStatus(path)} isHovered={hoveredPath === path} style={{ fontSize: size }} />
        <span className={`ms-2${isMobile ? '' : ' d-none d-md-inline'}`}>{label}</span>
      </Nav.Link>
    ))
  );

  return (
    <Container fluid className="p-0">
      <Row className="flex-nowrap h-100">
        <Button
          variant=""
          className="d-md-none d-flex justify-content-center align-items-center border-light"
          onClick={handleShow}
          style={{ position: "fixed", zIndex: "1", width: "40px", height: "40px", left: "12px", top: "11px", borderRadius: "50%", backgroundColor: "#005174" }}
        >
          <HiMenuAlt1 size="35" color='white' />
        </Button>
        <Offcanvas show={show} onHide={handleClose} className="d-md-none w-75 offcanvas-custom" style={{ backgroundColor: "#005174" }}>
          <Offcanvas.Header closeButton className="offcanvas-header-custom text-light">
            <Offcanvas.Title><span className='text-light'>Steps Menu</span></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {renderLinks(true)}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Col xs={2} md={3} lg={2} className="sidebar text-white d-none d-md-flex flex-column justify-content-between p-0 rounded-end-3">
          <Nav className="flex-column mt-3">
            {renderLinks(false)}
          </Nav>
        </Col>
        <Col className="p-0">
          <Container fluid className="main-content" style={{ overflowY: "auto", minHeight: "calc(100vh - 10rem)" }}>
            <Routes>
              {Object.entries(componentsWithSpinner).map(([key, Component]) => (
                <Route key={key} path={`/user/${key}`} element={<Component />} />
              ))}
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
