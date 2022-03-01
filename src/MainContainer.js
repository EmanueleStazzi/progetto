import React, { Component } from 'react';
import Causa from './Cause/Inserimento/Causa/Causa';
import CustomNavbar from './CustomNavbar';
import LateralNavbar from './LateralNavbar';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contatti from './Contatti';

export class MainContainer extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <React.Fragment>
        <div className="main-container">
        <div className="causa"><Causa /></div>
        {/* <div> <CustomNavbar /></div> */}
        {/* <div className='lateral-navbar'><LateralNavbar /></div> */}
       {/* <div className="sidebar"><Sidebar /></div> */}
        
        </div>
        {/* <BrowserRouter>
            <Routes>
                <Route path="/inserimeto" element={<MainContainer />}>
                </Route>
                <Route path="/Ricerca-pendenti" element={<Contatti />}>
                </Route>
                
            </Routes>
            
            </BrowserRouter> */}
    </React.Fragment>;
  }
}

export default MainContainer;
