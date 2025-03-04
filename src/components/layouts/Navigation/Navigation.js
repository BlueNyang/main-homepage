import { React, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Theme from '../../modules/change-theme/Theme';

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <Navbar expand='lg' className=''>
      <Container className='w-75'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-5' />
        <Navbar.Brand href='#home' className='font-pacifico col ms-5'>
          BlueNyang
        </Navbar.Brand>
        <Navbar.Collapse
          id='basic-navbar-nav'
          className={`justify-content-center w-100 ${windowWidth < 992 ? 'order-1' : ''}`}
        >
          <Nav className='justify-content-between w-75 mx-5'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Team Croffle</Nav.Link>
            <Nav.Link href='#link'>File Share</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Theme className='d-flex justify-content-end me-5' iconSize='1.3rem' />
      </Container>
    </Navbar>
  );
};

export default Navigation;
