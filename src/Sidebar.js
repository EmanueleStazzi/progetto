import React, {useState} from 'react';
import { ProSidebar,SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaScroll } from "react-icons/fa";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Causa from './Cause/Inserimento/Causa/Causa';
const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(true)
  
  const menuIconClick = () => {
   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  return (
    
    <ProSidebar  collapsed={menuCollapse}>
      <SidebarHeader>
        Menù
      <div className="closemenu" onClick={menuIconClick}>
{menuCollapse ? (
<FiArrowRightCircle/>
) : (
<FiArrowLeftCircle/>
)}
</div>

      </SidebarHeader>
  <Menu iconShape="square">
    <SubMenu title="Cause"  icon={<FaScroll />}>
      <MenuItem><Link to="/inserimento">Inserimento</Link></MenuItem>
      <MenuItem><Link to="/ricerca-pendenti">Ricerca pendenti</Link></MenuItem>
      <MenuItem>Ricerca definite</MenuItem>
      <MenuItem>Riunificazione</MenuItem>
    </SubMenu>
    <SubMenu title="Servizio" icon={<FaScroll />}>
      <MenuItem>Causa</MenuItem>
      <MenuItem>Atto</MenuItem>
      <MenuItem>Provvedimento impugnato</MenuItem>
      <MenuItem>Oggetto domanda</MenuItem>
      <MenuItem>Organo giudicante</MenuItem>
      <MenuItem>Esito provvedimento</MenuItem>
      <MenuItem>Tipologia provvedimento</MenuItem>
      <MenuItem>Attività</MenuItem>
      <MenuItem>Udienza</MenuItem>
      <MenuItem>Tipologia documento</MenuItem>
    </SubMenu>
    <SubMenu title="Utilità" icon={<FaScroll />}>
      <MenuItem>Ricerca udienze</MenuItem>
      <MenuItem>Scadenziario</MenuItem>
    </SubMenu>
    <SubMenu title="Statistiche" icon={<FaScroll />}>
      <MenuItem>Per stato di lavorazione</MenuItem>
      <MenuItem>Per le Direzioni regionali</MenuItem>
      <MenuItem>Per la Direzione centrale</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>


  );
};

export default Sidebar;