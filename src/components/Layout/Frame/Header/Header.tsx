import React, { useState } from "react";
import { HeaderContainer } from "./styled";
import LogoPolice from "../../../../assets/logos/LogoPolice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { SidebarState } from "../../../../interfaces/SidebarState";

const Header = ({ isSidebarClosed, setIsSidebarClosed }: SidebarState) => {
   const [search, setSearch] = useState<string>("");
   const inputChangeHandler = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      setSearch(event.target.value);
   };
   return (
      <HeaderContainer isSidebarClosed={isSidebarClosed}>
         <div
            className="sidebar-icon"
            onMouseEnter={() => setIsSidebarClosed(false)}
            onMouseLeave={() => setIsSidebarClosed(true)}
         >
            <FontAwesomeIcon icon={faBars} size="lg" />
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
         </div>
         <img src={LogoPolice} alt="police" className="police-logo" />
         {/*  <p>
            This software is just to demostrate my skill as developer, please
            don't take it as real or legitimate
         </p> */}
         <h4>Police Database</h4>
         <label htmlFor="search">Find in population:</label>
         <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={inputChangeHandler}
            placeholder="Search by name or last name"
            autoComplete="off"
         />
      </HeaderContainer>
   );
};

export default Header;
