import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class LateralNavbar extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <React.Fragment>
        <div className="lateral-navbar">
          <CDBSidebar>
            <CDBSidebarHeader>

            <h2>Menu</h2>
            </CDBSidebarHeader>
            <CDBSidebarMenu>
              <h3>Cause</h3>
              <NavLink  to="/">
                <CDBSidebarMenuItem>Inserimento</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/Contatti">
                <CDBSidebarMenuItem>Ricerca Pendenti</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebar>
        </div>
    </React.Fragment>;
  }
}

export default LateralNavbar;
