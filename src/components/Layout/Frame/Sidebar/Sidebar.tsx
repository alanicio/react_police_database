import {
   faHandcuffs,
   faHouse,
   faPerson,
   faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
         <Menu isSidebarClosed={isSidebarClosed}>
            <li>
               <Link to="/">
                  <FontAwesomeIcon icon={faHouse} className="icon" />
                  <p>Home</p>
               </Link>
            </li>
            <li>
               <Link to="citizens">
                  <FontAwesomeIcon icon={faPerson} className="icon" />
                  <p>Citizens</p>
               </Link>
            </li>
            <li>
               <Link to="polices">
                  <FontAwesomeIcon icon={faScaleBalanced} className="icon" />
                  <p>Polices</p>
               </Link>
            </li>
            <li>
               <Link to="criminals">
                  <FontAwesomeIcon icon={faHandcuffs} className="icon" />
                  <p>Criminals</p>
               </Link>
            </li>
         </Menu>
      </SidebarContainer>
   );
};

export default Sidebar;
