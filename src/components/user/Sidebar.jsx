import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Nav.Link href="#home" className="text-white border-bottom">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white border-bottom">Link</Nav.Link>
            <Nav.Link href="#disabled" disabled className="text-white border-bottom">Disabled</Nav.Link>
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
