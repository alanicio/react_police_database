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
                  <div className="icon-container">
                     <FontAwesomeIcon icon={faHouse} className="icon" />
                  </div>
                  <p>Home</p>
               </Link>
            </li>
            <li>
               <Link to="citizens">
                  <div className="icon-container">
                     <FontAwesomeIcon icon={faPerson} className="icon" />
                  </div>
                  <p>Citizens</p>
               </Link>
            </li>
            <li>
               <Link to="polices">
                  <div className="icon-container">
                     <FontAwesomeIcon icon={faScaleBalanced} className="icon" />
                  </div>
                  <p>Polices</p>
               </Link>
            </li>
            <li>
               <Link to="criminals">
                  <div className="icon-container">
                     <FontAwesomeIcon icon={faHandcuffs} className="icon" />
                  </div>
                  <p>Criminals</p>
               </Link>
            </li>
         </Menu>
      </SidebarContainer>
   );
};

export default Sidebar;
