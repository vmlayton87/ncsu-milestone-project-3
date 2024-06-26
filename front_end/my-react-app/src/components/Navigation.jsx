import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../index.scss';

// Credit for navbar toggle and collapse: https://stackoverflow.com/questions/20855483/how-navbar-toggle-collapse-navbar-collapse-classes-work-together

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    navigate('/');
  }

   // Condition to hide logout link on specific paths
   const showLogout = !['/login', '/signup'].includes(location.pathname);

    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="/characters">Characters</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                {showLogout && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation