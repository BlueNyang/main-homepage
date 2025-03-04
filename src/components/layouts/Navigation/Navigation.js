import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Theme from '../../modules/change-theme/Theme';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="font-pacifico">
          BlueNyang
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="d-flex justify-content-between w-50">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Team Croffle</Nav.Link>
            <Nav.Link href="#link">File Share</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Theme className="d-flex justify-content-end" />
      </Container>
    </Navbar>
  );
};

export default Navigation;
