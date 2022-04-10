import React from "react";
import { Link } from "react-router-dom";
import { SidebarState } from "../../../../interfaces/SidebarState";
import { Menu, SidebarContainer } from "./styled";

const Sidebar = ({ isSidebarClosed, setIsSidebarClosed }: SidebarState) => {
   return (
      <SidebarContainer
         onMouseEnter={() => setIsSidebarClosed(false)}
         onMouseLeave={() => setIsSidebarClosed(true)}
         isSidebarClosed={isSidebarClosed}
      >
         <Menu>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="citizens">Citizens</Link>
            </li>
            <li>
               <Link to="polices">Polices</Link>
            </li>
            <li>
               <Link to="criminals">Criminals</Link>
            </li>
         </Menu>
      </SidebarContainer>
   );
};

export default Sidebar;
