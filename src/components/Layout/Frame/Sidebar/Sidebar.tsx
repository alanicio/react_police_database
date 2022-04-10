import React from "react";
import { SidebarState } from "../../../../interfaces/SidebarState";
import { SidebarContainer } from "./styled";

const Sidebar = ({ isSidebarClosed, setIsSidebarClosed }: SidebarState) => {
   return (
      <SidebarContainer
         onMouseEnter={() => setIsSidebarClosed(false)}
         onMouseLeave={() => setIsSidebarClosed(true)}
         isSidebarClosed={isSidebarClosed}
      ></SidebarContainer>
   );
};

export default Sidebar;
