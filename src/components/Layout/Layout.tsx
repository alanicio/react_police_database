import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Main } from "./styled";

const Layout = () => {
   return (
      <Main>
         <Header />
         <Outlet />
      </Main>
   );
};

export default Layout;
