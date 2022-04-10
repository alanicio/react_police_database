import React from "react";
import { Outlet } from "react-router-dom";
import { Main } from "./styled";

const Layout = () => {
  return (
    <Main>
      A
      <Outlet />
    </Main>
  );
};

export default Layout;
