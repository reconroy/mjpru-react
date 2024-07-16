import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscGraph } from "react-icons/vsc";
import { IoMdPerson } from "react-icons/io";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";
import { GiTiedScroll } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { VscReferences } from "react-icons/vsc";
import { GiTeacher } from "react-icons/gi";
import { GiPapers } from "react-icons/gi";
import { MdPublish } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { RiPresentationFill } from "react-icons/ri";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { RxActivityLog } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fluid className="vh-100 d-flex p-0">
      <Row className="flex-nowrap w-100">
        <Col 
          className={`bg-primary text-white ${expanded ? 'col-2' : 'col-1'} d-flex flex-column justify-content-between p-0`} 
          style={{ transition: 'width 0.3s' }}
        >
          <Nav className="flex-column mt-3">
            <Nav.Link href="#home" className="text-white border-bottom"><VscGraph />Status</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><IoMdPerson/>Personal Details</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom">< HiMiniAcademicCap />Academic Qualification</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><GiArchiveResearch />Research Qualification</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><GiTiedScroll />JRF-NET/NET/SLET/SET</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><GiNotebook />Employment Details</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><VscReferences />References</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><GiTeacher />Research Guidance</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><GiPapers />Research Papers</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><MdPublish />Research Publication</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><MdArticle />Research Articles</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><AiFillProject />Research Projects</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><FaProjectDiagram />Consultancy Projects</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><IoDocumentText />Policy Documents</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><HiClipboardDocumentList />Patents</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><RiPresentationFill />Papers Presentaion</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><PiChalkboardTeacherFill />Invited Lectures</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><RiGraduationCapFill />ICT</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><FaAward />Awards / Fellowships</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><RxActivityLog />Extra Carricular Activities</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><FaCloudUploadAlt />Uploads</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom"><IoCheckmarkDoneCircle />Preview & Submit</Nav.Link>
          </Nav>
          <Button 
            variant={expanded ? "light" : "dark"} 
            className="mb-2 mx-2 btn-sm"
            onClick={toggleSidebar}
          >
            {expanded ? 'Collapse' : 'Expand'}
          </Button>
        </Col>
        <Col className="p-0">
          <Container fluid className="main-content">
            <h2>Main Content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lectus diam, tempor at mi eget, pretium accumsan est. Nullam
              ultrices sit amet mauris id consectetur. Proin at maximus justo.
              Duis auctor accumsan erat vel malesuada.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
