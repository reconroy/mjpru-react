import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfterLoginTopBar from "./AfterLoginTopBar";
import { Link, Route, Routes } from 'react-router-dom';
import Status from './Status';
import PersonalDetails from './PersonalDetails';

const Sidebar = () => {
  return (
    <Container fluid className="vh-100 d-flex p-0 ">
      <Row className="flex-nowrap w-100">
        <Col
          xs={2} md={3} lg={2}
          className=" text-white d-flex flex-column justify-content-between p-0 rounded-end-3"
          style={{ backgroundColor: "#005174" }}
        >
          <Nav className="flex-column mt-3 " >
            <Nav.Link as={Link} to="/user" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline">Status</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/user/PersonalDetails" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline">Personal Details</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline">Academic Qualification</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Research Qualification</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline">JRF-NET/NET/SLET/SET</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Employment Details</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> References</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Research Guidance</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Research Papers</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Research Publication</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline">  Research Articles</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Research Projects</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Consultancy Projects</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Policy Documents</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Patents</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Papers Presentation</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Invited Lectures</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> ICT</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Awards / Fellowships</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Extra Curricular Activities</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Uploads</span>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom d-flex align-items-center">
              <span className="d-none d-md-inline"> Preview & Submit</span>
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="p-0">
          <Container fluid className="main-content">
            <AfterLoginTopBar />
            <Routes>
              <Route path='/' element={<Status />} />
              <Route path='/PersonalDetails' element={<PersonalDetails />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
