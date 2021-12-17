import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      s:0
    };
    // this.filterPlayerType = this.filterPlayerType(this)
  }
  UNSAFE_componentWillMount() {
    // axios.get('http://fantasy-baseball-login-env.eba-mc8vyb22.us-east-1.elasticbeanstalk.com/get_recent_token')
    // .then((response) => {
    //   console.log(response)
    // });
  }

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/main">CU Fantacy BaseBall</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/create_draft">Create Draft</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/player_list">Players List</Nav.Link>
            <Nav.Link eventKey={2} href="https://8npd3qciag.execute-api.us-east-1.amazonaws.com/demo/api/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

