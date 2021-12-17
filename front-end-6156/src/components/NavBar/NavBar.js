import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => (
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/main">CU Fantacy BaseBall</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/create_draft">Create Draft</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/player_list">Players List</Nav.Link>
        <Nav.Link eventKey={2} href="https://cu-fantasy.auth.us-east-1.amazoncognito.com/login?client_id=1c5m1dkc43amhvr10bjf1jrqsr&response_type=code&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=https://8npd3qciag.execute-api.us-east-1.amazonaws.com/demo/api/main">
          Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

