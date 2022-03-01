import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import MainContainer from './MainContainer';
import Contatti from './Contatti';
import { Navbar, Container , Nav ,  NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class CustomNavbar extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <React.Fragment>
        <div className="custom-navbar">
        <Navbar bg="light" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="/">Agenzia delle Entrate</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Contatti">Contatti</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
    </React.Fragment>;
  }
}

export default CustomNavbar;
