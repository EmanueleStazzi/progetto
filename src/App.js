

import './App.css';
import CustomNavbar from './CustomNavbar';
import LateralNavbar from './LateralNavbar';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import Causa from './Cause/Inserimento/Causa/Causa';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contatti from './Contatti';
import RicercaPendenti from './Cause/Ricerca_Pendenti/RicercaPendenti';
import { Navbar, Container , Nav ,  NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './img/logoPortale.gif';
import logo2 from './img/testata.gif';
import Login from './Login'

function App() {
  const Img = <img src={"../img/logoPortale.gif" }/>
  return (
    
    <React.Fragment className="App">
      <header className="App-header">
      <BrowserRouter>
        {/* <CustomNavbar /> */}
        <div className="custom-navbar" >
        <Navbar bg="light" expand="lg" fixed="top">
        <img src={logo}  />
  <Container>
    <Navbar.Brand href="/">
    <img src={logo2}  />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Contatti">Contatti</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        <div className="sidebar"><Sidebar /></div>
        
        
            <Routes>
                <Route path="/" element={<Login />}>
                </Route>
                <Route path="/Contatti" element={<Contatti />}>
                </Route>
                <Route path="/inserimento" element={<MainContainer />}>
                </Route>
                <Route path="/ricerca-pendenti" element={<RicercaPendenti />}>
                </Route>
                
            </Routes>
            
            </BrowserRouter>
        
       
      </header>
    </React.Fragment>
    
  );
}

export default App;
